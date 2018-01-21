$(function(){
    const menu = $('#top-menu');
    const menuIcon = $('#menu-icon');
    menu.hide();

    menuIcon.click(function(){
        menu.slideToggle();
    });

});