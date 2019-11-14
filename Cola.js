// Nodo que conrresponde a la estructura ColaNodo
var NodoCola = function(elemento){
	let contenido = elemento
	let siguiente = null

	this.setSiguiente = function(sig){
		siguiente = sig
	}

	this.getSiguiente = function(){
		return siguiente
	}
}
// Estructura de datos
var ColaNodo = function(){
	let size = 0
	let principio = null
	let final = null 

	this.size = function(){
		return size
	}

	this.encolar = function(elemento){
		let nuevo = new NodoCola(elemento)
		if(final != null){
			final.setSiguiente(nuevo)
			final = nuevo
		}else{
			principio = nuevo
			final = nuevo
		}
		size++
	}

	this.desencolar = function(){
		let retu = principio.getElemento()
		siguiente = siguiente.getSiguiente()
		return retu
	}
}

// cola se inicializa
var cola = new ColaNodo()

// verifica que comienza vacia
console.log(cola.size())

//
for(let i = 0 ; i < 12 ; i++){
	cola.encolar(i)
}
console.log(cola.size());