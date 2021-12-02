var NumQuadrados = 6;
var cores = generateRandomcores(NumQuadrados);
var quadrados = document.querySelectorAll(".square");
var EscolhaCor = randomColorG();
var MostraCor = document.querySelector("#MostraCor");
var MostraMgs = document.querySelector("#message");
var h1 = document.querySelector("h1");
var BotaoResetar = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	NumQuadrados = 3;
	cores = generateRandomcores(NumQuadrados);
	EscolhaCor = randomColorG();
	MostraCor.textContent = EscolhaCor;
	for(var i = 0; i < quadrados.length; i++){
		if(cores[i]){
			quadrados[i].style.background = cores[i];
		} else {
			quadrados[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	NumQuadrados = 6;
	cores = generateRandomcores(NumQuadrados);
	EscolhaCor = randomColorG();
	MostraCor.textContent = EscolhaCor;
	for(var i = 0; i < quadrados.length; i++){
		quadrados[i].style.backgroundColor = cores[i];
		quadrados[i].style.display = "block";
	}
});

BotaoResetar.addEventListener("click", function(){
	cores = generateRandomcores(NumQuadrados);
	EscolhaCor = randomColorG();
	MostraCor.textContent = EscolhaCor;
	BotaoResetar.textContent = "New cores";
	MostraMgs.textContent = "";
	for(var i = 0; i < quadrados.length; i++){
		quadrados[i].style.backgroundColor = cores[i];
	}
	h1.style.background = "steelblue"; 
})

MostraCor.textContent = EscolhaCor;

for(var i = 0; i < quadrados.length; i++) {
	quadrados[i].style.backgroundColor = cores[i];
	quadrados[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, EscolhaCor);
		if(clickedColor === EscolhaCor){
			MostraMgs.textContent = "Correct!";
			BotaoResetar.textContent = "Play Again?";
			changecores(clickedColor);
			h1.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "#232323";
			MostraMgs.textContent = "Try Again";
		}
		});
}

function changecores(colorz){
	for(var i = 0; i < quadrados.length; i++){
		quadrados[i].style.background = colorz;
	}	
}

function randomColorG(){
	var random = Math.floor(Math.random() * cores.length)
	return cores[random];
}

function generateRandomcores(genColor){
	var arr = []
	for(var i = 0; i < genColor; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}