class Voiture {
    // Déclare les propriétés privées
    #marque;
    #modele;
    #annee;
    #couleur;

    constructor(marque, modele, annee, couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }

    // Getters
    get marque() {
        return this.#marque;
    }

    get modele() {
        return this.#modele;
    }

    get annee() {
        return this.#annee;
    }

    get couleur() {
        return this.#couleur;
    }

    // Setters
    set marque(marque) {
        this.#marque = marque;
    }

    set modele(modele) {
        this.#modele = modele;
    }

    set annee(annee) {
        this.#annee = annee;
    }

    set couleur(couleur) {
        this.#couleur = couleur;
    }

    afficherDetails() {
        console.log(this.#marque, this.#modele, this.#annee, this.#couleur);
    }
}

// Déclare une nouvelle variable pour stocker le nouvel objet
let voiture1 = new Voiture("Suzuki", "Swift", 2017, "Noire");
voiture1.afficherDetails();
console.log(voiture1.marque);

let voiture2 = new Voiture("Toyota", "Corolla", 2019, "Blanche");
voiture2.couleur = "Rouge";
console.log(voiture2.couleur);