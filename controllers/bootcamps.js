//@desc     Create bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamps = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Create new bootcamps" });
}

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
}

//@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `Get single bootcamp with id:${req.params.id}` });
}

//@desc     Update bootcamps with id
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `Update bootcamps with id:${req.params.id}` });
}

//@desc     Delete bootcamps with id
//@route    DEL /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `Delete bootcamps with id:${req.params.id}` });
}

