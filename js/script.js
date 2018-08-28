document.addEventListener("DOMContentLoaded",
   function (event){

		function add(event){
			var fn = document.getElementById("fn").value;
			var sn = document.getElementById("sn").value;
			document.getElementById("result").value = Number(fn) + Number(sn);
			console.log(event);
		}

		function minus(){
			var fn = document.getElementById("fn").value;
			var sn = document.getElementById("sn").value;
			document.getElementById("result").value = Number(fn) - Number(sn);
		}

		function multiply(){
			var fn = document.getElementById("fn").value;
			var sn = document.getElementById("sn").value;
			document.getElementById("result").value = Number(fn) * Number(sn);
		}

		function division(){
			var fn = document.getElementById("fn").value;
			var sn = document.getElementById("sn").value;
			document.getElementById("result").value = Number(fn) / Number(sn);
		}

		function clean(){
			document.getElementById("fn").value = "";
			document.getElementById("sn").value = "";
			document.getElementById("result").value = "";
		}

		document.querySelector("#add").addEventListener("click", add);
		document.querySelector("#minus").addEventListener("click", minus);
		document.querySelector("#multiply").addEventListener("click", multiply);
		document.querySelector("#division").addEventListener("click", division);
		document.querySelector("#clean").addEventListener("click", clean);
		
   }
);



