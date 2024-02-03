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

function updatePriceSliderDisplay(){

}