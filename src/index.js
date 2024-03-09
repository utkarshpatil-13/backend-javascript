import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

const app = express()

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port: ${process.env.PORT}`);
    })

    app.on("error", (error) => {
        console.log(`Server Connection Error : `, error);
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed !!! ", err);
})


















// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(`${process.env.PORT}`, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("Error", error);
//         throw error
//     }
// })()