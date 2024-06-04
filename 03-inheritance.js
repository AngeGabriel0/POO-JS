class Vehicule {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
}

class Voiture extends Vehicule { 
    // 'extends' keyword is used to inherit from another class
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
    }
}

let voiture1 = new Voiture("Suzuki", "Swift", 2017, "Noire");
console.log(voiture1.marque); 
console.log(voiture1.couleur); 