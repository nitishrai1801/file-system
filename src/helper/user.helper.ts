import fs from 'fs';
import User from '../models/User';
import { IUser } from '../models/User';


export default class UserHelper {

    async prepareSaveCSVData(fileStream: fs.ReadStream): Promise<boolean> {
        try {
            // Convert csv data according to user schema
            let remainder = '';
            const nl = '\n'.charCodeAt(0);
            let resProcess: boolean = false;
            for await (let chunk of fileStream) {
                const lastIndexNL = chunk.lastIndexOf(nl);
                if (remainder) {
                    chunk = remainder + chunk;
                }
                remainder = chunk.slice(lastIndexNL + 1);
                chunk = chunk.slice(0, lastIndexNL);
                resProcess = await this.processChunk(chunk);
                if (!resProcess) {
                    break;
                }
            }
            fileStream.on('end', () => {
            })
            return resProcess
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }


    private async processChunk(chunk): Promise<boolean> {
        try {
            // processing of chunk line by line
            let start = 0;
            let end;
            const nl = '\n'.charCodeAt(0);
            const dataToInsert = []
            while ((end = chunk.indexOf(nl, start)) !== -1) {
                let rowStr = chunk.slice(start, end).toString();
                let rowData = rowStr.split(',');
                const row: IUser = {
                    first_name: rowData[0],
                    last_name: rowData[1],
                    email: rowData[2],
                    gender: rowData[3],
                    department: rowData[4],
                }
                dataToInsert.push(row);
                start = end + 1;
            }

            // Create a queue and backgroung jobs
            // userQueue.process(processUserJob);
            // createJob(dataToInsert)

            // Insert data in DB
            // User.insertMany(dataToInsert).then(function () {
            //     console.log("Data inserted")
            // }).catch(function (error) {
            //     console.log(error)
            // });
            const result = await this.saveUsers(dataToInsert);
            return result;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    private async saveUsers(userData: IUser[]): Promise<boolean> {
        // Insert data in DB
        try {


            await User.insertMany(userData);
            console.log("Data inserted")
            return true;
            //  User.insertMany(userData).then(function () {
            //     console.log("Data inserted")
            //     return true;
            // }).catch(function (error) {
            //     console.log(error)
            //     return false;
            // });
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}
