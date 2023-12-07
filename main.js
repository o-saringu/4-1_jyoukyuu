function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = three.value.replace(/\s+/g, "");
	five.value = three.value.replace(/\s+/g, "");
	
	if (one.value == "intw=width/2"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：int w=width/2";
	}

	if (two.value == "inth=height/2"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：int h=height/2";
	}

	if (three.value == "ellipse(3*x,y,w,h);"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：ellipse(3*x, y, w, h);";
	}

	if (four.value == "ellipse(x,3*y,w,h);"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：ellipse(x, 3*y, w, h);";
	}
	
	if (five.value == "ellipse(3*x,3*y,w,h);"){
		text5.innerHTML = "正解";
	}else{
		text5.innerHTML = "不正解　解答：ellipse(3*x, 3*y, w, h);";
	}
	
}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

//解答欄5
var textBox5 = document.getElementById("five");
const text5 = document.getElementById("text5");





let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);