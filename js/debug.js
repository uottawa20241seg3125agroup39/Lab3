function debug(){
    console.log('debugging');
    $('#product-selection').children().each(function() {
        console.log($(this).data());
    })
}