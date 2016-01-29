window.onload=function(){
//1.id='screen'
	//2.var sc=document.getElementById('screen');
	//3.给所有的数字加上class  num
	//4.var nums=document.getElementsByClassName('num');
	//5.给所有的代表数字的div加上一个onclick方法
	// nums[0].onclick=function(){}
	// for(var i=0;i<nums.length;i++){
	// 	nums[i].onclick=function(){
	// 		alert(this.innerHTML);
	// 	};
	// }
	//6.把上一步函数中的alert(this.innerHTML)
	// =>sc.innerHTML=this.innerHTML

	// 给运算符加上class oprator
	// var ops=document.getElementsByClassName('oprator')
	// 给等于号加上 id var equl=document.getElementById('denghao')
	// 定义两个变量 firstNumber=''  secondNumber=12;
	// 给等号添加onclick
	// 把nums[i].onclick的那个function改成
	// nums[i].onclick=function(){
	// 	firstNumber=Number(this.innerHTML);
	// }
	// equl.onclick=function(){
	// 	sc.innerHTML=firstNumber+secondNumber;
	// }
	var sc=document.getElementById('screen'),
		nums=document.getElementsByClassName('num'),
		ops=document.getElementsByClassName('oprator'),
		equl=document.getElementById('denghao'),
		cls=document.getElementById('clear'),
		main=document.getElementById('main'),
		heng=document.getElementById('heng'),
		qiehuan=document.getElementById('qiehuan'),
		kaiguan=true,cun='',cunj='',
		firstNumber='',secondNumber='',result='',
		yunsuanfuhao='',index=1,index1=1,	
		firstNumber2='',secondNumber2='',result2='',
		yunsuanfu2='',index3=1,index4=1,jc='1',jcresult='1',
		cun2='',cunj2='';
	for (var i = 0; i < nums.length; i++) {
		nums[i].onclick=function(){
			if(this.innerHTML=='.'&&firstNumber.indexOf('.')!=-1){
				return;
			}
			if(this.innerHTML=='.'&&secondNumber.indexOf('.')!=-1){
				return;
			}
			if(!yunsuanfuhao){
				if(firstNumber.length<11){
					if(this.innerHTML=='+/-'&&firstNumber.indexOf('-')==-1){
						firstNumber='-'+firstNumber;
						sc.innerHTML=firstNumber;
					}else{
						if(this.innerHTML!='+/-'){
							firstNumber+=this.innerHTML;
							sc.innerHTML=firstNumber;
						}else{
							return;
						}
					}
				}else{				
					firstNumber+=this.innerHTML;					
					sc.innerHTML=firstNumber.slice(index++);
				}
			}else{
				if(secondNumber.length<11){
					if(this.innerHTML=='+/-'&&secondNumber.indexOf('-')==-1){
						secondNumber='-'+secondNumber;
						sc.innerHTML=secondNumber;
					}else{
						if(this.innerHTML!='+/-'){
							secondNumber+=this.innerHTML;
							sc.innerHTML=secondNumber;
						}else{
							return;
						}
					}	
				}else{
					secondNumber+=this.innerHTML;
					sc.innerHTML=secondNumber.slice(index1++);
				}
			}
		}
	}

	
	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			if(!sc.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/'){
				if(result&&firstNumber==''){
					firstNumber=result;
				}
				if(yunsuanfuhao=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber)+'';
				}
				if(yunsuanfuhao=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber)+'';
				}
				if(yunsuanfuhao=='*'){
					if(secondNumber==''){secondNumber='1'};
					firstNumber=Number(firstNumber)*Number(secondNumber)+'';
				}
				if(yunsuanfuhao=='/'){
					if(secondNumber==''){secondNumber='1'};					
					firstNumber=Number(firstNumber)/Number(secondNumber)+'';
				}
				yunsuanfuhao=this.innerHTML;
				secondNumber='';
			}		
			if(this.innerHTML=='AC'){
				sc.innerHTML='';
				firstNumber='';
				secondNumber='';
				yunsuanfuhao='';
				equl='';
				result='';
			}			
		}
	}

	equl.onclick=function(){
		if(yunsuanfuhao=='+'){
			result=Number(firstNumber)+Number(secondNumber)+'';
			sc.innerHTML=result;
		}
		if(yunsuanfuhao=='-'){
			result=Number(firstNumber)-Number(secondNumber)+''+'';
			sc.innerHTML=result;
		}
		if(yunsuanfuhao=='*'){
			result=Number(firstNumber)*Number(secondNumber)+'';
			sc.innerHTML=result;
		}
		if(yunsuanfuhao=='/'){
			result=Number(firstNumber)/Number(secondNumber)+'';
			sc.innerHTML=result;
		}
		if(String(result).length>10){
			sc.innerHTML=Number(result).toExponential(5);
		}
		firstNumber='';secondNumber='';yunsuanfuhao='';equl='';

	}

	cls.onclick=function(){
		sc.innerHTML=0;
		firstNumber='';
		secondNumber='';
		yunsuanfuhaohao='';
	};



