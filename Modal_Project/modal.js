var myModal = document.getElementById("myModal");
var slides = document.getElementsByClassName("modal-content");

function openModal(){
	myModal.style.display = "block";
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

function showSlides(n){
	var i;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
}