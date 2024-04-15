DELIMITER //
CREATE PROCEDURE insertUser(
    IN userEmail VARCHAR(150),
    IN userName TEXT,
    IN userPassword TEXT,
    OUT errorCode INT
)
BEGIN
    DECLARE emailExists INT DEFAULT 0;
    
    -- Verificar si el correo electrónico ya existe
    SELECT COUNT(*) INTO emailExists FROM user WHERE user_email = userEmail;
    
    IF emailExists > 0 THEN
        SET errorCode = -1;
    ELSE
        -- Insertar el nuevo usuario
        INSERT INTO user (user_email, user_name, user_password) VALUES (userEmail, userName, userPassword);
        SET errorCode = 0;
    END IF;
END //
DELIMITER ;
