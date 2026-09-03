# Design System — SNCF Réseau
## Site interne "Excellence Opérationnelle"

> Document de référence pour la conception d'interfaces internes SNCF Réseau, basé sur les guidelines officielles de la marque (marques.groupe-sncf.com — "Notre identité").
> Dernière synthèse : identité de marque SNCF Réseau, section "Notre identité".

---

## 1. Principes directeurs

L'identité SNCF Réseau s'articule autour du **sillon**, la forme angulaire qui symbolise la voie ferrée, le mouvement et la mobilité durable. Pour un outil interne d'excellence opérationnelle, on retient trois principes :

- **Clarté avant tout** : les utilisateurs consultent des indicateurs, des statuts, des tableaux de suivi. La lisibilité prime sur la décoration.
- **Sobriété graphique** : on utilise le sillon et les dégradés avec parcimonie (en-tête, séparateurs de section, pages d'accueil), jamais derrière du texte dense ou des tableaux de données.
- **Accessibilité numérique (RGAA/AA)** : contrastes conformes, hiérarchie de titres, texte alternatif pour les images décoratives (dont le logo).

---

## 2. Logo

Le logotype SNCF Réseau existe en 3 versions : couleur (fond blanc), blanc (fond coloré/sombre), noir (fond clair neutre).

Règles d'usage :
- Toujours respecter la **zone de protection** (aucun élément dans une zone égale à la hauteur du logo) et la **taille minimale**.
- Ne jamais déformer, tourner, recolorer le logo.
- Position par défaut : **bas droite** des supports, ou **origine du sillon** (à droite de celui-ci) en en-tête de site.
- Sur le web, exception admise : le logo peut être positionné à gauche du header.
- Le logo est une **image de décoration** pour les lecteurs d'écran (alt="" ou aria-hidden), sauf s'il sert de lien vers l'accueil (alors alt="SNCF Réseau, accueil").

Fichiers à utiliser dans le produit : \`logo-sncf-reseau-couleur.svg\`, \`logo-sncf-reseau-blanc.svg\`, \`logo-sncf-reseau-noir.svg\` (voir section Assets).

---

## 3. Couleurs

### 3.1 Palette de marque (dégradés foncé/clair)

| Nom | Foncé (HEX) | Clair (HEX) |
|---|---|---|
| Violet électrique | #9024FA | #AF80F2 |
| Violet lie de vin | #800064 | #BA6AA7 |
| Rose rubis | #C30067 | #EF62B5 |
| Rouge feu | #C80E0E | #F08992 |
| Orange mécanique | #DE511D | #DF8B7F |
| Jaune or | #FFB100 | #F1D18A |
| Bleu acier | #264FC4 | #508ECC |
| Bleu cobalt | #5068F5 | #97C7EC |
| Bleu givré | #00AFB5 | #91C0BF |
| Vert lichen | #7AB327 | #B0CC93 |
| Vert trèfle | #008056 | #00CB83 |
| Vert sapin | #015147 | #28A092 |
| Noir | #000000 | — |
| Blanc | #FFFFFF | — |

### 3.2 Tokens couleurs applicatifs (proposition pour l'outil interne)

Pour un site d'excellence opérationnelle (KPI, statuts, alertes), on mappe la palette de marque sur des rôles fonctionnels :

\`\`\`css
:root {
  /* Marque */
  --sncf-violet-fonce: #9024FA;
  --sncf-bleu-acier-fonce: #264FC4;
  --sncf-bleu-cobalt-fonce: #5068F5;
  --sncf-vert-trefle-fonce: #008056;
  --sncf-vert-trefle-clair: #00CB83;
  --sncf-jaune-or-fonce: #FFB100;
  --sncf-rouge-feu-fonce: #C80E0E;
  --sncf-orange-mecanique-fonce: #DE511D;
  --sncf-noir: #000000;
  --sncf-blanc: #FFFFFF;

  /* Rôles fonctionnels (à utiliser dans les composants) */
  --color-primary: var(--sncf-bleu-acier-fonce);
  --color-primary-hover: #1d3d9c;
  --color-secondary: var(--sncf-violet-fonce);
  --color-success: var(--sncf-vert-trefle-fonce);
  --color-success-bg: #e5f7ee;
  --color-warning: var(--sncf-jaune-or-fonce);
  --color-warning-bg: #fff6e0;
  --color-danger: var(--sncf-rouge-feu-fonce);
  --color-danger-bg: #fdeaea;
  --color-info: var(--sncf-bleu-cobalt-fonce);
  --color-info-bg: #eef1fe;

  /* Statuts opérationnels (RAG - Red/Amber/Green) */
  --status-ok: var(--sncf-vert-trefle-fonce);
  --status-attention: var(--sncf-jaune-or-fonce);
  --status-critique: var(--sncf-rouge-feu-fonce);
  --status-neutre: #8a8f98;

  /* Neutres */
  --color-text: #1a1a1a;
  --color-text-muted: #5c5f66;
  --color-border: #d9dce1;
  --color-bg: #ffffff;
  --color-bg-alt: #f5f6f8;
}
\`\`\`

### 3.3 Dégradés

4 familles de dégradés existent : **soft** (foncé→clair d'une même teinte), **soft multicolores**, **libres** (harmonies personnalisées), **texturés** (formes travaillées, digital).

Usage recommandé sur l'outil interne : dégradés réservés aux zones d'accueil / bannières / pages de garde. Jamais en fond de texte, de tableau ou de formulaire. Toujours vérifier le contraste avec l'outil Tanaguru Contrast Finder avant application d'un texte sur dégradé.

### 3.4 Accessibilité

- Respecter un contraste minimum conforme au niveau **AA** (WCAG) entre texte et fond.
- Si un dégradé ne permet pas d'atteindre ce contraste, inverser le dégradé pour placer la zone la plus foncée sous le texte.
- Le logo et les pictogrammes décoratifs sont masqués aux lecteurs d'écran (image de décoration) ; les icônes porteuses de sens doivent avoir un texte alternatif.

---

## 4. Typographie

**Police de marque : Avenir LT Std** (Light 300, Book/Roman 400, Medium 400, Heavy 400, Black 900). Usage recommandé : Book, Medium, Black.

- Saisie des textes courants en bas de casse (éviter les capitales pour hiérarchiser : préférer le jeu de graisses).
- Pour le web, si la licence Avenir LT Std n'est pas déployée sur le poste des utilisateurs internes, prévoir une pile de secours (fallback) proche visuellement :

\`\`\`css
:root {
  --font-family-base: "Avenir LT Std", "Avenir Next", "Helvetica Neue", Arial, sans-serif;
}
\`\`\`

### 4.1 Échelle typographique (proposition écran)

| Style | Taille | Graisse | Usage |
|---|---|---|---|
| Display | 40px / 1.1 | Black (900) | Titre de page d'accueil |
| H1 | 32px / 1.2 | Black (900) | Titre principal de page |
| H2 | 24px / 1.3 | Heavy/Black | Titre de section |
| H3 | 20px / 1.4 | Medium | Sous-section, titre de carte |
| Body | 16px / 1.5 | Book/Roman | Texte courant |
| Body small | 14px / 1.5 | Book/Roman | Légendes, aide contextuelle |
| Caption | 12px / 1.4 | Medium | Labels, métadonnées, timestamps |
| Chiffre clé (KPI) | 36–48px / 1.1 | Black (900) | Indicateur chiffré mis en avant |

---

## 5. Le sillon (élément graphique signature)

Le sillon est une forme angulaire (type "chevron ouvert") qui traverse les supports pour créer un mouvement directionnel. Règles :

- Angle d'ouverture entre **10° et 80°** (ni trop étroit, ni trop plat).
- Le logotype se place à l'origine du sillon (à sa droite) lorsqu'il l'accompagne.
- Sur le web, le sillon peut structurer un **bandeau d'en-tête**, une **bannière de page d'accueil** ou un **séparateur de section** — jamais un fond de zone de contenu ou de formulaire.
- Interdits : sillon trop obtus/aigu/anguleux, décalage du point de départ hors marge (sauf en-tête web), déformation.

Usage suggéré pour l'outil interne : un bandeau applicatif en haut de l'écran d'accueil / tableau de bord, utilisant un dégradé de la palette + le sillon en filigrane, avec le logo en ouverture à droite.

---

## 6. Grille & espacement

\`\`\`css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  --container-max-width: 1280px;
}
\`\`\`

Grille recommandée : 12 colonnes, gouttière 24px, marges latérales 32px (desktop) / 16px (mobile).

---

## 7. Composants clés pour un site d'excellence opérationnelle

### 7.1 Boutons

| Variante | Fond | Texte | Bordure | Usage |
|---|---|---|---|---|
| Primaire | var(--color-primary) | Blanc | aucune | Action principale |
| Secondaire | Blanc | var(--color-primary) | 1px var(--color-primary) | Action secondaire |
| Danger | var(--color-danger) | Blanc | aucune | Action destructive |
| Texte / lien | transparent | var(--color-primary) | aucune | Action tertiaire |

Hauteur standard 40px, radius `--radius-sm`, padding horizontal 16px, focus visible obligatoire (contour 2px, couleur `--color-info`).

### 7.2 Badges de statut (RAG)

Utilisés pour les indicateurs de performance, incidents, jalons de projet :

- **OK / Conforme** : fond `--color-success-bg`, texte `--status-ok`
- **Attention / Vigilance** : fond `--color-warning-bg`, texte `#8a5a00` (jaune foncé pour contraste AA)
- **Critique / Non conforme** : fond `--color-danger-bg`, texte `--status-critique`
- **Neutre / Non applicable** : fond `#eef0f2`, texte `--status-neutre`

Forme : pastille arrondie (pill), texte en Medium 12–14px, icône optionnelle (rond plein/triangle/croix) pour ne pas dépendre uniquement de la couleur (accessibilité daltonisme).

### 7.3 Cartes KPI

Carte blanche, bordure `--color-border`, radius `--radius-md`, padding 24px : label (Caption), valeur (style "Chiffre clé"), variation (badge succès/danger avec flèche), contexte (Body small en `--color-text-muted`).

### 7.4 Tableaux de suivi

- En-tête `--color-bg-alt`, texte Medium, tri visuellement identifiable.
- Lignes alternées légères ou séparateurs `1px --color-border` (pas de dégradé, pas de couleur vive en fond de ligne).
- Statuts affichés via badges RAG (section 7.2), jamais uniquement par une couleur de fond de cellule.

### 7.5 Alertes / bandeaux d'information

Reprendre les couleurs fonctionnelles (info/succès/attention/danger) avec fond clair `*-bg`, bordure gauche 4px de la couleur pleine, icône + texte, jamais de dégradé de marque.

### 7.6 Pictogrammes

Bibliothèque officielle de pictogrammes SNCF Réseau (plein ou outline), utilisables en dégradé sur les pages d'accueil, en monochrome `--color-text` ou `--color-primary` dans les interfaces denses (tableaux, menus, formulaires).

---

## 8. Ton de voix

Le ton de voix SNCF Réseau doit rester cohérent même dans un outil interne : clair, direct, orienté action et confiance. Pour l'excellence opérationnelle, privilégier des libellés factuels et actionnables (ex. "3 incidents à traiter" plutôt que des formulations vagues), sans jargon inutile.

---

## 9. Assets à intégrer au projet

À placer dans `/assets/brand/` :

- `logo-sncf-reseau-couleur.svg` / `.png`
- `logo-sncf-reseau-blanc.svg` / `.png`
- `logo-sncf-reseau-noir.svg` / `.png`
- Police Avenir LT Std (licence à vérifier auprès de la Direction de la Communication SNCF Réseau avant déploiement web/webfont)
- Pictogrammes (pack PowerPoint officiel, à réexporter en SVG pour le web si besoin)

> Source officielle : marques.groupe-sncf.com — "Notre identité" (Logotype, Sillon, Typographie, Couleurs, Pictogrammes). Contact accessibilité : Direction de l'Accessibilité SNCF Réseau.

---

## 10. Checklist avant mise en production

- [ ] Contrastes AA vérifiés sur tous les textes et badges de statut
- [ ] Logo utilisé uniquement dans ses 3 versions officielles, non modifié
- [ ] Sillon utilisé uniquement en bandeau/bannière, jamais en fond de contenu dense
- [ ] Dégradés absents des tableaux, formulaires, zones de texte long
- [ ] Statuts RAG portés par icône + couleur + texte (pas uniquement la couleur)
- [ ] Licence typographique Avenir LT Std validée pour l'usage web interne
