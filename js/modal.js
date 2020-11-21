$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
    if(navegador.indexOf("Firefox") != -1 ) {
    mozillaPresente = true;
    }
    })(navigator.userAgent);
    function darEfecto(efecto) {
    el = $('.cajainterna');
    el.addClass(efecto);
    el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
    el.removeClass(efecto);
    });
    }
    function mostrar(e) {
    $(".cajaexterna").show();
    darEfecto("bounceIn");      
    }
    function ocultar() {
    $(".cajaexterna").fadeOut("fast", function() {
    if(mozillaPresente) {
    setTimeout(function() {
    $(".cajainterna").removeClass("bounceIn");
    }, 5);
    }
    });
    }
    $("a.mostrarmodal").click(mostrar);
    $("a.cerrarmodal").click(ocultar);
    }); 
