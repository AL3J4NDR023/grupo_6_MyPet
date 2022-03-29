module.exports =(sequelize,dataTypes)=>{
    const alias= 'Category';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'category',
        timestamps: false
    }
    const Category=sequelize.define(alias,cols,config);
   Category.associate=function(models){
       Category.belongsToMany(models.Product,{
            as:'product',
            through:'categoryproducts',
            foreignKey:'idCategory',
            otherKey:'idProduct',
            timestamps: false
        })
    }
    return Category;
}