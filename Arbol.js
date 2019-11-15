var NodoArbol = function(elemento){
	let padre = null 
	let hijos = []

	this.getElemento = function(){
		return elemento
	}

	this.setPadre = function(pad){
		padre = pad
	}

	this.getPadre = function(){
		return padre
	}

	this.getHijos = function(){
		return hijos
	}
}

var ArbolNodos = function(){
	let size = 0
	let raiz = null 

	this.agregarRaiz = function(elemento){
		if(raiz == null){
			raiz = new NodoArbol(elemento)
			size++
		}
	}

	this.eliminarHijo = function(padre,hijo){
		if(hijo.getPadre() == padre){
			let hijos = padre.getHijos()
			let indice = hijos.indexOf(hijo)
			hijos.splice(indice,1)
			hijos.concat(hijo.getHijos())
			size--
		}
	}

	this.size = function(){
		return size
	}

	this.getRaiz = function(){
		return raiz
	}

	this.agregarHijo = function(padre , elemento){
		let hijos = padre.getHijos()
		let nuevo = new NodoArbol(elemento)
		nuevo.setPadre(padre)
		hijos.push(nuevo)
		size++
		return nuevo
	}

	
}

var arbol = new ArbolNodos()
var raiz
var hijo2 , hijo3 , hijo4 , hijo5 , hijo6 , hijo7

arbol.agregarRaiz(1)
console.log("size: "+ arbol.size());

raiz = arbol.getRaiz()
console.log("raiz: "+ raiz.getElemento())

hijo2 = arbol.agregarHijo(raiz, 2)
hijo3 = arbol.agregarHijo(raiz, 3)
console.log("size: "+ arbol.size());

hijo4 = arbol.agregarHijo(hijo2, 4)
hijo5 = arbol.agregarHijo(hijo2, 5)
hijo6 = arbol.agregarHijo(hijo3, 6)
hijo7 = arbol.agregarHijo(hijo3, 7)
console.log("size: "+ arbol.size());

arbol.eliminarHijo(hijo2, hijo3) // no hace nada
arbol.eliminarHijo(hijo3, hijo7)
console.log("size: "+ arbol.size());