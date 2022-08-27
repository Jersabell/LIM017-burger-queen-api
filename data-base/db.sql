USE bq:
-- Tabla para usuarios
CREATE TABLE user(
    id INT(11) NOT NULL,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(90) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    roles VARCHAR(30) NOT NULL,
    rolesAdmin BIT(30) NOT NULL  
);
    
DESCRIBE users:
ALTER TABLE user 
    ADD PRIMARY KEY (id);

ALTER TABLE user 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

-----------------------------
-----------------------------
