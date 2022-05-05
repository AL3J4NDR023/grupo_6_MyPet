module.exports =(sequelize,dataTypes)=>{
    const alias= 'Product';
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
        },
        price:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        image:{
            type:dataTypes.STRING(255),
            allowNull: true
        },
        amount:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(500),
        },
        color:{
            type: dataTypes.STRING(255)
        },
        idBrand:{
            type: dataTypes.INTEGER(11)
        },
        idMascota:{
            type: dataTypes.INTEGER(11)
        },
        idCategory:{
            type: dataTypes.INTEGER(11)
        }
        
    }; 
    const config={
        tableName: 'products',
        timestamps: false
        
    }
    const Product=sequelize.define(alias,cols,config);
    
    Product.associate=function(models){
        Product.belongsTo(models.Brand,{
            as:'brand',
            foreignKey:'idBrand'
        })
        Product.belongsTo(models.Mascota,{
            as:'mascota',
            foreignKey:'idMascota'
        })
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "idCategory"
        })
    }

    


    return Product;
}