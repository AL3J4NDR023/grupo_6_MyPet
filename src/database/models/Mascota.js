module.exports =(sequelize,dataTypes)=>{
    const alias= 'Mascota';
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
        tableName: 'mascota',
        timestamps: false
    }
    const Mascota=sequelize.define(alias,cols,config);
   Mascota.associate=function(models){
       Mascota.hasMany(models.Product,{
            as:'products',
            foreignKey:'idMascota'
        })
    }
    return Mascota; 
}