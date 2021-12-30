
 function login(){	
		let username=document.querySelector("input[name=username]").value;
		let password=document.querySelector("input[name=password]").value;
		if (username === "" && password === ""){
			alert("Masukkan email dan password!")
		}else if (username === "rama" && password === "ganteng"){
			document.location="success.html";
		}else{
			alert("Username / password salah!")
		}
}
