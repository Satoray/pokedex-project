# Pokedex Project

Aplicação full stack inspirada no universo de Pokemon que permite visualizar informações de diferentes criaturas diretamente de um banco de dados.

O projeto foi desenvolvido com foco em integração entre **Frontend, Backend e Banco de Dados**, utilizando tecnologias comuns no desenvolvimento web.

---

## Arquitetura do Projeto

Frontend
HTML + CSS + JavaScript

Backend
Node.js + Express

Banco de Dados
Oracle Autonomous Database (OCI)

Fluxo da aplicação:

Usuário → Frontend → API Backend → Banco Oracle → Backend → Frontend

---

## Funcionalidades

* Listagem de Pokemon armazenados no banco
* Exibição de imagem oficial de cada Pokemon
* Exibição de atributos como:

  * HP
  * Attack
  * Defense
  * Speed
* Tipos do Pokemon (Type1 e Type2)
* Barra de pesquisa por nome
* Interface em formato de cards

---

## Estrutura do Projeto

```
pokedex-project
│
├── frontend
│   └── index.html
│
├── backend
│   ├── server.js
│   ├── db.js
│   ├── package.json
│
├── .gitignore
└── README.md
```

---

## Tecnologias Utilizadas

Frontend

* HTML
* CSS
* JavaScript

Backend

* Node.js
* Express

Banco de Dados

* Oracle Autonomous Database (OCI)

Outros

* Git
* GitHub

---

## Como Executar o Projeto

### 1 - Clonar o repositório

```
git clone URL_DO_REPOSITORIO
```

---

### 2 - Entrar na pasta do backend

```
cd backend
```

---

### 3 - Instalar dependências

```
npm install
```

---

### 4 - Configurar conexão com o banco

No arquivo `db.js`, configure:

* usuário
* senha
* connectString do Oracle

Também é necessário colocar o **wallet do banco Oracle** na pasta `backend`.

---

### 5 - Iniciar o servidor

```
node server.js
```

O servidor iniciará em:

```
http://localhost:3000
```

---

### 6 - Abrir o frontend

Abra o arquivo:

```
frontend/index.html
```

ou utilize uma extensão como **Live Server** no VSCode.

---

## Endpoint da API

Lista todos os Pokemon:

```
GET /pokemons
```

Exemplo de retorno:

```
[
  {
    "id": 1,
    "nome": "Bulbasaur",
    "tipo1": "Grass",
    "tipo2": "Poison",
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45
  }
]
```

---

## Possíveis Melhorias Futuras

* Filtro por tipo de Pokemon
* Página de detalhes do Pokemon
* Sistema de favoritos
* Paginação de resultados
* Deploy completo em cloud

---

## Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

* Desenvolvimento Full Stack
* Integração entre API e banco de dados
* Consumo de dados no frontend
* Estruturação de projetos com GitHub

---

## Autor: Rayssa Sato

Projeto desenvolvido como estudo de desenvolvimento web e integração com banco de dados.
