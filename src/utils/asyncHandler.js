const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        const mypromise = new Promise((resolve, reject) => {
            resolve(requestHandler(req, res, next));
        })

        mypromise.catch((error) => {
            next(error);
            console.log("error: ", error);
        })

        return mypromise;
    }
}

export {asyncHandler}


// const asyncHandler = (func) = async (req, res, next) => {
//     try{
//         await func(req, res, next);
//     }
//     catch(error){
//         req.status(err.code || 500).json({
//             success: false,
//             message: err.message,
//         });
//     }
// }
