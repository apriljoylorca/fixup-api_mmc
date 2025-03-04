const express = require('express');
const { register, login, addUser, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add', authMiddleware, addUser);
router.put('/update/:id', authMiddleware, updateUser);
router.delete('/delete/:id', authMiddleware, deleteUser);

module.exports = router;