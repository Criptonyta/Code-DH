

-- Creando las tablas


CREATE TABLE usuarios (
    user_id INT PRIMARY KEY auto_increment not null unique,
    nombre_apellido VARCHAR(100) not null,
    email not null VARCHAR(50) unique,
);

CREATE TABLE notas (
    note_id INT PRIMARY KEY auto_increment not null unique,
    foreign key (id_user) references (note_id) INT not null unique auto_increment,
    note_title VARCHAR (100),
    note_content TEXT,
    blocked_note tinyint not null,
    creation_date TIMESTAMP not null,
    mod_date TIMESTAMP not null,
    del_date TIMESTAMP not null,
);

CREATE TABLE categorias (
    categories_id INT PRIMARY KEY auto_increment not null unique,
    foreign key (id_note) references (note_id) INT not null unique auto_increment,
    foreign key (id_user) references (user_id) INT not null unique auto_increment,
    description VARCHAR(50),
);


-- Creando los datos en usuarios

INSERT INTO usuarios (user_id, nombre_apellido, email)
VALUES (DEFAULT, 'Santiago Fulanito', santifulanito@gmail.com)
VALUES (DEFAULT, 'Jeronimo Helguera', JeroHelguera@gmail.com)
VALUES (DEFAULT, 'Cosme Strain', cosme@gmail.com)
VALUES (DEFAULT, 'Juan Picardo', Juancho@gmail.com)
VALUES (DEFAULT, 'Esteban Quito', estebanquito@gmail.com)
VALUES (DEFAULT, 'Teresa Calandria', teresita@gmail.com)
VALUES (DEFAULT, 'Peter Franktop', francktop@gmail.com)
VALUES (DEFAULT, 'Carlos Milagro', carlosmilagro@gmail.com)
VALUES (DEFAULT, 'Guillermo Cuevas', lacueva@gmail.com)
VALUES (DEFAULT, 'Juan Jose Lopez', jjlopez@gmail.com)


-- Creando los datos en notas

INSERT INTO notes (note_id, id_user, note_title, note_content, blocked_note, creation_date, mod_date, del_date)
VALUES (DEFAULT, 1, 'Lista de compras', '1) Comprar verdura 2) Queso 3) Leche 4) Yogurt', 0, 1577851261, 1609473661, )
VALUES (DEFAULT, 1, 'Cosas para hacer', '1) Lavar el auto 2) Contabilidad del mes 3) Pasear al perro 4) Hacer compras', 1, 1577861261, 1609473561, )
VALUES (DEFAULT, 2, 'Lista de estudio', '1) Matematica 2) Fisica 3) Programacion 4) Ingles', 1, 1677841461, 1604476671, )
VALUES (DEFAULT, 3, 'Materias 2* semestre', '1) Biologia 2) Sociologia 3) Arte', 0, 1577451661, 1639473761, )
VALUES (DEFAULT, 5, 'Pendientes del trabajo', '1) Cerrar cuentas banco 2) Reunion con el equipo 3) Coordinar con los gerentes el plan de vacunacion 4) Programa de yoga en el trabajo', 1, 1599851261, 1609472211, )
VALUES (DEFAULT, 6, 'Peliculas favoritas', '1) Mi malvado preferido 2) Buenos muchachos 3) El Padrino', 1, 1577854465, 1609474876, )
VALUES (DEFAULT, 7, 'Libros para comprar', '1) Heroes y tumbas 2) El hombre y la maquina 3) Armaggeddon', 0, 1577854432, 1609478888, )
VALUES (DEFAULT, 8, 'Musicos favoritos', '1) Talking Heads 2) AC/DC 3) Divididos 4) Seru Giran', 0, 1577851371, 1609473999, )
VALUES (DEFAULT, 9, 'Lista de compras', '1) Pan 2) Manteca 3) Polenta 4) Yogurt', 0, 1577851261, 1609473661, )
VALUES (DEFAULT, 10, 'Cumpleanos', '1) 26/06 = Juanito 2) 11/05 = Menganito 3) 01/04 = Felipe', 0, 1577851333, 1609473312, )


-- Creando los datos en categorias

INSERT INTO categorias (categories_id, id_note, user_id, description )
VALUES (DEFAULT, 1, 1,'Cosas para hacer')
VALUES (DEFAULT, 2, 1,'Cosas para hacer')
VALUES (DEFAULT, 3, 2,'Estudiar')
VALUES (DEFAULT, 4, 3,'Estudiar')
VALUES (DEFAULT, 5, 5,'Cosas para hacer')
VALUES (DEFAULT, 6, 6,'Tiempo libre')
VALUES (DEFAULT, 7, 7,'Compras')
VALUES (DEFAULT, 8, 8,'Compras')
VALUES (DEFAULT, 9, 9,'Cosas para hacer')
VALUES (DEFAULT, 10, 10,'Cumpleanos')