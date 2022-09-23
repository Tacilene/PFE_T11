/*
Atividade do Card 9 - Atividade 5 - Encontro Remoto 2

Considere a quantidade de alunos presentes na sala,
percorra do zero até o número total de retornar os seguintes resultados:

- Se o número for par, escreva 'par' e o número correspondente 
- Se o número for ímpar, escreva 'ímpar' e o número correspondente
- Se o número for zero, escreva 'zero'
*/

let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++)
{
    if(contador == 0){
        console.log(`${contador} - ZERO`)
    }
    else if ((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - IMPAR`)
    }
}
