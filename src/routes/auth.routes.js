const {Router} = require('express');
const { userLogin } = require('../controllers');
const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login 
 *     tags: [Users]
 *     requestBody:
 *       description: To login to your account you need your email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       200:
 *         description: accepted
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

router.post('/auth/login', userLogin );

module.exports = router;