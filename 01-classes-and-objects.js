class Voiture { 
    // Initialize the object
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    // Method to display the details of the object
    afficherDetails() {
        console.log(this.marque, this.modele, this.annee, this.couleur);
    }
}

// Declare a new variable to store the new object
let voiture1 = new Voiture("Suzuki", "Swift", 2017, "Noire");
voiture1.afficherDetails();

