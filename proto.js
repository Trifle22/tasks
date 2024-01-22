class Animal {
  constructor(name){
    this.name = name
  }

  makeSound() {
    console.log('some sound');
  }
}

const cat = new Animal('whiskers')
Animal.prototype.meow = function() {
  console.log('meow');
}

cat.meow()