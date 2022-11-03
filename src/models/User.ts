import mongoose, {Document} from 'mongoose';

export interface IUser{
    first_name:string;
    last_name:string;
    email:string;
    gender:string;
    department:string;

}

export interface IUserModel extends IUser, Document {}

const userSchema: mongoose.Schema = new mongoose.Schema({
    first_name:{
        type: String, 
        required:true
    },
    last_name:{
        type: String, 
        required:true
    },
    email:{
        type: String, 
        required:true
    },
    gender:{
        type: String, 
        required:true
    },
    department:{
        type: String,
        required:true
    }
});

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;