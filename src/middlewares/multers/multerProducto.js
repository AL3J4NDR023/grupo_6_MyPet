const multer= require('multer')
const path= require('path')
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'public/images/products')
    },
    filename:(req,file,cb)=>{
        
        const fileName='img_'+req.body.name+path.extname(file.originalname);
        cb(null,fileName);
    }
})

const upload =multer({storage});
module.exports = upload;
