import mongoose from "mongoose";


const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`, {
            serverSelectionTimeoutMS: 10000
        })
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection error",error )
        process.exit(1)
    }
    
}

export default connectDB
