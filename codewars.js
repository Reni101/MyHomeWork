let numbers = ["Zero", "One", "Two", "Three","Four", 
	      "Five", "Six", "Seven", "Eight", "Nine"];
var result;			
	
function switchItUp(val,result ) {
	for(var i = 0; i < val.length; i++){
		if (result == i){
			return console.log(numbers[i])
		}
	}
}

switchItUp(numbers, 9);

