<h1 align="center"> 
<br>
    <img src="./img/titulo.JPG" width="270">
<br>
<br>
Teste técnico Triple Tech
</h1>

## :information_source: Sobre

<br>

A aplicação criada tem como função principal, ler o arquivo "AdicionarAgendamento.xlsx" e fazer upload dos dados encontrados em uma base de dados, assim como atualizar um registro presente no arquivo "AtualizarAgendamento.xlsx".

<br>

<hr />

## :page_with_curl: Tutorial

<br>

- Ao clicar no botão agendar o portal fará o upload dos dados da planilha, e se não houver agendamentos em co,flito de horário, exibirá a query do banco de dados para cada registro realizado no console da aplicação.

<br>

<div align="center">
    <img src="./img/cadastro.JPG" width="570" height="230">
</div>

<br>

- Se outro agendamento for realizado no mesmo horário de inicio, o console exibirá quais agendamentos estão em conflito.

<br>

<div align="center">
    <img src="./img/validacaocadastro.JPG" width="570" height="230">
</div>

<br>

- Ao clicar no botão "Atualizar agendamentos" o sistema irá processar o excel destinado para tal ação, e alterará o registro exibindo a query utilizada.

<br>

<div align="center">
    <img src="./img/atualizar.JPG" width="570" height="230">
</div>

<br>

- Ao tentar atualizar novamente, o sistema reconhecerá que há uma agenda em conflito e exibirá novamente a mensagem notificando o usuário sobre isso.

<br>

<div align="center">
    <img src="./img/validacaoatualizar2.JPG" width="570" height="230">
</div>

<br>

- Por fim, se o usuário tentar atualizar algum registro, com o banco de dados vazio, ele será notificado que não há nenhum agendamento para ser atualizado.

<br>

<div align="center">
    <img src="./img/validacaoatualizar.JPG" width="570" height="230">
</div>

<br>

<hr />

## :rocket: Tecnologias 

Projeto desenvolvido com as seguintes tecnologias:

- :heavy_check_mark: React JS
- :heavy_check_mark: Node JS
- :heavy_check_mark: MySql