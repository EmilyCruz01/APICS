const express = require('express');
const chatController = require('../controllers/chatController');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.getIndex);
router.get('/messages', chatController.getMessages);
router.post('/messages', chatController.postMessage);
router.get('/short-polling', chatController.shortPolling);

module.exports = router;

