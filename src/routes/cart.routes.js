const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { addToCart, getAllProductsInCart } = require('../controllers');

const router = Router ();


/**
 * @openapi
 * /api/v1/cart/products/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products from the cart
 *     tags: [Cart]
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
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add products to your cart
 *     tags: [Cart]
 *     requestBody:
 *       description: To get and see all the products in cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 4
 *               productId:
 *                 type: integer
 *                 example: 2
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

router.post('/cart/:userId',authenticate, addToCart);
router.get('/cart/products/:userId',authenticate, getAllProductsInCart);


module.exports = router;