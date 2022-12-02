const {Router} = require('express');
const { userRegister, getAllUsers } = require('../controllers');
const authenticate = require ('../middlewares/auth.middleware');

const router = Router();
/**
 * @openapi
 * /api/v1/user/register:
 *   post:
 *     summary: Create an account 
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username, email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/users"
 */

router.post('/user/register', userRegister);
router.get('/users', authenticate, getAllUsers);


module.exports = router;
