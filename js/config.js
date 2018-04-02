$(function(){
    var action = setInterval(slideGo, 2000);

    $('.depoimento_slide_nav.go').click(function(){
        clearInterval(action);
        slideGo();
    });
    
    $('.depoimento_slide_nav.back').click(function(){
        clearInterval(action);
        slideBack();
    });

    function slideGo(){
        //verificando se ha um proximo elemento
        if($('.depoimento_slide_item.ativo').next().size()){
            $('.depoimento_slide_item.ativo').fadeOut(400, function(){
                $(this).removeClass('ativo').next().fadeIn().addClass('ativo');
            });
        }else{
            $('.depoimento_slide_item.ativo').fadeOut(400, function(){
                $('.depoimento_slide_item').removeClass('ativo');
                $('.depoimento_slide_item:eq(0)').fadeIn().addClass('ativo');
            });
        }
    }

    function slideBack(){
        if($('.depoimento_slide_item.ativo').index() > 1){
            $('.depoimento_slide_item.ativo').fadeOut(400, function(){
                $(this).removeClass('ativo').prev().fadeIn().addClass('ativo');
            });
        }else{
            $('.depoimento_slide_item.ativo').fadeOut(400, function(){
                $('.depoimento_slide_item').removeClass('ativo');
                $('.depoimento_slide_item:last-of-type').fadeIn().addClass('ativo');
            });
        }
    }
});