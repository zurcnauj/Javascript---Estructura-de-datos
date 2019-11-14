var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

var variableExterna = 10;
function Objeto(vari){
	 let variable = vari;

	this.funcion1 = function(){
		return variable ;
	}
}

var obj1 = new Objeto(12);
var obj2 = new Objeto(1234)

console.log(person.lastName);
console.log(obj1.variable)
console.log(obj2.funcion1())