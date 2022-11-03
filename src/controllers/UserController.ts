import { NextFunction, Request, Response } from 'express';
import fs from 'fs'
import UserHelper from '../helper/user.helper';

export default class UserController {

    async createUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const userHelper = new UserHelper();
            const filePath = req.file.path
            const fileStream = fs.createReadStream(filePath, { highWaterMark: 1024 * 1024 });
            const result = userHelper.prepareSaveCSVData(fileStream);
            if(result){
                res.send("File Uploaded Successfully")
            }else {
                res.status(500).send({message: "Error during saving file data"})
            }
            
        } catch (error) {
            res.status(500).send({error})
        }
    };
}
