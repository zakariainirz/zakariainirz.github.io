const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const downloadBtn = document.getElementById('download-btn');
const dateInput = document.getElementById('date');



const image = new Image();
image.src = 'ticket1.png';
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.font = 'bold 18px monospace ';
	ctx.fillStyle = '#000000'
	ctx.fillText(nameInput.value, 50, 320)
	ctx.fillText(dateInput.value, 50, 240)
}



downloadBtn.addEventListener('click', ()=> {
	const image = canvas.toDataURL("image/png");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
	//window.location.href=image; 
});



nameInput.addEventListener('input', function () {
	drawImage()
})


downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'ticket1 - ' + nameInput.value
})


