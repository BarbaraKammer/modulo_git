# Microserviços Java com Spring Boot

Este repositório contém dois projetos de microserviços desenvolvidos em Java utilizando Spring Boot: um para gerenciamento de clientes e outro para gerenciamento de produtos. Cada microserviço possui operações básicas de CRUD (Create, Read, Update, Delete).

## Estrutura do Repositório

- **cliente/**: Projeto de microserviço para gerenciamento de clientes.
- **produto/**: Projeto de microserviço para gerenciamento de produtos.

## Tecnologias Utilizadas

- Java 11
- Spring Boot
- Spring Data JPA
- H2 Database
- Lombok
- Spring Boot DevTools



### Cliente Microserviço

#### Dependências

- Spring Web
- Spring Data JPA
- H2 Database
- Lombok
- Spring Boot DevTools

#### Endpoints

- `GET /clientes`: Lista todos os clientes.
- `POST /clientes`: Cadastra um novo cliente.
- `DELETE /clientes/{id}`: Exclui um cliente pelo ID.

### Produto Microserviço

#### Dependências

- Spring Web
- Spring Data JPA
- H2 Database
- Lombok
- Spring Boot DevTools

#### Endpoints

- `GET /produtos`: Lista todos os produtos.
- `POST /produtos`: Cadastra um novo produto.
- `DELETE /produtos/{id}`: Exclui um produto pelo ID.

### PROJETO REALIZADO PARA O CURSO EBAC: FULL STACK-JAVA