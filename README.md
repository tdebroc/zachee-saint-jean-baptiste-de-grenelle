# Parcours Zachée — Saint Jean Baptiste de Grenelle

Site statique moderne et élégant présentant le **Parcours Zachée** organisé par la
paroisse Saint Jean Baptiste de Grenelle.

Le Parcours Zachée est un chemin de (trans)formation pour apprendre à vivre en chrétien
au quotidien, afin d'unifier foi, travail et vie sociale.

## Aperçu

- **Présentations** : 14 & 21 septembre 2026, 20h30–22h00
- **Lieu** : Grenelle Jeunes — 4 quater passage des Écoliers, Paris
- **Contact / inscription** : zachee.paris.sud@gmail.com

## Contenu du site

Une page unique présentant :
- le parcours et son objectif,
- à qui il s'adresse,
- son fonctionnement (enseignements, exercices, partages, prière),
- les 8 thèmes (**la boussole** et **le compas**),
- le calendrier des rencontres 2026–2027,
- le témoignage du responsable.

## Stack

Site 100 % statique, sans dépendance ni étape de build :

```
index.html          Page unique
css/styles.css      Design system "Zachée" + animations
js/main.js          Interactions (vanilla JS)
assets/favicon.svg  Logo sycomore
```

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000

## Déploiement

Le site étant statique, il peut être publié via **GitHub Pages** (branche `main`,
dossier racine) ou tout hébergeur statique (Netlify, Vercel, etc.).
