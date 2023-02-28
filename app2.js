

$(document).ready(function(){
    var items = $('.slider li').length;
    var post = 1;

    for(i=1; i<=items; i++){
        $('.circle').append('<li><span class="material-symbols-outlined">track_changes</span></li>')

    }

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.circle li:first').css({'color': '#5b031e'});

    $('.circle li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    function pagination(){
        var pagPos= $(this).index() + 1;
        
        
        $('.slider li').hide();
        $('.slider li:nth-child('+ pagPos +')').fadeIn();  

        $('.circle li').css({'color':'#696c69'});
        $(this).css({'color':'#5b031e'});

        post=pagPos;
    
    }

    function nextSlider(){
        if(post >= items){
            post=1;
        }else{
            post++;
        }

        
        $('.circle li').css({'color':'#696c69'});
        $('.circle li:nth-child('+ post +')').css({'color':'#5b031e'})

        $('.slider li').hide();
        $('.slider li:nth-child('+ post +')').fadeIn();  

    }

    function prevSlider(){
        if(post <= 1){
            post = items;
        }else{
            post--;
        }

        
        $('.circle li').css({'color':'#696c69'});
        $('.circle li:nth-child('+ post +')').css({'color':'#5b031e'})

        $('.slider li').hide();
        $('.slider li:nth-child('+ post +')').fadeIn();  

    }


});