const {Router} = require('express');
const { purchase, getAll } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();


/**
 * @openapi
 * /api/v1/purchases/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all purchases from user
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
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
 *                   items: {}
 * /api/v1/purchase/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Buy products from your cart
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
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
 *                   items: {}
 */

router.post('/purchase/:userId', authenticate, purchase);
router.get('/purchases/:userId', authenticate,  getAll);



module.exports = router;