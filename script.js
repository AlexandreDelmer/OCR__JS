function afficherResultat(score, nbrMotsMax){
    let message = "Votre score est de " + score + " sur " + nbrMotsMax
    return message
}

/*
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

let choix = prompt("Avec quelle liste souhaites-tu jouer : 'mots' ou 'phrases' ?")

while (choix !== "mots" && choix !== "phrases") {
    let choix = prompt("Avec quelle liste souhaites-tu jouer : 'mots' ou 'phrases' ?")
}
    
if (choix === "mots"){
    for (let i = 0; i < listeMots.length; i++){
        let motUtilisateur = prompt("Entrez le mot suivant : " + listeMots[i])
        if (motUtilisateur === listeMots[i]){
        score++}
    }

    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    for (let i = 0; i < listePhrases.length; i++){
        let phraseUtilisateur = prompt("Entrez la phrase suivante : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]){
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
*/


