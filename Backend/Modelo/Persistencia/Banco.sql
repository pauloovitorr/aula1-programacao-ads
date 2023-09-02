CREATE TABLE banda (
    nome_banda VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    num_integrantes INTEGER NOT NULL,
    cpf VARCHAR(14) NOT NULL PRIMARY KEY,
    cargo VARCHAR(100) NOT NULL,
    cor VARCHAR(100) NOT NULL
);
