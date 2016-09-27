

function Robot(){

 
  this.reset = function(){
    this.generateName();
  }
  this.generateName = function(){
    var newName = this.setName();
    while(this.nameList.indexOf(newName) !== -1){
      newName = this.setName();
    }
    this.nameList.push(newName);
    this.name = newName;
  }

  this.setName = function(){
    var letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
    var digits = Math.floor(Math.random() * 899) + 100;
    return letters + digits;
  }
  this.generateName();
 
}

Robot.prototype.nameList = [];

var a = new Robot();
var b = new Robot();
console.log(a.nameList);
console.log(b.nameList);


