module.exports =(sequelize,dataTypes)=>{
    const alias= 'Categoryproduct';
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
        idCategory:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }; 
    const config={
        tableName: 'categoryproducts',
        timestamps: false
    }
    const Categoryproduct=sequelize.define(alias,cols,config);
    
    return Categoryproduct;
}