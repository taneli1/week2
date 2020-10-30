'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');
const upload = multer({dest: 'uploads/'});

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get_by_id);
router.post('/:id', upload.single('cat'), catController.cat_create);
router.put('/:id', upload.single('cat'), catController.cat_update);
router.delete('/:id', upload.single('cat'), catController.cat_delete);

module.exports = router;