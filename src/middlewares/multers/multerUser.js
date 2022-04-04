const multer= require('multer')
const path= require('path')
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'public/images/users')
    },
    filename:(req,file,cb)=>{
        const fileName='user-'+req.body.name+'-'+req.body.email+path.extname(file.originalname);
        cb(null,fileName);
    }
})

const upload =multer({storage});
module.exports = upload;
