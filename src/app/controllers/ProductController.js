import * as Yup from 'yup'
import Product from '../models/Product'
import Category from '../models/Category'
import User from '../models/User'

class ProductController {
    async store(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                price: Yup.number().required(),
                category_id: Yup.number().required(),
                offer: Yup.boolean(),
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin:isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
               return response.status(401).json()
            }

            const { filename: path } = request.file
            const { name, price, category_id, offer } = request.body

            const product = await Product.create({
                name,
                price,
                category_id,
                path,
                offer
            });
            
            return response.json(product);
        } catch (err) {
            console.log (err)
        }
    }

    async index(request, response) {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name'],
            },
        ],
        })

        return response.json(products)
    }
}

export default new ProductController()
