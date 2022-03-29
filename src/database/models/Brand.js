module.exports =(sequelize,dataTypes)=>{
    const alias= 'Brand';
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
        tableName: 'brands',
        timestamps: false
    }
    const Brand=sequelize.define(alias,cols,config);

    Brand.associate=function(models){
        Brand.hasMany(models.Product,{
            as: 'products',
            foreignKey: 'idBrand'
        })
    }

    return Brand;
}