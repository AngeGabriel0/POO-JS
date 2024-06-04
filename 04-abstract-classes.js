class Animal {
}

class Chien extends Animal {
    faireduBruit() {
        console.log('Le chien aboie');
    }
}

class Chat extends Animal {
    faireduBruit() {
        console.log('Le chat miaule');
    }
}

let chien = new Chien();
chien.faireduBruit();

let chat = new Chat();
chat.faireduBruit();

