const EventEmitter = require('events') // importer le module events 
const eventEmitter = new EventEmitter() // instancier un objet de type EventEmitter
eventEmitter.on('start', () => {
  console.log('started');
}); // Définir le type d’évènement et l’action à exécuter 

//lancer un évènement  
eventEmitter.emit('start');
eventEmitter.emit('start');