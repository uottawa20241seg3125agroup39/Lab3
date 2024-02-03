// noinspection HtmlRequiredAltAttribute,RequiredAttributes

const products = [
    {"id": 'product-1', "name": "beef pizza", "category": "normal","price": 10.00},
    {"id": 'product-2', "name": "chicken pizza", "category": "normal","price": 20.00},
    {"id": 'product-3', "name": "veg pizza", "category": "vegan","price": 30.00},
    {"id": 'product-4', "name": "mushroom pizza", "category": "vegan","price":40.00},
    {"id": 'product-5', "name": "pineapple pizza", "category": "normal","price":50.00},
    {"id": 'product-6', "name": "pepperoni pizza", "category": "normal","price":60.00},
    {"id": 'product-7', "name": "cheese pizza", "category": "gluten-free","price":70.00},
    {"id": 'product-8', "name": "pork pizza", "category": "gluten-free","price":80.00},
    {"id": 'product-9', "name": "sausage pizza", "category": "normal","price":90.00},
    {"id": 'product-10', "name": "plain pizza", "category": "normal","price":100.00},
];
function generate_product_element(product) {
//     `<img class="product-img" src="img/product/${product.id}.webp" alt="${product.name}">
// <input type="checkbox" id="${product.id}" name="${product.name}" value="${product.name}">
//             <label for="${product.id}">${product.name}</label><br>`
    let element=$('<div>');
    element.addClass('product-element');
    element.attr('id',product.id);
    let img=$('<img>');
    img.addClass('product-img');
    img.attr('src',`img/product/${product.id}.webp`);
    img.attr('alt',product.name);
    element.append(img);
    let checkbox=$('<input>');
    checkbox.attr('type','checkbox');
    let checkbox_id=product.id+'-checkbox';
    checkbox.attr('id',checkbox_id);
    checkbox.attr('name',product.name);
    checkbox.attr('value',product.name);
    element.append(checkbox);
    let label=$('<label>');
    label.addClass('product-label');
    label.attr('for',checkbox_id);
    label.text(product.name);
    element.append(label);
    // element.append($('<br>'));
    let price=$('<span>');
    price.addClass('product-price');
    price.text(`$${product.price}`);

    element.append(price)
    return element;
}

function is_selected(product_element)
{
    // console.log(product_element);
    return $(product_element).find('input').is(':checked');
}