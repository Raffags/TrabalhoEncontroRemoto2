//considere os alunos presentes na sala percorra do zero até o numero total de alunos
// se o número for par escreva '' par'' e o numero correspondente.
// se for ímpar escreva '' ímpar '' e o numero correspondente.
// se for zero , escreva '' zero'' e o numero correspondente
let rs = require("readline-sync")

let alunospresentes=rs.question("Quantos alunos estão presentes ? "); 

for (let alunos = 0; alunos <= alunospresentes;alunos++){
 
    if(alunos ==0){
    console.log( "zero "+ alunos);
    }
    if (alunos % 2 ==0){
        console.log("par "+ alunos);
        }
        else{console.log("ímpar "+ alunos);


        }
   






}