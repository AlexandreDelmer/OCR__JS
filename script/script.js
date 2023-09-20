//On crée la fonction pour afficher le résultat du jeu
function afficherResultat(score, nbMotsProposes){
    // On affiche le résultat
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

//On crée la fonction pour choisir entre le jeu avec les mots ou avec les phrases
function choisirPhrasesOuMots(){
    let choix = prompt("Choisissez entre 'mots et 'phrases'")
    while(choix !== "mots" && choix !== "phrases"){
        choix = prompt("Choisissez entre 'mots et 'phrases'")
    }
    return choix
}

//On crée la boucle de jeu
function lancerBoucleDeJeu(listeProposition){
    let score = 0
    for (let i = 0; i < listeProposition.length; i++ ){
        //On demande à l'utilisateur de saisir le mot indiqué
        let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
        //Si le mot est correct alors on incrément la variable score de ++
        if (motUtilisateur === listeProposition[i]){
            score++
        }
    }
    return score
}

//C'est la fonction principale qui va s'occuper de lancer toutes les autres
function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    
    afficherResultat(score, nbMotsProposes)
}