function change(){
	first = document.getElementById("first").value;
	second = document.getElementById("second").value;
	third = document.getElementById("third").value;
	fourth = document.getElementById("fourth").value;
	fifth = document.getElementById("fifth").value;
	sixth = document.getElementById("sixth").value;

	document.getElementById("dest").innerHTML
		= first + third + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + second + third + first + third + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + second + third + first + third + fourth + fourth + fourth
		+ first + second + fifth + fifth + fifth + fifth + third + sixth + sixth + sixth + fourth + fourth + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + second + third + first + third + fourth + fourth + fourth
		+ first + third + fourth + fourth
		+ first + third + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + third + fourth + fourth + fourth
		+ first + second + third + fourth + fourth + fourth
		+ first + second + third + first + third + fourth + fourth + fourth
		+ first + second + fifth + fifth + fifth + fifth + third + sixth + sixth + sixth + fourth + fourth + fourth + fourth + fourth
		+ first + second + third + first + third + third + first + fifth + fifth + fifth + fifth + sixth + sixth + sixth + sixth + sixth + sixth + fourth.repeat(11);
}

function copied(){
	document.getElementById("copied").innerHTML = "コピーされました";
}

function copied_clear(){
	document.getElementById("copied").innerHTML = "";
}

function copy(){
	text = document.getElementById("dest").innerHTML;
	navigator.clipboard.writeText(text).then(copied);
}
