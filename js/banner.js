var index=1;
var time=null;
	

$(function(){
	

//淡入淡出轮播图	

	time=setInterval(changeImg,2000);
	//鼠标一上去停止切换
	$(".l").hover(function(){
		clearInterval(time);
	},function(){
		
		time=setInterval(changeImg,2000);
	});
	//鼠标放到按钮，调到对应的图片
	
	$(".btnDiV span").mouseenter(function(){
		//console.log("bbb");
	  index=$(this).index();
	  clearInterval(time);
	  changeImg();

	});
	
	$("#prev").click(function(){
		//console.log("aaa");
		//index=$(this).index()-1;
		clearInterval(time);
		changeImgprev();
		
	});
    $("#next").click(function(){
		//index=$(this).index()+1;
		clearInterval(time);
		changeImg();
		
	});

});


	function changeImg(){
	index++;
      $(".l li").eq(index-1).fadeIn(500);
      $(".l li").eq(index-1).siblings().fadeOut(500);
      if(index>4){index=0;}
	//同时改变按钮的颜色
	$(".btnDiV span").eq(index-1).css({background:"blue"});
	$(".btnDiV span").eq(index-1).siblings().css({background:"grey"});
	}
	
 function changeImgprev(){
	index--;
      $(".l li").eq(index-1).fadeIn(500);
      $(".l li").eq(index-1).siblings().fadeOut(500);
      if(index<0){index=4;}
	//同时改变按钮的颜色
	$(".btnDiV span").eq(index-1).css({background:"blue"});
	$(".btnDiV span").eq(index-1).siblings().css({background:"grey"});
	}





	










	
	
