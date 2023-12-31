/**
	This function get String, convert this string to array of numbers and operators
	reduce to sum and return the sum of the whole chain of calcul
**/

export function sum(inputString){
	var op = "", sum = 0
	return inputString.match(/\d+|\+|\-|\*|[\\]/gi).reduce((a,c) => {
	    console.log(a, op)
	    if(!isNaN(c) && op == "") a = c;
	    else if(c == "+" || c == "*" || c == "/" || c == "-") 
		op = c
	    else if(!isNaN(c) && op != "") {
		console.log('switch:', op, c, a)
		switch(op){
		    case "+": a = parseInt(a) + parseInt(c); break;
		    case "-": a = parseInt(a) - parseInt(c); break;
		    case "/": a = parseInt(a) / parseInt(c); break;
		    case "*": a = parseInt(a) * parseInt(c); break;
		}
		op = "";
	    }
	    return a
	})   
}

