function CorItensLista() {
    $(".ItemLista").each(function() {
        var texto = $(this).clone().children().remove().end().text();
        //console.log(texto);
        var classe = "ItemLista1";

        var j = 0;
        if(texto.length > 2) {
            j = ((texto.charCodeAt(0)+texto.charCodeAt((texto.length/2).toFixed(0))+texto.charCodeAt(texto.length-1)+texto.length) % 26)+1;
        }

        classe = "ItemLista"+j;
    
        $(this).addClass(classe);
    });
    //console.log("CorItensLista");
}

$(function() {
    CorItensLista();
})