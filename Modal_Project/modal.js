var myModal = document.getElementById("myModal");

function openModal(){
	myModal.style.display = "block";
}

function currentSlide(n){

}

function closeModal(){
	myModal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == myModal)
	{
		myModal.style.display = "none";
	}
}