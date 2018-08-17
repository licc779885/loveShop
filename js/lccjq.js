$(function(){
	//等比设置图片高度
	function jq_img(ww,hh,id){
		var jq_img=$(id)
			img_w=$(jq_img).width()
			height=img_w*hh/ww
		jq_img.parent('.img').css('height',height)
	}
	//页面加载执行
    $('body').each(function(){
		$('.jq_ul_img').each(function(){
    		jq_img(246,185,'.jq_img');
   		})
    	$('.jq_ul_hor').each(function(){
    		jq_img(262,362,'.jq_img2');
   		})
    	$('.jq_gs_ul').each(function(){
    		jq_img(297,160,'.jq_img');
   		})
    })
    //页面大小改变执行
	$(window).resize(function() {
    	$('.jq_ul_img').each(function(){
    		jq_img(246,185,'.jq_img');
   		})
    	$('.jq_ul_hor').each(function(){
    		jq_img(262,362,'.jq_img2');
   		})
    	$('.jq_gs_ul').each(function(){
    		jq_img(297,160,'.jq_img');
   		})
	})
	//导航右侧
	$('body').click(function(){
		if($(this).parents('body').attr('class')=='sidr-open sidr-right-open'){
			$('#sidr-right').animate({'right':-260},200)
			$('body').animate({'right':-0},200)
		}else{}
	})
	//导航
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right'
    })
    //banner
	$('#single-item').slick({
		autoplay: true,
		arrows: false,
		dots: true,
    })
    //生产研发
	$('#yanfa').slick({
		autoplay: true,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
    })
	// TAB切换
	$('.jq_tab a').click(function(){
		var num=$(this).index()
		$(this).parents('.jq_tab').children('a').removeClass('hover')
		$(this).addClass('hover')
		var jq_ul=$(this).parents('.jq_tab').siblings('.jq_ul')
		jq_ul.children('.jq_li').hide()
		jq_ul.children('.jq_li').eq(num).show()
	})
	// 右侧导航
	$('.jq_num li .a').click(function(){
		$('.jq_num li div').hide()
		$(this).next('div').show()
	})
	// 列表页，滚动到底部加载内容
	var totalheight = 0;
	var data='<li>输出数据</li>'
		data=data+data
	function loadData(){ 
    	totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop())
    	if ($(document).height() <= totalheight){
        	//加载数据
        	$('#loda').append(data)
        	jq_img(246,185);
    	}
	} 
	$(window).scroll( function() { 
    	loadData()
	})

	
	
})
// 返回顶部
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数向右滚动的像素数，第二个参数向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',0);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，
	document.body.scrollTop;
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}


