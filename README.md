# 🚀 Simulateur PEA Intelligent

> **Et si vous étiez riche dans 20 ans ?**

Une application web interactive pour calculer et visualiser le pouvoir des intérêts composés sur votre épargne avec un Plan d'Épargne en Actions (PEA).

![Simulation Gratuite & Instantanée](https://img.shields.io/badge/Simulation-Gratuite%20%26%20Instantanée-brightgreen?style=for-the-badge&logo=money)
![Made with Svelte](https://img.shields.io/badge/Made%20with-Svelte-ff3e00?style=for-the-badge&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Fonctionnalités

### 💰 **Simulation Complète**

- **Capital initial** : Définissez votre mise de départ
- **Versements réguliers** : Mensuels ou annuels
- **Taux de rendement** : Personnalisable selon vos objectifs
- **Durée d'investissement** : De 1 à 50+ ans

### 📊 **Visualisation Interactive**

- **Graphique d'évolution** : Suivez la croissance de votre patrimoine année par année
- **Comparaison visuelle** : Capital investi vs. gains générés
- **Animation fluide** : Interface moderne avec Chart.js

### 🎯 **Calculs Précis**

- **Intérêts composés** : Capitalisation mensuelle
- **Historique détaillé** : Évolution mois par mois
- **Résultats instantanés** : Mise à jour en temps réel

## 🛠️ Technologies Utilisées

### Frontend

- **[Svelte 5](https://svelte.dev)** - Framework JavaScript moderne avec Runes
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour plus de robustesse
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[DaisyUI](https://daisyui.com/)** - Composants UI pour Tailwind
- **[Chart.js](https://www.chartjs.org/)** - Bibliothèque de graphiques

### Outils de Développement

- **PNPM** - Gestionnaire de paquets performant
- **Svelte Check** - Validation TypeScript pour Svelte
- **ESLint** - Linting et qualité du code

## 🚦 Installation et Lancement

### Prérequis

- **Node.js** (version 18 ou supérieure)
- **PNPM** (recommandé) ou NPM

### Installation

```bash
# Cloner le projet
git clone https://github.com/kyu-dev/pea_simulator.git
cd pea_simulator

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

L'application sera accessible sur `http://localhost:5173`

### Scripts Disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Prévisualisation du build
pnpm preview

# Vérification TypeScript
pnpm check
```

## 📁 Structure du Projet

```
pea_simulator/
├── src/
│   ├── components/
│   │   ├── Graph.svelte      # Graphique d'évolution
│   │   ├── Header.svelte     # En-tête de l'application
│   │   ├── Hero.svelte       # Section héroïque
│   │   ├── Input.svelte      # Formulaire de paramètres
│   │   └── Result.svelte     # Affichage des résultats
│   ├── lib/
│   │   └── calcul.ts         # Logique de calcul des intérêts composés
│   ├── App.svelte            # Composant principal
│   ├── main.ts               # Point d'entrée
│   └── app.css               # Styles globaux
├── public/                   # Assets statiques
├── package.json              # Configuration des dépendances
├── vite.config.ts            # Configuration Vite
├── svelte.config.js          # Configuration Svelte
└── tsconfig.json             # Configuration TypeScript
```

## 🧮 Algorithme de Calcul

L'application utilise un algorithme précis pour calculer les intérêts composés :

### Paramètres

- **Capitalisation** : Mensuelle (12 fois par an)
- **Versements** : Selon la fréquence choisie (mensuel/annuel)
- **Taux** : Converti en taux périodique mensuel

### Formule

Pour chaque période mensuelle :

1. Application des intérêts : `capital × (1 + taux_mensuel)`
2. Ajout du versement si applicable
3. Sauvegarde dans l'historique

## 🎨 Design et UX

### Interface Moderne

- **Glassmorphism** : Effets de transparence et backdrop-blur
- **Gradients dynamiques** : Couleurs amber → orange → pink
- **Animations CSS** : Éléments flottants et transitions fluides
- **Design responsive** : Optimisé mobile, tablette et desktop

### Expérience Utilisateur

- **Mise à jour temps réel** : Résultats calculés automatiquement
- **Validation des données** : Gestion des cas d'erreur
- **Feedback visuel** : Animations et états de hover
- **Accessibilité** : Labels appropriés et structure sémantique

## 🔍 Cas d'Usage

### 👨‍💼 **Investisseur Débutant**

- Découvrir l'impact des versements réguliers
- Comprendre l'effet de levier temporel
- Planifier son épargne retraite

### 📈 **Conseiller Financier**

- Présenter des simulations clients
- Démontrer l'intérêt des investissements long terme
- Comparer différents scénarios

### 🎓 **Éducation Financière**

- Enseigner les intérêts composés
- Visualiser l'impact du temps sur l'épargne
- Sensibiliser à l'investissement

## 🚀 Fonctionnalités Futures

- [ ] **Export PDF** - Rapport détaillé de simulation
- [ ] **Comparaison de scénarios** - Plusieurs simulations simultanées
- [ ] **Calcul d'inflation** - Ajustement du pouvoir d'achat
- [ ] **Historique des simulations** - Sauvegarde locale
- [ ] **Partage de simulation** - URL de partage
- [ ] **Mode sombre** - Thème alternatif
- [ ] **Données de marché réelles** - API de cours boursiers

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Arthur Vienot-Ongaro** - [@kyu-dev](https://github.com/kyu-dev)

---

<p align="center">
  <strong>💡 Transformez votre épargne en richesse avec le pouvoir des intérêts composés !</strong>
</p>

<p align="center">
  <a href="https://github.com/kyu-dev/pea_simulator">⭐ N'oubliez pas de mettre une étoile si ce projet vous plaît !</a>
</p>
