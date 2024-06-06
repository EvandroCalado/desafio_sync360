# Desafio Sync 360

Este é um projeto desenvolvido para o Desafio Sync 360, que consiste em criar uma aplicação web com funcionalidades de atualização de informações pessoais do usuário.

## Funcionalidades

- Exibição das informações do usuário, incluindo imagem de perfil, nome, idade, endereço e biografia.
- Formulário para atualização das informações nome, idade, endereço e biografia..
- Responsividade para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Banco de Dados:** PostgreSQL
- **Docker:** Para containerizar o banco de dados.
- **Ferramentas**: ESLint, Prettier, Storybook.

## Requisitos

Certifique-se de ter o Docker instalado em sua máquina para executar o banco de dados sem problemas.

## Configuração do Ambiente

1. Clone este repositório:

```
git clone https://github.com/seu-usuario/desafio-sync-360.git
```

2. Navegue até a pasta do projeto:

```
cd desafio_sync_360
cd backend
```

3. Execute o Docker Compose para iniciar o banco:

```
cd backend
docker-compose up
npx prisma migrate dev
```

Isso iniciará o container do PostgreSQL, do backend na porta 5432 - certifique-se que não tenha nada rodando nesta porta.

4. Popular os dados iniciais:

```
com ajuda de um cliente http como postman, insomnia ou outro
mandar uma requisição do tipo POST para: http://localhost:3333/user
com os dados: name, age, street, district, state, bio, image. O campo age deve ser numérico e image deve ser uma URL de uma imagem.
```

5. Execute o backend e frontend em modo de desenvolvimento:

```
cd backend && npm run dev 
cd frontend && npm run dev
```

Isso fará o backend rodar na porta 3333 e o frontend rodar na porta 3000

7. Acesse o frontend em seu navegador:

```
http://localhost:3000
```

## Estrutura do Projeto

```
desafio-sync-360/
├── backend/
│   ├── package.json
│   ├── docker-compose.yml
│   ├── prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── prisma/
│   │   ├── services/
│   │   ├── routes.ts
|   |   ├── server.ts
│   │   └── ...
│   └── ...
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── App.ts
│   │   ├── index.css
│   │   ├── main.js
│   │   └── ...
│   └── ...
```

## Banco de Dados

O banco de dados PostgreSQL está configurado para rodar na porta 5432.
