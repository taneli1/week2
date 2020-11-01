'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const upload = multer({dest: 'uploads/'});

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get_by_id);

router.post('/', upload.single('user'), userController.user_create);
router.put('/:id', upload.single('cat'), userController.user_update);
router.delete('/:id', upload.single('cat'), userController.user_delete);

module.exports = router;