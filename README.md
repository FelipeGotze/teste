# teste-verzel

Após clonar o repósitório e executar os comandos de instalação, executar o comando "migrate" no laravel, o banco de dados utilizado foi o MySQL.

O Front-end e o Dashboard foram desenvolvidos com React com Typescript e Vite utilizando npm.
Executar o comando npm install.

# Back-end

Foi criado os controllers para as classes de usuários, token e carros;
As rotas acessam os controllers e executam as funções designadas;

# Dashboard

Login utilizando email e senha, inicialmente seguir para o link "Cadastro de Usuário" em seguida efetuar o login normalmente;
É gerado um token que fica armazenado em um cookie, a cada acesso é verificado se o mesmo existe, caso não exista é redirecionado à página de login.

A Dashboard tem as principais ações, na página inicial  mostra os cards dos veículos cadastrados;
No link Cadastro, temhos o formulário para o cadastro do veíiculo novo e uma lista de todos os veículos cadastrados;
Nesta lista temos os botões para alterar e excluír veículos;

# Front End

Exibe o catálogo, ordenado pelo valor do veículo, há um campo de busca para filtrar por nome ou modelo
