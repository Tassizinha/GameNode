    const prompt = require("prompt-sync")();
    const Heroi = require("./personagens/heroi");
    //const Vilao = require("./personagens/vilao");
    //const Personagem = required("./personagem");

    const fase1 = require("./fases/fase1")

    //Apresentação Do Jogo
    console.log("Take the adventure for yourself");
    console.log();
    console.log("Bem-Vindo a essa experiência incrível");
    console.log("Precisamos construir seu personagem no qual irá se aventurar por nossos mundos.")
    console.log();
    console.log("Apresentação personagem")
    console.log("Há muitos anos em um lugar distante vivia um héroi da floresta");
    console.log("Em busca de aventuras em ajudar e salvar pessoas dos perigos");  
    console.log("");

    //Criação do personagem (heroi)
    const nome = prompt("Diga o melhor nome que venha na sua cabeça: ");
    console.log(nome);

    const heroi = new Heroi(80,nome,80,50);

    console.log(`Seu personagem foi criado, agora sempre te chameremos de ${heroi.nome}`);
    console.log();
    heroi.status();
    console.log();

    //Ensina a se alimentar
    console.log(`Parece que seu heroi ${heroi.nome}, esta a muito tempo andando e parece com fome`);


    const escolhaFruta = prompt("Deseja comer uma fruta? S/N: ").toUpperCase();
    if (escolhaFruta == "S") {
        console.log(`hmmm que fruta boa disse ${heroi.nome}, eu quero mais!`);
        heroi.alimentar(5, 2);
        heroi.status();
    } else {
        const escolhaCarne = prompt("Então deseja comer carne de caça? S/N: ").toUpperCase();
        if (escolhaCarne == "S") {
            console.log(`hmmm que carninha boa disse ${heroi.nome}, eu quero mais!`);
            heroi.alimentar(15, 5);
            heroi.status();
        } else {
            console.log("Seu personagem não restaurou Fome ou Vida");
        }
    }


    //Ensina a melhorar o condicionamento fisíco(força)

    console.log(`Ao longe ${heroi.nome} avistou um grande lago e foi se aproximando...`);
console.log("Dentro do lago existe algo brilhando");
if (prompt("Deseja nadar até o objeto brilhante? S/N: ").toUpperCase() == "S") {
    heroi.treinar(10);
    console.log();
    console.log("Era mais interessante de longe, ao pegar o objeto, percebeu que se tratava de um anel de latinha de refrigerante");
    console.log("Logo após, o héroi retornou à margem do lago, se secou e seguiu seu caminho");
} else {
    console.log(`Ufa disse ${heroi.nome}, a água estava bem fria!!`);
}
console.log();
console.log("Algum tempo se passou e no decorrer do caminho havia uma árvore interrompendo a passagem");
console.log("No topo dessa árvore existia uma sacola amarrada.");
if (prompt("Deseja subir na árvore e pegar a sacola? S/N: ").toUpperCase() == "S") {
    console.log("Puxa mais que sorte dentro da sacola haviam 5 moedas escondidas");
    heroi.depositar(10);
    heroi.treinar(15);
    heroi.status();
} else {
    console.log("Nossa que preguiça! Não vou subir nessa árvore, deixa para outro curioso.");
    console.log("SEM ATIVIDADES O PERSONAGEM PERDE PONTOS DE FORÇA");
    // heroi.treinar(-5);
    // heroi.status();
}

// FIM DA INTRODUÇÃO
console.log();
fase1(heroi);

//FIM DA FASE INTRODUTORIA

if(fase1){
    //fase2
}else{
    console.log("GAME OVER!!!");
}

 

