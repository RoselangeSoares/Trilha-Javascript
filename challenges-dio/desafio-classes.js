class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    infoHeroi() {
        console.log(`NickName: ${this.nome}`);  //Foi substituído 'nome' por 'NickName'.
        console.log(`Nível: ${this.idade}`);   //Foi substituído 'idade' por 'Nível'.
        console.log(`Classe: ${this.tipo}`);  //Foi substituído 'tipo' por 'Classe'.    "Para imcorporar melhor a temática JOGO."
    }

    atacar() {
        let ataque = ' '

        switch (this.tipo) {
            case 'Guerreiro':
                ataque = 'espada!';
                break;
            case 'Mago':
                ataque = 'magia!';
                break;
            case 'Monge':
                ataque = 'artes marciais!';
                break;
            case 'Ninja':
                ataque = 'shuriken!';
                break;
            default:
                ataque = 'Não definiu ataque.';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroiAventura = new Heroi('Vaca_Goiaba', 29, 'Mago');
heroiAventura.infoHeroi();
heroiAventura.atacar();