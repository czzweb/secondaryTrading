// JavaScript Document
window.onload=function(){
	var oUp=document.getElementById('upload');
	oUp.onclick=function(){
		centerWindow('upimg.php','up','100','400');
	}
}
function centerWindow(url,name,height,width){
	var left=(screen.width-width)/2;
	var top=(screen.height-height)/2;
	window.open(url,name,'height='+height+',width='+width+',top='+top+',left='+left);
}
	