const STORAGE_KEY = "eor-atelier-data";

const TEXT_FIELD_IDS = [
    "utilisateurs", "action", "benefices",
    "donnees-existantes", "communaute-info",
    "usage-premier", "ia-reflexion", "roadmap-detail",
    "projection-2027", "synthese-projet"
];

const CHECKBOX_IDS = ["src-excel", "src-sharepoint", "src-ppt", "src-emails", "src-teams"];

function collecterDonnees(){
    let data = {};

    TEXT_FIELD_IDS.forEach(id=>{
        let el = document.getElementById(id);
        if(el) data[id] = el.value;
    });

    data.sources = CHECKBOX_IDS
        .map(id=>document.getElementById(id))
        .filter(el=>el && el.checked)
        .map(el=>el.value);

    return data;
}

function sauvegarder(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collecterDonnees()));

    let status = document.getElementById("saveStatus");
    if(status){
        let heure = new Date().toLocaleTimeString("fr-FR");
        status.textContent = "💾 Sauvegardé localement à " + heure;
    }
}

function restaurer(){
    let raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;

    let data = JSON.parse(raw);

    TEXT_FIELD_IDS.forEach(id=>{
        let el = document.getElementById(id);
        if(el && data[id] !== undefined) el.value = data[id];
    });

    (data.sources || []).forEach(valeur=>{
        CHECKBOX_IDS.forEach(id=>{
            let el = document.getElementById(id);
            if(el && el.value === valeur) el.checked = true;
        });
    });
}

function attacherAutosave(){
    [...TEXT_FIELD_IDS, ...CHECKBOX_IDS].forEach(id=>{
        let el = document.getElementById(id);
        if(el) el.addEventListener("input", sauvegarder);
        if(el) el.addEventListener("change", sauvegarder);
    });
}

function toggleGuide(id){
    let panel = document.getElementById(id);
    if(!panel) return;
    panel.style.display = (panel.style.display === "none") ? "block" : "none";
}

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

    sauvegarder();
}

// Génère un Markdown autoportant (contexte statique de l'atelier + réponses saisies)
// exploitable tel quel dans n'importe quel outil d'IA générative, sans cette page.
function genererMarkdown(){
    let d = collecterDonnees();
    let vide = "_(non renseigné)_";
    let val = (v) => (v && v.trim()) ? v.trim() : vide;

    return `# Atelier de cadrage — Plateforme EOR
Partage des bonnes pratiques et valorisation des marqueurs d'Excellence
Durée : 2h — Export généré le ${new Date().toLocaleString("fr-FR")}

## 1. Introduction et objectifs (10 min)
Objectif : aligner tout le monde sur ce que Nathalie cherche à obtenir.

Questions posées :
- Quelle est la problématique métier à résoudre ?
- À quoi reconnaîtra-t-on le succès dans un an ?
- Quel problème n'est aujourd'hui pas suffisamment traité ?

**Livrable — Phrase de vision :**
> "Nous voulons permettre à ${val(d["utilisateurs"])} de ${val(d["action"])} afin de ${val(d["benefices"])}."

## 2. Comprendre l'existant (20 min)
Objectif : identifier quelles informations existent déjà.

**Sources des bonnes pratiques aujourd'hui :** ${d.sources.length ? d.sources.join(", ") : vide}

**Données (marqueurs EOR, indicateurs suivis, volume) :**
${val(d["donnees-existantes"])}

**Communauté (qui produit / consulte / valide) :**
${val(d["communaute-info"])}

**Livrable — Cartographie :** Sources de données → Communauté → Usages actuels

## 3. Définir le produit cible (35 min)
**Si le produit était disponible demain matin, que ferait l'utilisateur en premier ?**
${val(d["usage-premier"])}

Cas d'usage identifiés :
- Consulter : trouver une bonne pratique, chercher un retour d'expérience, voir ce qui fonctionne ailleurs
- Contribuer : publier un retour d'expérience, déposer un document, décrire une initiative réussie
- Capitaliser : identifier les pratiques les plus citées, faire émerger des tendances
- Piloter : mesurer la diffusion, suivre les marqueurs EOR

**Livrable — Priorisation des cas d'usage :**
| Cas d'usage | Priorité |
|---|---|
| Recherche de bonnes pratiques | Haute |
| Publication d'expérience | Haute |
| IA conversationnelle | Moyenne |
| Dashboard | Moyenne |
| Recommandations IA | Faible/Moyenne |

## 4. Explorer la valeur apportée par l'IA (25 min)
Question centrale : si on enlève l'IA, que reste-t-il ? (distinguer plateforme collaborative / moteur de recherche / fonctionnalités IA)

**Réflexion du groupe :**
${val(d["ia-reflexion"])}

Cas IA à challenger :
- Assistant conversationnel — "Comment améliorer le marqueur X ?"
- Recherche sémantique — "Montre-moi des initiatives similaires."
- Génération de synthèses — "Résume-moi les 20 projets liés à ce sujet."
- Recommandation — "Quelles actions ont produit les meilleurs résultats ?"

**Livrable — IA ou non ? :**
| Fonction | IA ou non ? |
|---|---|
| Déposer une bonne pratique | Non |
| Recherche documentaire | Non |
| Recherche intelligente | Oui |
| Synthèse automatique | Oui |
| Recommandation | Oui |

## 5. Construire la feuille de route (20 min)
- Étape 1 — POC : collecte de contenus, moteur de recherche, premiers usages
- Étape 2 — MVP : communauté pilote, enrichissement, analytics
- Étape 3 — Version IA : assistant conversationnel, recommandations, analyse automatique

**Livrable — Roadmap 6 à 12 mois :**
${val(d["roadmap-detail"])}

## 6. Conclusion (10 min)
Ce qu'il faut avoir obtenu :
- ✅ La vision du produit
- ✅ Les utilisateurs cibles
- ✅ Les données disponibles
- ✅ Les principaux cas d'usage
- ✅ Les fonctionnalités IA pertinentes
- ✅ Les prochaines étapes

**Exercice de projection — Septembre 2027, le laboratoire EOR est une référence au Groupe. Que se passe-t-il concrètement ? Que disent les utilisateurs ?**
${val(d["projection-2027"])}

**Formulation synthétique du projet :**
${val(d["synthese-projet"])}
`;
}

function exporterMarkdown(){
    let markdown = genererMarkdown();
    let blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "atelier-eor-cadrage.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", ()=>{
    restaurer();
    attacherAutosave();
});

