	 window.onload=function(){
		var container=document.getElementById('container-box');
		var list=document.getElementById('list');
		var buttons=document.getElementById('buttons-box').getElementsByTagName('span');
		var perv=document.getElementById('prev');
		var next=document.getElementById('next');
		var index=1;
		var animated=false;
		var timer;
		
		
		function showButton(){
			for(var i=0;i<buttons.length;i++){
				if(buttons[i].className=='on'){
					buttons[i].className='';
					break;
				}
			}
			buttons[index-1].className='on';
		}
		
		function animate(offset){
			animated=true;
			var newLeft=parseInt(list.style.left)+offset;
			var time=500;
			var interval=20;
			var speed=offset/(time/interval);
			
			function go(){
				if( (speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)<newLeft))
				{
					list.style.left=parseInt(list.style.left)+speed+'px';
					setTimeout(go,interval);
				}
				else{
					animated=false  ;
					list.style.left=newLeft+'px';
					if(newLeft>-1000){
						list.style.left=-5000+'px';
					}
					if(newLeft<-5000){
						list.style.left=-1000+'px';
					}
				}
					
			}	
		go();
	}
	
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},3000)
	}
	
	function stop(){
		clearInterval(timer);
	}
	
		
		next.onclick=function(){
		if(index==5){
			index=1;
		}
		else{
			index+=1;
		}
		
			showButton();
			if(!animated){
				animate(-1000);
			}
		}
		
		perv.onclick=function(){
		if(index==1){
			index=5;
		}
		else{
			index-=1;
		}
			showButton();
			if(!animated){
				animate(1000);
			}
		}
		
		for(var i=0;i<buttons.length;i++){
			buttons[i].onclick=function(){
				var myIndex=parseInt(this.getAttribute('index'));
				var offset=-1000*(myIndex-index);				
				index=myIndex;
				showButton();
				if(!animated){
					animate(offset);
				}
			}
		}
		
		container.onmouseover=stop;
		container.onmouseout=play;
		
		play();
	}