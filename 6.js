	
	/*var str= "Jello World";
	var str2=str[str.length-3];
	console.log(str2); 
	*/
	//wordBlanks
	/*function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) 

	{
	var result= "";
	result+= "The" + myAdjective + myNoun + myVerb + "to the store" + myAdverb
	return result;
	}
	console.log(wordBlanks("dog", " big "," ran "," quickly."))*/
	//Array
	var ourArray= ["Julie",16];
	//console.log(ourArray);
	// Nested Array
	var array= [['Julie',16],['Giang',17]];
	//console.log(array);
	//Access Array Data with Indexes
	var ourArray1= [50,60,70];
	var ourData = ourArray1[0];
	//console.log(ourData);
	//Modify Array Data with Indexes
	var ourArray2=[25,05,09];
	ourArray2[1]=45;
	//console.log(ourArray2);
	//Access Multi-Dimensional Arrays with Indexes
	var myArray= [[1,2,3],[4,5,6],[7,8,9]];
	var myData= myArray[1][2];
	//console.log(myData);
	//Manipulate Arrays with push()
	var ourArray3= ['Giang','J','T'];
	ourArray3.push(['happy','enjoy']);
	//console.log(ourArray3);
	// Manipulate Arrays with pop()
	var ourArray4=[1,2,3];
	var removedFromOurArray= ourArray4.pop();
	//console.log(ourArray4);
	//console.log(removedFromOurArray);
	//Manipulate Arrays with shift();
	var ourArray5= ['One','j',['cat']];
	var removedFromOurArray2= ourArray5.shift();
	//console.log(ourArray5);
	//console.log(removedFromOurArray2);
	//Manipulate Arrays with unshift();
	var ourArray6= ['One','G','C'];
	ourArray6.shift();
	ourArray6.unshift('happy');
	//console.log(ourArray6);
    //Shopping List
    var myList=[['pork',4],['milk',2],['juice',5]];
    //console.log(myList);
    //Write Reusable Code with Functions
    /*function ourReusableFunction() {
    	//ourReusableFunction is function name
    	console.log('Hello World');
    }
    ourReusableFunction();
    ourReusableFunction();
	ourReusableFunction();
	*/
	//Passing Values to Functions with Argmuments
	/*function ourFunctionWithArgs(a,b){
		console.log(a-b);

	}
	ourFunctionWithArgs(10,5) */
	//Global Scope and Functions
	/*var myGlobal = 10;
	function fun1(){
	oopsGlobal=5;
	}
	
	function fun2(){
		var output="";
		if (typeof myGlobal != "undefined"){
			output += "myGlobal:" + myGlobal;
		}
		if (typeof oopsGlobal!= 'undefined') {
			output += "oopsGlobal: " + oopsGlobal;
		}
		console.log(output);
	}
	fun1();
	fun2();
	*/
	//Local Scope and Functions
	/*function myLocalScope(){
		var myVar= 5;
		console.log(myVar);
	}
	myLocalScope();*/

	 //Global vs. Local Scope in Functions
	 var outerWear="T-shirt";
	 function myOutfit(){
	 	var outerWear = "sweater";
	 	return outerWear;
	 }
	 //console.log(myOutfit());
	 //console.log(outerWear);
	 //Return a Value from a function with Return
	 function minusSeven(num){
	 	return num -7;
	 }
	 //console.log(minusSeven(10));
	 /*function G(string){
	 	return string + "Julie" ;
	 }
	 console.log(G("Ton"));*/
	 //Understanding Undefined Value Return from a Function
	 var sum = 0;
	 function addThree(){
	 	sum += 3;
	 }
	 //console.log(sum);
	 //Assignment with a Returned Value
	 var changed=0;
	 function change(num){
	 	return (num +3)/5;
	 }
	 //console.log(change(12));
	 //Stand in Line
	 function nextInline(arr,item){
	 arr.push(item);
	 return arr.shift;
	}
	 var testArr = [1,2,3,4,5];
	 console.log("Befor:" + JSON.stringify(testArr));
	 console.log(nextInline(testArr,6));
	 console.log("After:" + JSON.stringify(testArr));
   
   //Boolean Values
   function  welcometoBoolean() {
   	return false;
   }
   console.log(welcometoBoolean());
   //Use Conditional Logic with If Statements
   function ourTrueorFalse(isItTrue){
   	if (isItTrue){
   		return "Yes,it's true";

   	}
   	else{
   		return "No, it's false";
   	}
   }
   	function trueOrFalse(wasThatTrue){
   		if (wasThatTrue){
   			return "Yes, that was True";
   		}
   		else{
   			return "No, that was false";
   		}
   	}
   		
   	console.log(ourTrueorFalse(false));
   	console.log(trueOrFalse(true));
   