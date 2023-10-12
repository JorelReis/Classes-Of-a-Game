//New Project - Writing game classes.
class AdventureHero  {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        console.log("O " + this.type + " atacou usando " + this.attackType());
    }

    attackType() {
        if (this.type === "mago") {
            return "usou magia";
        } else if (this.type === "guerreiro") {
            return "usou espada";
        } else if (this.type === "monge") {
            return "usou artes marciais";
        } else if (this.type === "ninja") {
            return "usou shuriken";
        }
    }
}

const mago = new AdventureHero ("Znynja", 22, "mago");
mago.attack ();
const guerreiro = new AdventureHero ("Fallen", 30, "guerreiro");
guerreiro.attack ();
const monge = new AdventureHero ("Fnx", 33, "monge");
monge.attack ();
const ninja = new AdventureHero ("Kscerato", 30, "ninja");
ninja.attack ();
