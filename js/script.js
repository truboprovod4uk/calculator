function add(){
	var fn = document.getElementById("fn").value;
	var sn = document.getElementById("sn").value;
    document.getElementById("result").value = Number(fn) + Number(sn);
}

function minus(){
	var fn = document.getElementById("fn").value;
	var sn = document.getElementById("sn").value;
    document.getElementById("result").value = Number(fn) - Number(sn);
}

function multiple(){
	var fn = document.getElementById("fn").value;
	var sn = document.getElementById("sn").value;
    document.getElementById("result").value = Number(fn) * Number(sn);
}

function division(){
	var fn = document.getElementById("fn").value;
	var sn = document.getElementById("sn").value;
    document.getElementById("result").value = Number(fn) / Number(sn);
}