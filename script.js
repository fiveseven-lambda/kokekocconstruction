function change(){
	first = document.getElementById("first").value;
	second = document.getElementById("second").value;
	third = document.getElementById("third").value;
	fourth = document.getElementById("fourth").value;

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
		+ first + second + "ｰｰｰｰ" + third + "!!!" + fourth + fourth + fourth + fourth + fourth
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
		+ first + second + "ｰｰｰｰ" + third + "!!!" + fourth + fourth + fourth + fourth + fourth
		+ first + second + third + first + third + third + first + "ｰｰｰｰ!!!!!!" + fourth.repeat(11);
}
