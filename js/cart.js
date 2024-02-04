let cart_element;
let cart_subtotal;

function updateSubTotal() {
    let subtotal = 0;
    cart_element.children().each(function () {
        let product = $(this).data('product');
        subtotal += product.price;
    });
    cart_subtotal.text(subtotal);
}

function cart_init() {
    cart_element = $('#cart-selection');
    cart_subtotal = $('#cart-subtotal-num');
    // Observer code from Copilot


// 观察器的配置（需要观察什么变动）
    const config = {childList: true};

// 当观察到变动时执行的回调函数
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                updateSubTotal();
            }
        }
    };

// 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
    observer.observe(cart_element[0], config);

// 你也可以随时停止观察
// observer.disconnect();
}