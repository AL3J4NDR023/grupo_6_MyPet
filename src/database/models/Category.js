module.exports =(sequelize,dataTypes)=>{
    const alias= 'Category';
    const cols={
        idCategory:{
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
       
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "idCategory"
        })
    }
    return Category;
}