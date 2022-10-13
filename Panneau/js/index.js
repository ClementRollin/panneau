function afficher_texte() {
    var texte = document.getElementsByClassName("texte");
    if(texte.style.display == "none") {
    texte.style.display = "block";
    } else {
    texte.style.display = "none";
    }
}