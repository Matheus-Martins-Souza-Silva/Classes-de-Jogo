class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'a espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const mago = new Heroi("Merlin", 120, "mago");
const guerreiro = new Heroi("Conan", 35, "guerreiro");
const monge = new Heroi("Shaolin", 40, "monge");
const ninja = new Heroi("Hanzo", 28, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
