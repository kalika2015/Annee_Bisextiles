document.getElementById('btn').addEventListener("click", function() {
    var annee = document.getElementById('annee').value;
    annee = parseInt(annee);

    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)){
        document.getElementById('reponse').innerHTML = annee+" est une année bissextile";
        document.getElementById("reponse").className = "success";
    } else {
        document.getElementById('reponse').innerHTML = annee+" n'est pas une année bissextile";
        document.getElementById("reponse").className = "danger";
    }
});
