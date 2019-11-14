
// Nodo que conforma la pila
var NodoPila = function(elemento){
	let contenido = elemento
	let anterior = null

	this.setAnterior = function(nodo){
		anterior = nodo
	}
	this.getElemento = function(){
		return contenido
	}

	this.getAnterior = function (){
		return anterior
	}

}

//Estructura de datos
var PilaNodo = function(){
	let size = 0
	let nodo = null

	this.apilar = function(elemento){
		let nuevo = new NodoPila(elemento)
		nuevo.setAnterior(nodo)
		nodo = nuevo
		size = size + 1
	}

	this.size = function(){
		return size
	}

	this.isEmpty = function(){
		return nodo == null
	}
	this.desapilar = function(){
		let retu = nodo
		if(nodo != null){
			size--
			nodo = nodo.getAnterior()
			return retu.getElemento()
		}
		return null
	}
}

// se crea la pila.
var pila = new PilaNodo()

// confirma que esta vacia
console.log(pila.size());

// se llena la pila
for(let i = 0 ; i < 10 ; i++){
	pila.apilar(i);
}
// confirma que contiene la cantidad que se introdujo
console.log(pila.size());

// se vacia la pila
while(!pila.isEmpty()){
	console.log(pila.desapilar());
}