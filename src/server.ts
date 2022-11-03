import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
})
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://mongo_db:27017/employee');
        console.log("connected to Mongo DB");
    } catch (error) {
        console.error(error);

    }
}
connectToDB();
export default app;

