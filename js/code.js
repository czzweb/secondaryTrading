// JavaScript Document
window.onload=function(){
	var code=document.getElementById('code');
	code.onclick=function(){
		this.src='code.php?tm='+Math.random();
	};
	
	
	//表单验证
	var fm=document.getElementsByTagName('form')[0];
	fm.onsubmit=function(){
		//能用客户端验证的尽量用客户端
		//用户名验证
		if(fm.username.value.length<2||fm.username.value.length>20){
			alert('用户名不得小于2位或者大于20位');
			fm.username.value=''; //清空
			fm.username.focus();  //将焦点移至表单字段
			return false;
		}
		if(/[<>\'\"/ / ]/.test(fm.username.value)){
			alert('用户名不得包含非法字符！');
			fm.username.value=''; //清空
			fm.username.focus();  //将焦点移至表单字段
			return false;
		}
		//密码验证
		if(fm.password.value.length<6){
			alert('密码不得小于6位！');
			fm.password.value=''; //清空
			fm.password.focus();  //将焦点移至表单字段
			return false;
		}
		if(fm.password.value!=fm.notpwd.value){
			alert('两密码次输入不一致！');
			fm.notpwd.value=''; //清空
			fm.notpwd.focus();  //将焦点移至表单字段
			return false;
		}
		
		//邮箱验证
		if(!/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(fm.email.value)){
			alert('邮件格式不正确！');
			fm.email.value=''; //清空
			fm.email.focus();  //将焦点移至表单字段
			return false;
		}
		
	}
		
}