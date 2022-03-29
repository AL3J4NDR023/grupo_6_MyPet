module.exports =(sequelize,dataTypes)=>{
    const alias= 'Cartproduct';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        idProduct:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        idCart:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }

    }; 
    const config={
        tableName: 'cartproducts',
        timestamps: false
    }
    const Cartproduct=sequelize.define(alias,cols,config);
    return Cartproduct;
}