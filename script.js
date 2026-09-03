function genererVision(){

    let utilisateurs=document.getElementById("utilisateurs").value || "...";
    let action=document.getElementById("action").value || "...";
    let benefices=document.getElementById("benefices").value || "...";

    let texte=
    "<strong>Vision proposée :</strong><br><br>" +
    "\"Nous voulons permettre à <b>" + utilisateurs +
    "</b> de <b>" + action +
    "</b> afin de <b>" + benefices +
    "</b>.\"";

    document.getElementById("visionResult").style.display="block";
    document.getElementById("visionResult").innerHTML=texte;
}
