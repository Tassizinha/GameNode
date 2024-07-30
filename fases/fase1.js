const prompt = require("prompt-sync")();
const Vilao = require("../personagens/vilao");

function lutar(heroi) {
    console.log(`Preparados ou não lá vem bomba.`);

    const vilao = new Vilao(200, 50);
    while (heroi.vida > 1 && vilao.vida > 1) {
        vilao.defender(heroi.atacar());
        heroi.defender(vilao.atacar());
        console.log(`Vida do ${heroi.nome}:  ${heroi.vida}`);
        console.log(`Vida do Vilão: ${vilao.vida}`);
    }

    if (heroi.vida > 1) {
        console.log("Heroi venceu!!");
        return true;
    } else {
        console.log("Vilão venceu!!");
        return false;
    }
}

module.exports = (heroi) => {
    let luta = false;

    console.log(`Algumas horas depois andando no meio da floresta, ${heroi.nome} percebeu que não estava sozinho.`);
    console.log(`Pouco mais a frente, existia uma figura grande em meio as árvores.`);
    console.log();

    console.log(`Uma criatura estranha pulou na frente de ${heroi.nome} e a criatura se assustou.`);

    if (prompt("Você deseja enfrentar o vilão? S/N: ").toUpperCase() == "S") {
        console.log(`Se prepare ai vem o primeiro golpe.`);
        luta = lutar(heroi);
    } else {
        console.log(`Está na hora de meter o pé. ${heroi.nome}, tenta se esconder e fugir da luta.`);
        console.log("O vilão o procurou e acabou o achando!!!");
        luta = lutar(heroi);
    }

    if (luta) {
        heroi.restaura();
        heroi.depositar(50);
        console.log("PARABÉNS VOCÊ VENCEU");
        heroi.status();
        return true;
    } else {
        //console.log("Game Over!!");
        return false;
    }
};
