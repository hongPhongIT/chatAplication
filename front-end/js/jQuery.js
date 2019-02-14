$('.crossRotate').on('click', function(){
    $(this).toggleClass('active');
});

$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
});