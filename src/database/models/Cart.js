module.exports =(sequelize,dataTypes)=>{
    const alias= 'Cart';
    const cols={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        idProducts:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        idCart:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'cart',
        timestamps: false
    }
    const Cart=sequelize.define(alias,cols,config);
    return Cart;
}