import express from 'express';
import UserController from '../controllers/UserController';
import multer from 'multer';

const router = express.Router();

const controller = new UserController();

const upload = multer({ dest: 'tmp/csv/' });
router.post('/upload-csv', upload.single('file'), controller.createUsers);

export = router;