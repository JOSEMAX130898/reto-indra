/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: iniciar sesión y obtener token del usuario en la base de datos MySQL
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: respuesta del crud de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bEstado:
 *                   type: boolean
 *                 iCodigo:
 *                   type: integer
 *                 Obj:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: integer
 *                     token_access:
 *                       type: string
 *                  
 * 
 * /auth/create:
 *   post:
 *     summary: crear usuario en la base de datos MySQL
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: respuesta del crud de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bEstado:
 *                   type: boolean
 *                 iCodigo:
 *                   type: integer
 *                 Obj:
 *                   type: object
 *                   properties:
 *                     result:
 *                       type: integer
 *                     message:
 *                       type: string
 *                  
 * 
 */