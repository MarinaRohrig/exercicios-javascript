# exercicios-javascript
Compilado de exercícios feitos em JavaScript para estudo.


# SEMANA 1 

## Exercício 1
O que é IMC 
https://www.saude.rj.gov.br/obesidade/noticias/2019/03/imc-voce-sabe-o-que-o-indice-de-massa-corporal-diz-sobre-sua-saude

1 - Baixe o arquivo imc.html e faça retornar no alerta da página, o IMC do usuário

2 - Utilize o console.table() e todas as pesquisas realizadas retorne no console em formato de tabela

## Exercício 2
1 - Utilizando a calculadora do IMC do exercício anterior, faça com que retorne no alerta em qual faixa o usuário se encontra

 <p>Menor que 16 - Magreza grave</p>
 <p>16 a menor que 17 - Magreza moderada</p>
 <p>17 a menor que 18,5 - Magreza leve</p>
 <p>18,5 a menor que 25 - Saudável</p>
 <p>25 a menor que 30 - Sobrepeso</p>
 <p>30 a menor que 35 - Obesidade Grau I</p>
 <p>35 a menor que 40 - Obesidade Grau II (considerada severa)</p>
 <p>Maior que 40 - Obesidade Grau III (considerada mórbida)</p>
 
2 - Crie uma lógica que receba o número de lados de um polígono regular e a medida do lado (em cm). Deve-se calcular e consolar o seguinte:

  <p>Se o número de lados for igual a 3 escrever "triângulo" e o valor da área</p>
  <p>Se o número de lados for igual a 4 escrever "quadrado" e o valor da área.</p>
  <p>Se o número de lados for igual a 5 escrever "pentágono" e o valor da área.</p>
  <p>Caso o número de lados seja inferior a 3 escrever "não é polígono".</p>

3 - Crie uma lógica que recebe um número inteiro e determina se ele e par ou ímpar.

## Exercício 3 

1 - Crie um algoritmo que imprima na tela o fatorial de 10. https://brasilescola.uol.com.br/matematica/fatorial.htm

2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

3 - Considere o array:   let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

4 - Escreva um algoritmo que imprima no console o maior número primo entre 2 e 100.
https://www.todamateria.com.br/o-que-sao-numeros-primos/#:~:text=Os%20n%C3%BAmeros%20primos%20s%C3%A3o%20aqueles,por%20um%20e%20ele%20mesmo.

## Exercício 4

1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

<p>Exemplo de palíndromo: arara
verificaPalindrome('arara')
Retorno esperado: true

verificaPalindrome('desenvolvimento')
Retorno esperado: false

2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.

3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.

4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.

6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.

7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: 'roberto' e 'rto'
Valor esperado no retorno da função: true

verificaFimPalavra('roberto', 'rto');
Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false</p>

## Exercício 5

1 - O objetivo desse exercício é fazer uma calculadora funcional.

# SEMANA 2

## Exercício 1
<p>
let numeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];
1 - Crie funções utilizando arrow functions que retorne em um novo array e em ordem crescente:
- O dobro de cada valor dentro desse array
- A metade de cada valor dentro desse array
- A raiz de cada valor dentro desse array

2 - Baixe o arquivo destructuring.js, e apenas utilizando o conceito de desestruturação desestruture esse array trazendo o seguinte resultado
"Chris Ahmad Antigoni Toby Sam Antony Brad"

3 - Escreva uma função chamada juntarObjetos que aceita como parametro dois objetos e retorna um novo objeto que contém todas as chaves e valores do primeiro objeto e do segundo objeto.

4 - Escreva uma função chamada encontrarMinimo que aceita um array de números como parâmetro e retorna o menor argumento.</p>

## Exercício 2 
<p>
Utilizando os conceitos de webpack
- Realize a build do projeto
- Inicie rodando o comando "npm run start"

Comandos necessários para a instalação:
- "npm init" para a criação dos scripts a serem utilizados
- "npm install --save-dev webpack webpack-cli webpack-dev-server" para realizar a instalação da biblioteca do webpack
- "npm install save-dev html-webpack-plugin" para realizar a instalação do plugin de html

Será considerado bem sucedido caso:
1 - O site esteja rodando na porta localhost:8080
2 - Apareça no console da página a mensagem "funcionou"

Sites de documentação:
Webpack: webpack
Plugin HTML: npm: html-webpack-plugin</p>

## Exercício 3 

<p>
Neste exercício será necessário a criação de um diretório com os seguintes arquivos

index.html
index.js
modules/
- operators.js
- util.js

1 - Dentro de "operators.js" é necessário criar quatro funções matemáticas recebendo dois parâmetros cada, e trazendo o resultado

2 - Em util.js é necessário a criação de quatro funções,
- conversorReais: converte um número em um valor em reais , ou seja se ela receber 4 dever á converter para R$ 4,00

adicionandoZeros: modifica um número para que este não tenha menos de onze digitos de tamanho, ou seja se for passado 89 ele deverá retornar 00000000089, colocando o número zero na frente do mesmo até alcançar o tamanho mínimo

conversorCPF: crie um algoritmo que altere uma string para o formato de CPF

ordenadorArray: função que realiza a organização dos números dentro de um array

Todas as funções devem ser importadas utilizando o import dentro do index.js e estarem funcionais
Todas as funções devem ser exportadas utilizando o export

Lembre-se de instalar o pacote npm, lá no package.json adicionar type: "module"
</p>