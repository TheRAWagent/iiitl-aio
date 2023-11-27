export const addProduct=(productid,price)=>{
    if(checkProduct(productid)) {return;}
    var order = JSON.parse(localStorage.getItem('orders'));
    var sum = JSON.parse(localStorage.getItem('sum'));
    if (sum == null) sum = 0;
    sum = sum + parseFloat(price)
    localStorage.setItem("sum", JSON.stringify(sum));
    if (order == null) { order = [] }
  
    if (!order.includes(productid)) {
        order.push(productid)
        localStorage.setItem("orders", JSON.stringify(order));
    }
}
export const checkProduct=(productid)=>{
    var order = JSON.parse(localStorage.getItem('orders'));
    if (order == null) { order = [] }
   
    if (order.includes(productid)) {return true;}
    return false
}
export const removeProduct=(productid, price)=>{ 
       if(!checkProduct(productid)) {return;}
       var order = JSON.parse(localStorage.getItem('orders'));
        var sum = JSON.parse(localStorage.getItem('sum'));
        if (sum == null) sum = 0;
        sum = sum - parseFloat(price)
        localStorage.setItem("sum", JSON.stringify(sum));
        if (order == null) { order = [] }
        var neworder = [];
        order.map((item) => {
            if (item != productid) {
                neworder.push(item)
            }
        })
     localStorage.setItem("orders", JSON.stringify(neworder));
}
