    //this works the same as the class Potion below but the class Potion is supposedly better
// function Potion(name) {
//     this.types = ['strength', 'agility', 'health']
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)]
  
//     if (this.name === 'health') {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 5 + 7);
//     }
//   }

  class Potion {
    constructor(name) {
      this.types = ['strength', 'agility', 'health'];
      this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
      if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
      } else {
        this.value = Math.floor(Math.random() * 5 + 7);
      }
    }
  }
  
  module.exports = Potion;