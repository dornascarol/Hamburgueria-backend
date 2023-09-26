import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3000/product-file/${this.path}`
                },
            },
        },
        {
            sequelize,
        }
        )
        return this
    }

    static associate(models){
        this.belongsTo(models.Category, { 
            foreignKey: 'category_id', 
            as: 'category',
        })
    }
}

export default Product
