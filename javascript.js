$(document).ready(function(){

    $("#boton").click(function(){
        $("#contenedor").toggleClass("modoOscuro");
        if($("#contenedor").hasClass("modoOscuro")){

            $("#contenedor").css({"background":"#232020"});
            $("body").css({"color":"white"});
            $(".tarjeta").css({"box-shadow": "0 2px 6px rgba(90, 87, 88, 0.15)"});
            $(".producto").css({"box-shadow": "0 2px 6px rgba(90, 87, 88, 0.15)"});
            $("#boton").removeClass("bx bxs-moon");
            $("#boton").addClass("bx bxs-sun");
            

        }
        else{

            $("#contenedor").css({"background":"white"});
            $("body").css({"color":"black"});
            $(".tarjeta").css({"box-shadow": "0 2px 6px rgba(65,11,16,.15)"});
            $(".producto").css({"box-shadow": "0 2px 6px rgba(65,11,16,.15)"});
            $("#boton").removeClass("bx bxs-sun");
            $("#boton").addClass("bx bxs-moon");
        
            
        }
    })
        


});