//------------------------
var numbers=document.getElementsByClassName('number'),
    screenh=document.getElementById('screen-h'),
    equl1=document.getElementById('denghao1'),
    oprator1s=document.getElementsByClassName('oprator1'),
    qingchu=document.getElementById('qingchu'),
    zhengfu=document.getElementById('zhengfu'),
    singles=document.getElementsByClassName('single');
    first='',second='',yunsuanfuhaohao1='',kaiguan=true,result=1;
    for(var i=0;i<numbers.length;i++){
    	numbers[i].onclick=function(){	
	    	if(yunsuanfuhaohao1==''){
	    		if(this.innerHTML=='.'&&first.indexOf('.')!=-1){
	    			return;
	    		}
	    		first+=this.innerHTML;
	    		screenh.innerHTML=first;
	    	}else{
	    		if(this.innerHTML=='.'&&second.indexOf('.')!=-1){
	    			return;
	    		}
	    		second+=this.innerHTML;
	    		screenh.innerHTML=second;
	    	}
    	};
    }
    for(i=0;i<oprator1s.length;i++){
    	oprator1s[i].onclick=function(){
    		yunsuanfuhaohao1=this.innerHTML.trim();
    	}
    }
    equl1.onclick=function(){
    	if(yunsuanfuhaohao1=='+'){
    		screenh.innerHTML=Number(first)+Number(second);
    	}
    	if(yunsuanfuhaohao1=='-'){
    		screenh.innerHTML=Number(first)-Number(second);
    	}
    	if(yunsuanfuhaohao1=='*'){
    		screenh.innerHTML=Number(first)*Number(second);
    	}
    	if(yunsuanfuhaohao1=='/'){
    		screenh.innerHTML=Number(first)/Number(second);
    	}
    	if(yunsuanfuhaohao1=='%'){
			screenh.innerHTML=Number(first)%Number(second);
		}
		if(yunsuanfuhaohao1=='xⁿ'){
			screenh.innerHTML=Math.pow(Number(first),Number(second));
		}
		if(yunsuanfuhaohao1=='ⁿ√'){
			screenh.innerHTML=Math.sqrt(Number(first),Number(second));
		}
		
    	
    	first=screenh.innerHTML;
	    second='';
	    yunsuanfuhaohao1='';
    }
    qingchu.onclick=function(){
    	screenh.innerHTML=0;
    	first='';
	    second='';
	    yunsuanfuhaohao1='';
    }
    zhengfu.onclick=function(){
    	if(kaiguan){
    		screenh.innerHTML=-screenh.innerHTML;
    		kaiguan=false;
    	}else{
    		screenh.innerHTML=-screenh.innerHTML;
    		kaiguan=true;
    	}
    }


    for(i=0;i<singles.length;i++){
    	singles[i].onclick=function(){
    		if(this.innerHTML=='x-¹'){
    			screenh.innerHTML=Math.pow(Number(first),-1);
    		}
    		if(this.innerHTML=='x²'){
    			screenh.innerHTML=Math.pow(Number(first),2);
    		}
    		if(this.innerHTML=='x³'){
    			screenh.innerHTML=Math.pow(Number(first),3);
    		}
    		if(this.innerHTML=='x!'){
    			for(var i=1;i<=Number(first);i++){
    				result*=i;
    			}
    			screenh.innerHTML=result;
    		}
    		if(this.innerHTML=='√'){
    			screenh.innerHTML=Math.sqrt(Number(first),2);
    		}
    		if(this.innerHTML=='log'){
    			screenh.innerHTML=Math.log(Number(first));
    		}
    		if(this.innerHTML=='sin'){
    			screenh.innerHTML=Math.sin(Number(first));
    		}
    		if(this.innerHTML=='cos'){
    			screenh.innerHTML=Math.cos(Number(first));
    		}
    		if(this.innerHTML=='tan'){
    			screenh.innerHTML=Math.tan(Number(first));
    		}
    		if(this.innerHTML=='sinh'){
    			screenh.innerHTML=Math.sinh(Number(first));
    		}
    		if(this.innerHTML=='cosh'){
    			screenh.innerHTML=Math.cosh(Number(first));
    		}
    		if(this.innerHTML=='tanh'){
    			screenh.innerHTML=Math.tanh(Number(first));
    		}
    		if(this.innerHTML=='eⁿ'){
    			screenh.innerHTML=Math.pow(Math.E,Number(first));
    		}
    		if(this.innerHTML=='π'){
    			screenh.innerHTML=Math.PI;
    		}
    		if(this.innerHTML=='EE'){
    			screenh.innerHTML=Math.E;
    		}
    		first=screenh.innerHTML;

    	}
    }
    

qiehuan.onclick=function(){
	if(kaiguan){
		main.style.display='none';
		heng.style.display='block';
		kaiguan=false;
	}else{
		heng.style.display='none';
		main.style.display='block';
		kaiguan=true;
	}
}



};

