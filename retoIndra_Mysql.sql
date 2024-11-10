/***************************TABLES*********************************************/

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    status TINYINT(1) DEFAULT 1	
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    stock INT,
    status TINYINT(1) DEFAULT 1
);

/*******************************PROCEDURES*****************************************/

DELIMITER //
DROP PROCEDURE IF EXISTS fnUserCrud;

CREATE PROCEDURE fnUserCrud(
in_email VARCHAR(50),
in_password VARCHAR(255))
BEGIN
	DECLARE count INT;
	DECLARE result INT;
	DECLARE message VARCHAR(100);

	SELECT COUNT(*) INTO count
	FROM users
	WHERE email = in_email;
	
	IF count > 0 THEN
			SET result = -1;
			SET message = 'El usuario ya existe';
	ELSE
			-- Insertar el nuevo usuario (deberías cifrar la contraseña en el backend)
			INSERT INTO users (email, password)
			VALUES (in_email, in_password);
      SET result = 0;
			SET message = 'Usuario creado exitosamente';
	END IF;
	SELECT result, message;
END //
DELIMITER ;

/*****************************************/

DELIMITER //
DROP PROCEDURE IF EXISTS fnUserLogin;

CREATE PROCEDURE fnUserLogin(
    in_email VARCHAR(50)
)
BEGIN
    DECLARE stored_password VARCHAR(255);
    DECLARE result INT;
    DECLARE message VARCHAR(100);
    
    -- Verificar si el usuario existe
    SELECT password INTO stored_password
    FROM users
    WHERE email = in_email;
    
    -- Si el usuario no existe, retornar mensaje de error
    IF stored_password IS NULL THEN
        SET result = -1;
        SET message = 'Usuario no existe';
    
    -- Si el usuario existe, retornar la contraseña
    ELSE
        SET result = 1;
        SET message = stored_password;
    END IF;
    
    -- Retornar los resultados
    SELECT result, message;
END //

DELIMITER ;

/*****************************************/

DELIMITER //

DROP PROCEDURE IF EXISTS fnProductList;

CREATE PROCEDURE fnProductList()
BEGIN
    SELECT id, name, description, price, stock
    FROM products WHERE status = 1;
END //

DELIMITER ;

/*****************************************/

DELIMITER //

-- Elimina el procedimiento si ya existe
DROP PROCEDURE IF EXISTS fnProductCrud;

-- Crea el procedimiento
CREATE PROCEDURE fnProductCrud(
    in_id INT, 
    in_name VARCHAR(100), 
    in_description TEXT, 
    in_price DECIMAL(10, 2), 
    in_stock INT, 
    in_action CHAR(1)
)
BEGIN
    DECLARE result INT;
    DECLARE message VARCHAR(100);

    START TRANSACTION;

    IF in_action = 'I' THEN
        -- Insert new product
        INSERT INTO products (name, description, price, stock)
        VALUES (in_name, in_description, in_price, in_stock);

        -- Get the ID of the newly inserted product
        SET result = LAST_INSERT_ID();
        SET message = 'Product successfully inserted.';
    ELSEIF in_action = 'U' THEN
        -- Update existing product
        UPDATE products
        SET name = in_name,
            description = in_description,
            price = in_price,
            stock = in_stock
        WHERE id = in_id;

        -- Check if the update affected any row
        IF ROW_COUNT() > 0 THEN
            SET result = 0;
            SET message = 'Product successfully updated.';
        ELSE
            SET result = -1;
            SET message = 'No product found to update.';
        END IF;
    ELSEIF in_action = 'D' THEN
        -- Delete product (mark as inactive)
        UPDATE products
        SET status = 0
        WHERE id = in_id;

        -- Check if the deletion affected any row
        IF ROW_COUNT() > 0 THEN
            SET result = 0;
            SET message = 'Product successfully deleted.';
        ELSE
            SET result = -1;
            SET message = 'No product found to delete.';
        END IF;
    ELSE
        -- Invalid action
        SET result = -1;
        SET message = 'Invalid action';
    END IF;

    COMMIT;

    -- Return result and message
    SELECT result AS result, message AS message;
END //

DELIMITER ;


/*******************************INSERTS*****************************************/

INSERT INTO products (name, description, price, stock, status) 
VALUES 
('Cotton Shirt', 'Long sleeve cotton shirt, soft and breathable', 29.99, 50, 1),
('Jeans', 'Classic blue denim jeans', 49.99, 100, 1),
('Running Shoes', 'Running shoes with anti-slip rubber sole', 79.99, 75, 1),
('Hoodie', 'Cotton hoodie with kangaroo pocket', 39.99, 30, 1);