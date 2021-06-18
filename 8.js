var ton= document.getElementById('J');
var ju= document.getElementById('A');

function handleClick(){
	var newTodo = document.createElement("p");
	newTodo.innerText = ton.value;
	var body = document.getElementsByTagName("body")[0];
 	body.appendChild(newTodo);



}
ju.addEventListener("click",handleClick);




