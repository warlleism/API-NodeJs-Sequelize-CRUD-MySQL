# Itens necessários para rodar a aplicação

- Ter o mysql em sua máquina

- uma connection com usuário e senha 'root'

- no terminal, dentro do diretório do projeto rodar os comandos:

> npm install --save-dev sequelize-cli

> npx sequelize db:create

> npx sequelize migration:create --name=create-user

> npx sequelize db:migrate

Aplicação pronta para rodar!