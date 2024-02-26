let count = 1;

$('.hamburger').click(function(){
    console.log('Clicked hamburger');
    if($('#options').css('visibility') === 'visible'){
        console.log('hidden');
        $('#options').css('visibility','hidden');
    }else{
        console.log('visible');
        $('#options').css('visibility','visible');
    }
});