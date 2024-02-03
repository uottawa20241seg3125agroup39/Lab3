function onSearch(){
    console.log('search bar changed');
    filter.name=$('#search-input').val();
    updateFilter();
}
const filter={
    name: '',
    min_price: 0,
    max_price: 100
}
function updateFilter(){

}

function onMinPriceChange(){
    console.log('min price changed');
    filter.min_price=$('#minPrice').val();
    updatePriceSliderDisplay();
    updateFilter();
}

function onMaxPriceChange(){
    console.log('max price changed');
    filter.max_price=$('#maxPrice').val();
    updatePriceSliderDisplay();
    updateFilter();
}
let maxPrice=Number.MIN_SAFE_INTEGER;
let minPrice=Number.MAX_SAFE_INTEGER;


function updatePriceSliderDisplay(){
    let min_price_slider=$('#minPrice');
    let max_price_slider=$('#maxPrice');
    max_price_slider.attr('min',min_price_slider.val());
    min_price_slider.attr('max',max_price_slider.val());
    $("#min_price_display").text(min_price_slider.val());
    $("#max_price_display").text(max_price_slider.val());
}
function priceSliderInit(){
    products.forEach(product=>{
        if (product.price>maxPrice)
        {
            maxPrice=product.price;
        }
        if (product.price<minPrice)
        {
            minPrice=product.price;
        }
    })
    let min_price_slider=$('#minPrice');
    let max_price_slider=$('#maxPrice');
    min_price_slider.attr('min',minPrice);
    min_price_slider.attr('max',maxPrice);
    max_price_slider.attr('min',minPrice);
    max_price_slider.attr('max',maxPrice);
    min_price_slider.val(minPrice);
    max_price_slider.val(maxPrice);
    updatePriceSliderDisplay();
    console.log('price slider initialized');
}