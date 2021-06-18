const colors=['green','red',"#33FFFF",'#FFCCFF','#CC99CC'];
const three= document.getElementById('three');
const color1= document.querySelector('.color');
three.addEventListener("click",function(){
	const randomNumber= getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor= colors[randomNumber];
	color1.textContent = colors[randomNumber];
});
function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
};