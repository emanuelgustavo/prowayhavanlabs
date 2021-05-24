### DESAFIO PROWAY HAVAN LABS - PARTE 2

Para executar o programa, baixe ou clone o repositório para sua máquina, e dentro da pasta `server` execute o comando no terminal:
  ```
  $ npm install
  ```
para instalar todas as depêndencias do projeto, que estão descritas no arquivo `package.json` dentro da raiz do projeto.

Após instaladas todas as dependências, execute os seguintes comandos no terminal:
```
$npx knex-migrate
```
Esse comando rodará scripts que vão criar o banco de dados, as tabelas e todos os campos configurados. As configurações estão dentro da pasta `src/database/migrations`. O código do banco de dados é todo em javascript graças a biblioteca `knex`. O banco de dados desse projeto é o `sqlite3` que é um banco de dados relacional.

Após, execute o comando:

```
$npx knex-seed
```
que criará informações iniciais na tabela currency, que é onde estão armazenados as informações das moedas.

## Banco de Dados

O Banco de dados sqlite3 está dividido em duas tabelas:

 - Tabela `operations`, que é onde as operações com as informaçaõ solicitadas nos requisitos são armazendas.
 - Tabela `currency`, onde são armazenadas as informações sobre as moedas, como valor, nome e abreviatura.

## Cadastro de Operações

Para cadastrar uma nova operação é preciso acessar a url `http://localhost:3333/newoperation` passando os parâmetros da operação no corpo(body) da requisição no formato JSON.

## Relatórios

É possível consultar relatórios através das seguintes urls:

- `http://localhost:3333/listalloperations` : lista todas as operações do banco de dados, não é necessário nenhum parâmetro
- `http://localhost:3333/operationsreportbydate`: lista as operações de uma data especifica que deve ser passada por parâmetro do tipo query na requisição.
- `http://localhost:3333/operationsreportbyname`: lista as operações de um nome de cliente especifico que deve ser passada por parâmetro do tipo query na requisição. Apenas um cliente é possível consultar por vez.
- `http://localhost:3333/operationsreportbyperiod`: lista as operações de um período de tempo especifico que deve ser passada por parâmetro do tipo query na requisição com a data inicial e final do período.
- `http://localhost:3333/sumalloperations`: Retorna o valor de todas as operações realizadas.
- `http://localhost:3333/sumalltaxoperations`: Retorna o valor de todas as taxas cobradas nas operações realizadas. 
- `http://localhost:3333/operationsreportbynameandperiod`: lista as operações de um período de tempo especifico e nome especifico, informações que devem ser passada por parâmetro do tipo query na requisição com o nome e a data inicial e final do período.