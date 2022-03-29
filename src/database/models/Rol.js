module.exports =(sequelize,dataTypes)=>{
    const alias= 'Rol';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'rol',
        timestamps: false
    }
    const Rol=sequelize.define(alias,cols,config);

    Rol.associate=function(models){
        Rol.hasMany(models.User,{
            as: 'user',
            foreignKey: 'idRol'
        })
    }
    return Rol;
}