const multer = require('multer');

const storage = multer.diskStorage({
    destination: './public/images', 
    filename: (req,file, cb) => {
        return cb(null, Date.now() + '-' +file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}).single('Images')

exports.uploadImage = (req, res) => {
    upload(req, res, (err) => {
        console.log("Request for file upload", req.file);
        if(err instanceof multer.MulterError){
            return res.status(500).json(err);
        }else if(err){
            return res.status(500).json({
                message: "Error: file not selected."
            })
        }else{
            console.log("Uploaded file is ", req.file)
            const path = req.file.filename;

            return res.status(200).json({
                message: "file uploaded.",
                image: path
            })
        }
    })
}