import { assert, expect } from 'chai';
import { stub } from 'sinon';
import UserController from '../src/controllers/UserController';
import UserHelper from '../src/helper/user.helper';
import { IUser } from '../src/models/User';
import fs from 'fs';



describe("CSV File Upload ", () => {

const userData = ["Nitish, rai, test123@gmail.com, male, dev"];
    before(() => {
        // const userDataObj: IUser = {
        //     first_name: "Nitish",
        //     last_name: "rai",
        //     email: "test123@gmail.com",
        //     gender: "male",
        //     department: "dev",
        // }

        // userDataArr.push(userDataObj);
    })

    it("it should return true on successful processing for filestream", async () => {
        const userHelperInstance = new UserHelper();
        fs.writeFileSync('test.csv', userData.join('\n'))
        const fileStream = fs.createReadStream('test.csv');
        const res = await userHelperInstance.prepareSaveCSVData(fileStream);
        expect(res).to.be.true;
    })

});
