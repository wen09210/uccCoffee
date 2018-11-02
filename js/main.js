
// $(document).on('hidden.bs.modal','#CoffeeDraw', function(){
//   $('body').css('overflow-y','auto');
// });

//解決ios虛擬鍵盤問題
$(document).ready(function(){
        // iOS check...ugly but necessary
if( navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
  $('#CoffeeDraw').on('show.bs.modal', function() {
    setTimeout(function () {
      scrollLocation = $(window).scrollTop();
      $('#CoffeeDraw')
          .addClass('modal-ios')
          .height($(window).height())
          .css({'margin-top': scrollLocation + 'px'});
    }, 0);
  });

  $('input').on('blur', function(){
    setTimeout(function() {
      // This causes iOS to refresh, fixes problems when virtual keyboard closes
      $(window).scrollLeft(0);

      var $focused = $(':focus');
      // Needed in case user clicks directly from one input to another
      if(!$focused.is('input')) {
        // Otherwise reset the scoll to the top of the modal
        $(window).scrollTop(scrollLocation);
      }
    }, 0);
  })
  $('textarea').on('blur', function(){
    setTimeout(function() {
      // This causes iOS to refresh, fixes problems when virtual keyboard closes
      $(window).scrollLeft(0);

      var $focused = $(':focus');
      // Needed in case user clicks directly from one input to another
      if(!$focused.is('textarea')) {
        // Otherwise reset the scoll to the top of the modal
        $(window).scrollTop(scrollLocation);
      }
    }, 0);
  })
}
}); 
// **//

$(function(){
	
	var clipboard = new Clipboard('.copya');

clipboard.on('success', function(e) {
     swal({   
            imageUrl: 'http://event.ucc-coffee.com.tw/img/teach.gif',
            imageWidth: 320,
            imageHeight: 320,
            title: '<div>已為您複製<div style="color:rgb(48, 133, 214);">"#嗜黑者的莓果想像"</div></div>',
            html: '<div style="text-align:left;margin:0 auto;width:300px;color:#cf0526">1.選取照片'+'<br>'+'2.在臉書文字欄按貼上'+'<br>'+'3.打卡，並上傳照片即可完成'+'<br>'+'<sapn style="color:#999;font-size:12px;">參加完別忘了還有其他活動喔!</span></div>',
             confirmButtonText:
              '立刻前往臉書貼文!'
          }
          ).then(function () {
          	   window.open('https://goo.gl/3KQINT');
                   fbq('track', 'CompleteRegistration', {value: 1.00,currency: 'NTD'});
                   ga('send', 'event', '打卡', '活動二(打卡送好杯)', '參加活動');
          	});

 
});
	var N = 1; //宣告變數，記錄一開始是在第一張。
	var TT = 0; //宣告變數，給計時器使用。
	
	//設定圖片輪播的動作
	function GOGO(){
		if(N<3){
			N+=1;
		}
		document.getElementById("coffee_can").src="img/sec01/can" + N + ".png";	
		TT = setTimeout(GOGO,100); //設定計時器
	}
  $(function(){
      GOGO(); 
  })

	



	/*變換圖片*/
	if($(window).innerWidth() > 481) {
         $(".banner_title>img").attr("src", "img/sec01/main_title.png");
     } else {
         $(".banner_title>img").attr("src", "img/sec01/main_tiltle_mobile.png");
     }


     // 滑動區塊 //
     var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); 
        $('#see_more').click(function(){
        
    $("html, body").animate({ scrollTop:  $(".section2").offset().top }, "slow");
        return false;
    });
        $('#join_btn').click(function(){
       
    $("html, body").animate({ scrollTop:  $(".section4").offset().top }, "slow");
        return false;
    });
       $('.clicka1').click(function(){
  
    $("html, body").animate({ scrollTop:  $(".section1").offset().top }, "slow");
        return false;
    });
        $('.clicka4').click(function(){
 
    $("html, body").animate({ scrollTop:  $(".section4").offset().top }, "slow");
        return false;
    });
         $('.clicka5').click(function(){
  
    $("html, body").animate({ scrollTop:  $(".section5").offset().top }, "slow");
        return false;
    });
      $('.clicka6').click(function(){
 
    $("html, body").animate({ scrollTop:  $(".section6").offset().top }, "slow");
        return false;
    });
      $('.clicka7').click(function(){

    $("html, body").animate({ scrollTop:  $(".section7").offset().top }, "slow");
        return false;
    });
       $('.clicka3').click(function(){
 
    $("html, body").animate({ scrollTop:  $(".section3").offset().top }, "slow");
        return false;
    });
      $('.act_label').click(function(){
   
    $("html, body").animate({ scrollTop:  $(".section6").offset().top }, "slow");
        return false;
    });
     
     


$('#notice_toggle').click(function(){
    $( "#notice_toggle" ).toggleClass( "open" );
    $(".notice_content_more").slideToggle();
  });


})

/*視窗滾動出現推薦*/
   $(window).scroll(function() {
　　var top_position = $(this).scrollTop()

　　if ( top_position > 300){
　　　　// Let the item move with scrolling.
　　　　$(".act_label").slideDown(500);
　　}else {
　　　　// Reset the position to default.
　　　　$(".act_label").slideUp(500);
　　}

});
	