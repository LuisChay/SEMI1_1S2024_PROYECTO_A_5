DELIMITER //
CREATE PROCEDURE insertRating(
	IN p_rating_value INTEGER,
    IN p_rating_comment TEXT,
    IN p_fk_book_id INTEGER,
    IN p_fk_user_email VARCHAR(150)
)
BEGIN
	DECLARE ratingExists INT DEFAULT 0;
    
    SELECT rating_id INTO ratingExists FROM rating WHERE fk_book_id = p_fk_book_id AND fk_user_email = p_fk_user_email;
    
    IF ratingExists > 0 THEN
        UPDATE rating SET rating_value = p_rating_value, rating_comment = p_rating_comment WHERE fk_book_id = p_fk_book_id AND fk_user_email = p_fk_user_email;
    ELSE
        INSERT INTO rating (rating_value, rating_comment, fk_book_id, fk_user_email) VALUES (p_rating_value, p_rating_comment, p_fk_book_id, p_fk_user_email);
    END IF;
END;