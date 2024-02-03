function debug(){
    console.log('debugging');
    $('#product-selection').children().each(() => {
        console.log($(this).data());
    })
}