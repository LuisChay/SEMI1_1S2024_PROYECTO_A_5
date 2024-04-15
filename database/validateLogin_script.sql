CREATE DEFINER=`admin`@`%` FUNCTION `validateLogin`(
    p_user_email VARCHAR(150),
    p_password TEXT
) RETURNS tinyint(1)
BEGIN
    DECLARE v_count INT;
    
    SELECT COUNT(*)
    INTO v_count
    FROM user
    WHERE user_email = p_user_email AND user_password = p_password;
    
    IF v_count > 0 THEN
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END