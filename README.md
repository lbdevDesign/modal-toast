# @kospheus/modal-toast

Un composant React simple pour afficher des messages toast et optimiser l'expérience utilisateur.

## Installation

Vous pouvez installer `@kospheus/modal-toast` en utilisant npm ou yarn.

Avec npm:

```bash
npm install @kospheus/modal-toast
```

avec yarn : 

```bash
yarn add @kospheus/modal-toast
```

## Utilisation

Pour utiliser @kospheus/modal-toast dans votre projet React, suivez les étapes ci-dessous :

importer :

```javascript
import React, { useState } from 'react';
import { ModalToast } from '@kospheus/modal-toast';
````

Initialiser le state pour contrôler la visibilité du toast :

```javascript
const [isToastVisible, setToastVisible] = useState(false);
````

Incluez setToastVisible(true); dans la fonction qui sera appelée pour afficher le toast. Par exemple, cela pourrait être une fonction de soumission de formulaire ou une réponse à une action utilisateur : 

```javascript
const handleSubmit = () => {
  // Votre logique ici
  setToastVisible(true);
};
````

Placez le composant ModalToast là où vous souhaitez qu'il apparaisse dans votre structure de composants. Utilisez les props pour personnaliser le message et gérer la fermeture du toast :

```javascript
{isToastVisible && (
  <ModalToast
    message="Votre message ici"
    isVisible={isToastVisible}
    onClose={() => setToastVisible(false)}
  />
)}
````

## Style

Le composant ModalToast accepte une prop className que vous pouvez utiliser pour ajouter vos propres classes CSS afin de personnaliser le style.

```jsx
<ModalToast
  message="Votre message ici"
  isVisible={isToastVisible}
  onClose={() => setToastVisible(false)}
  className="my-custom-toast"
/>
```

Et voilà !


# Support

Pour des problèmes ou des questions liées à l'utilisation de @kospheus/modal-toast, veuillez ouvrir un ticket dans le référentiel GitHub du projet.

## Contributing

Les "pull requests" sont les bienvenues. Pour les changements importants, veuillez d'abord ouvrir un problème pour discuter de ce que vous aimeriez modifier.
