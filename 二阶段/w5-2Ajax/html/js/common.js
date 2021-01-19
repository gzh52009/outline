// (function(){
    let cartQty = document.querySelector('.cart-qty');
    
    // Cookie方案：获取原来的购物车数据
    //  let cartlist = Cookie.get('cartlist') || [];
    //  cartQty.innerText = cartlist.length;
    
    // WebStorage方案：
    let cartlist = localStorage.getItem('cartlist');
    try{
        cartlist = JSON.parse(cartlist) || [];
    }catch(err){
        cartlist = [];
    }
    console.log('cartlist',cartlist);
    cartQty.innerText = cartlist.length;

// })();