// Creates the Queue for use later
var Queue = function(){

  this.items = [];
 

  // Push, Pop, Peek 
  this.enqueue = function(element) {
    this.items.push(element);
  }

  this.dequeue = function() {
    this.items.shift();
  }

  this.getFirst = function() {
    return this.items[0];
  }

  this.isEmpty = function() {
    return this.items.length === 0;
  }

  this.size = function() {
    return this.items.length;
  }

}

// Creates an instance of the Queue
var newQueue = new Queue();

// Starts running methods
newQueue.enqueue("Asher");
newQueue.enqueue("Farley");
newQueue.enqueue("Mr.Snuggles");
newQueue.enqueue("The Cat");


console.log(newQueue.getFirst());


//============Class Queue

class Queue {
  // default value allows queue to instantiate without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the back of the queue
  addToQueue(el) {
    return this.container.push(el);
  }

  // removes an element from the front of the queue
  removeFromQueue() {
    return this.container.shift();
  }
}
