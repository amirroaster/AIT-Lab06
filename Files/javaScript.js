function homeFunction() {
	document.getElementById("nav1").style.background = "black";
	document.getElementById("nav1").style.color = "#e5e5e5";
	document.getElementById("nav2").style.background = "#e5e5e5";
	document.getElementById("nav2").style.color = "black";
	document.getElementById("nav3").style.background = "#e5e5e5";
	document.getElementById("nav3").style.color = "black";
	document.getElementById("homeArticle").style.display = "block";
	document.getElementsByClassName("articles")[0].style.display = 'none';
	document.getElementsByClassName("articles")[1].style.display = 'none';
	document.getElementsByClassName("articles")[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "none";
}
function articlesFunction() {
	document.getElementById("nav1").style.background = "#e5e5e5";
	document.getElementById("nav1").style.color = "black";
	document.getElementById("nav2").style.background = "black";
	document.getElementById("nav2").style.color = "#e5e5e5";
	document.getElementById("nav3").style.background = "#e5e5e5";
	document.getElementById("nav3").style.color = "black";
    document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName("articles")[0].style.display = "block";
	document.getElementsByClassName("articles")[1].style.display = "block";
	document.getElementsByClassName("articles")[2].style.display = "block";
	document.getElementById("aboutArticle").style.display = "none";
}
function aboutFunction() {
	document.getElementById("nav1").style.background = "#e5e5e5";
	document.getElementById("nav1").style.color = "black";
	document.getElementById("nav2").style.background = "#e5e5e5";
	document.getElementById("nav2").style.color = "black";
	document.getElementById("nav3").style.background = "black";
	document.getElementById("nav3").style.color = "#e5e5e5";
    document.getElementById("homeArticle").style.display = "none";
	document.getElementsByClassName('articles')[0].style.display = 'none';
	document.getElementsByClassName('articles')[1].style.display = 'none';
	document.getElementsByClassName('articles')[2].style.display = 'none';
	document.getElementById("aboutArticle").style.display = "block";
}
