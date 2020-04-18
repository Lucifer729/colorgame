 var numOfSquares=6;
 var colors//["rgb(255, 0, 0)", "rgb(255, 255, 0)" ,"rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255 ,0, 255)"];
  			=colorPallete(numOfSquares);
var square=document.querySelectorAll(".square");
var pickedColor=pickRandomColor();
var colorDisplay=document.querySelector("#colorDisplay");	
var messageDisplay=document.querySelector("#messagedisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
// var easyBtn=document.querySelector("#easy");
// var hardBtn=document.querySelector("#hard");
var mode=document.querySelectorAll(".mode");


colorDisplay.textContent=pickedColor;



for(var i=0;i<mode.length;i++){
		mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numOfSquares=3;
		}
		else{
			numOfSquares=6;
		}
		resetAll();
	});
}

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!!";
			changeColors(pickedColor);
			reset.textContent="Play Again";
			h1.style.background=pickedColor;
		}
		else{
			this.style.backgroundColor="#000000";
			messageDisplay.textContent="Try Again";
		}

	});
}


// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSquares=3;
// 	colors=colorPallete(numOfSquares);
// 	pickedColor=pickRandomColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<square.length;i++){
// 		if(colors[i]){
// 			square[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			square[i].style.display="none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares=6;
// 	colors=colorPallete(numOfSquares);
// 	pickedColor=pickRandomColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<square.length;i++){
// 		square[i].style.backgroundColor=colors[i];
// 		square[i].style.display="block";
// 		}
// 	});
function resetAll(){
	//generate new colors
	colors=colorPallete(numOfSquares);
	//pick a new winning color
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	reset.textContent="New Colors";
	for(var i=0;i<square.length;i++){
		if(colors[i]){		
		square[i].style.display="block";
		square[i].style.backgroundColor=colors[i];
		}
		else{
			square[i].style.display="none";
		}
		messageDisplay.textContent=" ";
	}
	h1.style.backgroundColor="rgb(66, 144, 245)";
}


reset.addEventListener("click",function(){
	resetAll();
});

function changeColors(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}


function pickRandomColor(){
	var rand=Math.floor(Math.random()*colors.length);
	return colors[rand] ;
}

function colorPallete(num){
	var arr=[];
	for(var i=1;i<=num;i++){
		arr.push(generateRandomRGB());
	}
	return arr;
}

function generateRandomRGB(){
	var r=Math.floor((Math.random()*256));
	var g=Math.floor((Math.random()*256));
	var b=Math.floor((Math.random()*256));
	//return rgb(r, g, b);
	return "rgb("+r+","+" "+g+","+" "+b+")"; 
}