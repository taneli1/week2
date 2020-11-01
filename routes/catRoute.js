'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');
const upload = multer({dest: 'uploads/'});

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get_by_id);
router.post('/', upload.single('catfile'), catController.cat_create);
router.put('/:id', upload.single('catfile'), catController.cat_update);
router.delete('/:id', upload.single('catfile'), catController.cat_delete);

module.exports = router;