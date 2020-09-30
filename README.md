# CRUD-jQuery-PHP

## Desafio

**Frontend**
1. O usuário poderá entrar na página e verificar uma lista de funcionários cadastrados,
com os campos Nome, CPF, Gênero e Data de Nascimento.
2. Em seguida, ele poderá excluir um cadastro existente e/ou inserir um novo cadastro.

**Backend**
1. Deverá haver um backend que receberá esses comandos e os processará.

## Requisitos
1. Toda a comunicação entre o frontend e o backend deve ser realizada de forma assíncrona através do Javascript. No frontend poderão ser utilizados quaisquer facilitadores, tais como
Bootstrap, JQuery, Ajax, etc;
2. O backend deverá ser desenvolvido através da linguagem PHP Vanilla (sem uso de frameworks) exclusivamente;
3. O armazenamento de dados deverá ser feito através de um banco MySQL;
4. A estrutura do sistema fica a critério do desenvolvedor, bem como formato da página,
elementos, cores e layout.

## Implementação
1. ***Extrair*** a pasta e ***renomear*** de: ***CRUD-AJAX-PHP-master*** para: ***CRUD-AJAX-PHP***.
2. Ir até o diretório ***api -> config*** 	e ***executar*** o arquivo ***people.sql***.
3. No ***mesmo diretório*** no arquivo ***database.php*** é necessário ***alterar*** as ***credenciais*** de ***username*** e ***password***.

## Conclusão
Seguindo os requisitos utilizei PHP Vanilla no back end criando uma REST API, no front end foi utilizado jQuery e Bootstrap e MYSQL para o banco de dados.

## Telas
Segue as telas do sistema:

1. A tela inicial onde se encotra todos os funcionários e as funções para Criar, Editar, Deletar e Visualizar:

![Read](https://github.com/AllanFelipeReis/CRUD-AJAX-PHP/blob/master/prints/Read.png)

2. A tela de criação do funcionário onde é possível atribuir o nome, CPF, data de nascimento e gênero:

![Create](https://github.com/AllanFelipeReis/CRUD-AJAX-PHP/blob/master/prints/Create.png)

3. A tela de edição que já vem com os campos atribuídos para serem feitas as alterações:

![Update](https://github.com/AllanFelipeReis/CRUD-AJAX-PHP/blob/master/prints/Update.png)

4. A mensagem de confirmação para deletar um funcionário:

![Delete](https://github.com/AllanFelipeReis/CRUD-AJAX-PHP/blob/master/prints/Delete.png)

5. E por ultimo a página de visualização de um único funcionário:

![ReadOne](https://github.com/AllanFelipeReis/CRUD-AJAX-PHP/blob/master/prints/ReadOne.png)
