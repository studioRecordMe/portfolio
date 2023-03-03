$(document).ready(function(){

    // 팝업창
    $('div.guide_box').click(function(){
        $('div#popup').fadeIn();
    });
    $('div#popup div.guide button').click(function(){
        $('div#popup').fadeOut();
    });
    // 모달 레이어 팝업창
    $('div.video_box').click(function(){
        $('div#modal_popup').fadeIn();
    });
    $('div#modal_popup > div span').click(function(){
        $('div#modal_popup').fadeOut();
    });
    

    // 슬라이드
    setInterval(function(){
        $('div.slide ul').animate({
            left : "-1920px"
        }, 1000, function(){
            $('div.slide ul').append($('div.slide ul li').eq(0));
            $('div.slide ul').css({ left : 0 });
        });
    }, 8000);


    //슬라이드변환박스
    setInterval(function(){
        let now_num = $('div.slideChangeBox ul li').eq(0);
        let next_num = $('div.slideChangeBox ul li').eq(1);
        
        next_num.addClass('active').css({opacity : 0}).animate({opacity : 1}, 1000, function(){
            $('div.slideChangeBox ul').append(now_num);
            now_num.removeClass('active');
        });

    }, 8000);

});