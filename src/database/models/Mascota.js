module.exports =(sequelize,dataTypes)=>{
    const alias= 'Mascota';
    const cols={
        idMascota:{
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
        tableName: 'mascota',
        timestamps: false
    }
    const Mascota=sequelize.define(alias,cols,config);
   Mascota.associate=function(models){
       Mascota.belongsToMany(models.Product,{
            as:'mascota',
            through:'mascotaproducts',
            foreignKey:'idMascota',
            timestamps: false
        })
    }
    return Mascota;
}