$(function(){
	$(window).scroll(function(){
		console.log(window.scrollY);
		if(window.scrollY > 50){
			$('.home nav').addClass('scrolled');
		}else{
			$('.home nav').removeClass('scrolled');
		}
	})

	$('.slider-box').bind('mouseover',function(){
		$('.slider-prev').addClass('show-left');
		$('.slider-next').addClass('show-right');
	})
	$('.slider-box').bind('mouseleave',function(){
		$('.slider-prev').removeClass('show-left');
		$('.slider-next').removeClass('show-right');
	})
    var indexShow=0;
    var index = 0;
    var i=0;
    var m=0;
    var sliders=$('.slider-box li');
    var sliderBtns = $('.slider-change div');
    //获取正在展示图片的index
	function indexShowing(){
        for(i=0;i<sliders.length;i++){
        	if($(sliders[i]).is(':visible')){
        		indexShow = i;
        	}
        }
	}
    //点击左右切换键可切换图片
	function clickSlider(num){
		indexShowing();
        if(num){
        	if(indexShow >= 2){
                m = 0;
        	}else{
        		m++;
        	}
        }else{
        	if(indexShow <= 0){
        		m = 2;
        	}else{
        		m--;
        	}
        }
        index = m;
        $(sliders[index]).fadeIn(1000).siblings().hide();
        $(sliderBtns[index]).addClass('btn-active').siblings().removeClass('btn-active');
	}

	//获取元素index
	function getIndex(obj,value){
        for(i=0;i<obj.length;i++){
        	if(obj[i] == value){
        		return i;
        	}
        }
	}
	//幻灯片效果
    function changePic(){
    	m = m <=2 ? m:0;
    	index = getIndex(sliderBtns,this) || m;
    	m++;
    	sliderBtns.removeClass('btn-active');
    	$(sliderBtns[index]).addClass('btn-active');
    	sliders.fadeOut();
    	$(sliders[index]).fadeIn(1000);
    }
	sliderBtns.bind('click',changePic);
	window.setInterval(changePic,5000);

	$('.slider-prev').bind('click',function(){
		clickSlider(0);
	})
	$('.slider-next').bind('click',function(){
		clickSlider(1);
	})

	$('.works-pic').bind('mouseover',function(){
		$(this).children('.pic-title').fadeIn(200);
	})
	$('.works-pic').bind('mouseleave',function(){
		$(this).children('.pic-title').fadeOut(200);
	})
})