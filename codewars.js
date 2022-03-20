let numbers = ["Zero", "One", "Two", "Three","Four", 
	      "Five", "Six", "Seven", "Eight", "Nine"];

function switchItUp(val,result ) {
	for(var i = 0; i < val.length; i++){
		if (result == i){
			return console.log(numbers[i])
		}
	}
}

switchItUp(numbers, 5);

