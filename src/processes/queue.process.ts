import { Job } from "bull";
import User from '../models/User';

const processUserJob = async (job: Job) => {
    console.log(job.data);
    User.insertMany(job.data).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
    
}

export default processUserJob;