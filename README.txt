Utilizei nodemon com script devm para atualizar o servidor e nao ter que sempre chamar o node <arquivo>
Utilizei randomUUID de crypto que gera um ID global com números aleatórios


Em request.http você encontrará algumas funções. aqui vou explicar como funcionam:

A primeria vai cadastrar o produto que está descrito em name e price.
A segunda irá listar os produtos cadastrados, mostrando então em um array.
A terceira mostra um determinado produto a partir do seu id.
A quarta altera um produto.




Não utilizaei banco de dados.

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
