const multer= require('multer')
const path= require('path')
const storage= multer.diskStorage({
    destination:()=>{
        cb(null, 'public/images/users')
    },
    filename:()=>{
        cb(null,file.fieldname+'-'+path.extname(file.originalname));
    }
})

const upload =multer({storage});
module.exports = upload;
