
var posNeg = function(a, b, negative) {
    negative = Boolean(negative);
    if (negative == true) {
    	if (a<0 && b<0) {
    		return 1;
    	}
    	else {
    		return 0;
    	}
    }	
    else {
	    if ((a>0&&b<0) || (a<0&&b>0)) {
	    	return 1;
	    }
	    else {
	    	return 0;
	    }    	
    }
};
var evaluar = function () {
	var a= parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
    var negative = parseInt(document.getElementById("negative").value);
    //console.log(a, b, negative)
    var salida = posNeg(a, b, negative);
    $('#salida').val(salida);
}





