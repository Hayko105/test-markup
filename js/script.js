$(document).ready(function () {    
    $('.header_menu .menu_burger').on('click', function(e){
        e.preventDefault();
        
        $('.header_menu .header_menu_ul').toggleClass('mobil_drop');
    });
});