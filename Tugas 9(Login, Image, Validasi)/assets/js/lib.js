function image_picker(daftar_gambar){
	gambar.src=`assets/img/${daftar_gambar}` 
	alert(`Gambar ${daftar_gambar}`)
}

function validation(nama, email, jam, tujuan, jumlah){
	let p=document.querySelectorAll("#text_error");
	let text_err=document.querySelector(".alert");	
	let nameValidation=30;	
	let emailValidation=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	let clockValidation="([01]?[0-9]|2[0-3]):[0-5][0-9]";
	let totalValidation="^[0-9]+$"
	let tujuanValidation="^[a-z A-Z]+$"
	if(nama === "" || email === "" || tujuan === "" || jam === "" || jumlah === ""){
		text_err.style.display="block";
		setTimeout(function(){
			text_err.style.display="none";
		}, 1000)
		
		return false
	} 
	if (nama.length >= nameValidation){
		 p[0].style.display="block";
		 p[0].style.color="red";
		return false	
	}else if(email.match(emailValidation) === null){
		p[1].style.display="block";
		p[1].style.color="red";
		return false
	}else if(jam.match(clockValidation) === null){
		p[2].style.display="block";
		p[2].style.color="red";
		return false
	}else if(tujuan.match(tujuanValidation) === null){
		p[3].style.display="block";
		p[3].style.color="red";
		return false
	}
	else if(jumlah.match(totalValidation) === null){
		p[4].style.display="block";
		p[4].style.color="red";
		return false
	}else{
		return input(nama, email, jam, tujuan, jumlah)
	}
	console.log(tujuan == "rama")

	function input(nama, email, jam, tujuan, jumlah){
		let table=document.querySelector(".table");
		let row=table.insertRow(1)
		let cell1=row.insertCell(0)
		let cell2=row.insertCell(1)
		let cell3=row.insertCell(2)
		let cell4=row.insertCell(3)
		let cell5=row.insertCell(4)
		cell1.innerHTML=nama
		cell2.innerHTML=email
		cell3.innerHTML=jam
		cell4.innerHTML=tujuan
		cell5.innerHTML=jumlah
	}
}
