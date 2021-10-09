
-- Creando la BD

CREATE DATABASE notas;
USE notas;


-- Creando las tablas

-- CHECKED
CREATE TABLE IF NOT EXISTS usuarios (
    `user_id`             INT PRIMARY KEY auto_increment not null unique,
    `nombre_apellido`     VARCHAR(100) not null,
    `email`               VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS notas (
    `note_id`             INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
    `note_title`          VARCHAR (100),
    `note_content`        TEXT,
    `blocked_note`        TINYINT NOT NULL,
    `creation_date`       TIMESTAMP NOT NULL,
    `mod_date`            TIMESTAMP NOT NULL,
    `del_date`            TIMESTAMP NOT null,
    `id_user`             INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES usuarios(user_id)
);

CREATE TABLE IF NOT EXISTS categorias (
    `categories_id`       INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
    `descripcion`         VARCHAR(50),
    `id_note`             INT NOT NULL,
    `id_user`             INT NOT NULL,
    FOREIGN KEY (id_note) REFERENCES notas(note_id),
    FOREIGN KEY (id_user) REFERENCES usuarios(user_id)
);


-- Creando los datos en usuarios - CHECKED

INSERT INTO usuarios (user_id, nombre_apellido, email)
VALUES (DEFAULT, 'Santiago Fulanito', 'santifulanito@gmail.com'),
(DEFAULT, 'Jeronimo Helguera', 'JeroHelguera@gmail.com'),
(DEFAULT, 'Cosme Strain', 'cosme@gmail.com'),
(DEFAULT, 'Juan Picardo', 'Juancho@gmail.com'),
(DEFAULT, 'Esteban Quito', 'estebanquito@gmail.com'),
(DEFAULT, 'Teresa Calandria', 'teresita@gmail.com'),
(DEFAULT, 'Peter Franktop', 'francktop@gmail.com'),
(DEFAULT, 'Carlos Milagro', 'carlosmilagro@gmail.com'),
(DEFAULT, 'Guillermo Cuevas', 'lacueva@gmail.com'),
(DEFAULT, 'Juan Jose Lopez', 'jjlopez@gmail.com');


-- Creando los datos en notas - CHECKED

INSERT INTO notas (note_id, id_user, note_title, note_content, blocked_note, creation_date, mod_date, del_date)
VALUES (DEFAULT, 1, 'Lista de compras', '1) Comprar verdura 2) Queso 3) Leche 4) Yogurt', 0, 1577851261, 1609473661, 0),
(DEFAULT, 1, 'Cosas para hacer', '1) Lavar el auto 2) Contabilidad del mes 3) Pasear al perro 4) Hacer compras', 1, 1577861261, 1609473561, 0),
(DEFAULT, 2, 'Lista de estudio', '1) Matematica 2) Fisica 3) Programacion 4) Ingles', 1, 1677841461, 1604476671, 0),
(DEFAULT, 3, 'Materias 2* semestre', '1) Biologia 2) Sociologia 3) Arte', 0, 1577451661, 1639473761, 0),
(DEFAULT, 5, 'Pendientes del trabajo', '1) Cerrar cuentas banco 2) Reunion con el equipo 3) Coordinar con los gerentes el plan de vacunacion 4) Programa de yoga en el trabajo', 1, 1599851261, 1609472211, 0),
(DEFAULT, 6, 'Peliculas favoritas', '1) Mi malvado preferido 2) Buenos muchachos 3) El Padrino', 1, 1577854465, 1609474876, 0),
(DEFAULT, 7, 'Libros para comprar', '1) Heroes y tumbas 2) El hombre y la maquina 3) Armaggeddon', 0, 1577854432, 1609478888, 0),
(DEFAULT, 8, 'Musicos favoritos', '1) Talking Heads 2) AC/DC 3) Divididos 4) Seru Giran', 0, 1577851371, 1609473999, 0),
(DEFAULT, 9, 'Lista de compras', '1) Pan 2) Manteca 3) Polenta 4) Yogurt', 0, 1577851261, 1609473661, 0),
(DEFAULT, 10, 'Cumpleanos', '1) 26/06 = Juanito 2) 11/05 = Menganito 3) 01/04 = Felipe', 0, 1577851333, 1609473312, 0);


-- Creando los datos en categorias - CHECKED

INSERT INTO categorias (categories_id, id_note, user_id, descripcion )
VALUES (DEFAULT, 1, 1,'Cosas para hacer'),
(DEFAULT, 2, 1,'Cosas para hacer'),
(DEFAULT, 3, 2,'Estudiar'),
(DEFAULT, 4, 3,'Estudiar'),
(DEFAULT, 5, 5,'Cosas para hacer'),
(DEFAULT, 6, 6,'Tiempo libre'),
(DEFAULT, 7, 7,'Compras'),
(DEFAULT, 8, 8,'Compras'),
(DEFAULT, 9, 9,'Cosas para hacer'),
(DEFAULT, 10, 10,'Cumpleanos');