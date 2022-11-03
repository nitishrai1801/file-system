import Bull from "bull";
import { IUser } from "../models/User";
import processUserJob from "../processes/queue.process";

const userQueue = new Bull("user-queue", {
    redis: process.env.REDIS_URL
})

// userQueue.process(processUserJob)

const createJob = (data: IUser[]) =>{
    console.log('Created Queue');
    
    userQueue.add(data,  {
        attempts: 5
    });
}

export {createJob};
export default userQueue;