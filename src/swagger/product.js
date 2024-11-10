/**
 * @openapi
 * /product:
 *   get:
 *     summary: Obtiene todos los productos desde la base de datos MySQL
 *     tags: [producto]
 *     security:
 *       - jwtAuth: []  # Define un esquema de autenticación personalizado
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bEstado:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa o no
 *                 iCodigo:
 *                   type: integer
 *                   description: Código de estado de la solicitud
 *                 Obj:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                         description: Nombre del producto
 *                       descripcion:
 *                         type: string
 *                         description: Descripción del producto
 *                       precio:
 *                         type: number
 *                         description: Precio del producto
 *                       stock:
 *                         type: integer
 *                         description: Stock del producto
 *   post:
 *     summary: Crea, actualiza y elimina productos en la base de datos MySQL
 *     tags: [producto]
 *     security:
 *       - jwtAuth: []  # Usa el esquema de autenticación personalizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               action:
 *                 type: string
 *     responses:
 *       200:
 *         description: Respuesta del CRUD de productos
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
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     jwtAuth:                 # Define el esquema personalizado sin "Bearer"
 *       type: apiKey
 *       in: header
 *       name: Authorization     # Usa solo "JWT" en el encabezado de autorización
 *       description: Write = JWT {token}
 */