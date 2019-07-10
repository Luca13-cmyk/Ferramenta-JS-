/* 


Ferramentas para funções com objetivos fundamentais de forma otimizada.
Formas parecidas com o Python

l_. Luca Negrette ._l


*/

	function sum(array){
		soma = 0;
		for (var i = 0; i < arr.length; i++) { // * Soma dos números de um array
			soma += arr[i]
		}
		return soma
	} // Sum
	function max(array){
		let valores = array.sort(function(a,b){ // * Maior número de um array
			return a - b;
		});
		return valores[valores.length - 1]
	} // Max
	function min(array){
		let valores = array.sort(function(a,b){ // * Menor número de um array
			return a - b;
		});
		return valores[0]
	} // Min
	function ran(array){
		let valores = array.sort(function(){ // * Retornar o array especificado com uma ordem aleatória
			return 0.5 - Math.random();
		});
		return valores
	} // Ran -> random
