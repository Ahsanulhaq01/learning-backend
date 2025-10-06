const asyncHandlers = (requestHandler)=>{
   return async (req,res,next)=>{
        Promise.resolve(requestHandler(req , res ,next)).catch((err)=>{
            next(err);
        })
    }
   
}

export {asyncHandlers}


// const asyncHandlers = (requesthandler)=>
//     async (req ,res , next)=>{
//         try {
//             await requesthandler(req , res, next);

//         } catch (error) {
//             res.status(err.code || 500).json({
//                 success : false,
//                 message : err.message,
//             })
//         }
//     }