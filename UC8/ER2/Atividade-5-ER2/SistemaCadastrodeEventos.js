//Agendar a data do Evento

let dataAtual = 22/10/2022;
let dataEvento = 22/09/2022;

switch (dataAtual) {
    case 22/10/2022:
        console.log("A dataAtaual esta correta")
        break;

    default:
        console.log("A dataEvento é posterior a dataAtual, logo é permitido continuar com o cadastro")
        break;

}

//Idade para cadastro

let idade = 20;

if (idade > 18) {
    console.log("cadastro permitido!")
}
else if (idade <= 18){
     console.log("cadastro não permitido pela idade!!!")
}

//Lista de Participantes para o evento

let participantesEvento = [ ];

participantesEvento.push("Marcela");
participantesEvento.push("Emanuelly");
participantesEvento.push("MAria Clara");
participantesEvento.push("Antônio");
participantesEvento.push("Carlos Emanuel");
participantesEvento.push("Maria");
participantesEvento.push("João");
participantesEvento.push("Alice");
participantesEvento.push("Carol");

console.log("Número de participantes são: " + participantesEvento.length);
console.log(participantesEvento);

//Limite de Palestrantes para o evento

let PalestrantesEvento = [ ];
PalestrantesEvento.push("Ozias")
PalestrantesEvento.push("Sandra")

console.log("Número de palestrantes são: " + PalestrantesEvento.length);
console.log(PalestrantesEvento);

//Limite de participantes para o evento

let participantes = 90;

if (participantes < 100){
    console.log("Cadastro Liberado")
}
else if (participantes >= 100){
    console.log ("Limite de participantes excedido!")
}
