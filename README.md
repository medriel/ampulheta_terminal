# Ampulheta no terminal

   - Objetivo: Apresentar no terminal uma ampulheta que possui o tamanho de acordo com o valor informado pelo usuário. Sendo que este valor deve ser maior ou igual a 20.
 - Extra: Apresentar no terminal o preenchimento da ampulheta na sua parte inferior.

## Principais desafios e estratégias adotadas: 
  - Sair do cotidiano, onde utilizo a biblioteca React para trabalhar com Javascript, e ter que voltar a utilizar a linguagem de forma pura.
  - Realizei a divisão do desafio em:
  
    - [x] Capturar o valor informado do usuário
    - [x] Validar o valor informado (input >=20)
    - [x] Desenvolver as extremidades da ampulheta
    - [x] Desenvolver a parte superior da ampulheta
    - [x] Desenvolver a parte inferior da ampulheta
    - [x] Inverter o preenchimento da ampulheta
   
   - Utilizei o método "repeat" para desenvolver as extremidades e a divisória da ampulheta, onde eu definia o caractere que queria usar. E então apliquei nele o método "repeat" de acordo com o valor informado pelo usuário.
   - Utilizei o valor informado pelo usuário no desenvolvimento do laço de repetição "for", para assim conseguir definir quantos espaços vazios e quantos caracteres deveriam existir por linha, até completar cada metade da ampulheta. Com a utilização do método "repeat", realizei a repetição dos caracteres e dos espaços de acordo com o valor informado pelo usuário. E ao concluir cada etapa, atualizei um "array" para armazenar a metade da ampulheta. 
   - O diferencial na metade inferior da ampulheta é que não existe a necessidade de contar os caracteres, já que eram fixos nela vazia. Em contrapartida, precisei contar quantas vezes deveria remover o caractere e adicionar espaço. A parte de armazenamento foi idêntica à da primeira metade da ampulheta.
   - No desenvolvimento da ampulheta preenchida, utilizei o método "reverse" para mudar o status atual da parte superior e inferior, inverti suas posições na ordem de impressão, e assim consegui a ampulheta preenchida.

## Duração do desenvolvimento:
   - 2h09.
<img src="https://user-images.githubusercontent.com/74268252/172362411-5bda8808-22c5-4c8c-a22c-0770927bf09a.png"/> 
