Projeto feito com Nodejs e utilização do Express.

Outros pacotes utilizados: 'fs' e 'crypto'.

Criei um script de comando para rodar o servidor npm run devm assim não vou precisar sempre rodar node <document>;


-----------------------------------------------------------------

Em request.http você encontrará algumas funções. aqui vou explicar como funcionam:

A primeria vai cadastrar o produto que está descrito em name e price.
A segunda irá listar os produtos cadastrados, mostrando então em um array.
A terceira mostra um determinado produto a partir do seu id.
A quarta altera um produto.

Como utilizar essa funções?
  POST tem um objeto com nome e preço (name price), coloque qualquer nome e preço depois send request e irá cadastrar  o produto e gerar um ID.
  GET vai listar em um array os produtos cadastrados, tambḿe pode mostrar apenas um produto a partir do seu ID.
  PUT edita um item a partir do seu ID.
  DELETE apaga o produto.

-----------------------------------------------------------------

Dica para quem quer identar código, selecione todo o código e use Ctrl + Shift + i, você consegue organizar todo seu código.

-----------------------------------------------------------------
//Metodos que podemos utilizar no app. get, post, delet, put
// GET para buscar informações
// POST insere informações
// PUT altera informações
// DELETE para remover informações
-----------------------------------------------------------------
//Formas de receber informações quando usamos request e responde
// Body usar com metodos put e post, quando for enviar dados para app
// Params são alterações na rota (URL)
// Query são alterações tambem na URL mas que não são obrigatórios como o Prams é
-----------------------------------------------------------------


Pesquisas: 
    https://nodejs.org/en/
    Aulas Trybe


Minhas redes sociais:
    https://www.linkedin.com/in/brennobener/
    https://twitter.com/BrennoBBener