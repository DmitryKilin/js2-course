const fs = require('fs');
const moment = require('moment');

const logFilePath = 'server/db/stats.json'


let add = (cart, req) => {
    cart.contents.push(req.body);
    logCart(req.body.product_name)
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    logCart(find.product_name)
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity -= req.body.quantity;
    logCart(find.product_name)
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove
};


// private
function logCart(product_name) {
    let logString = '';
    logString = product_name + ' ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '\r\n';
    fs.appendFile(logFilePath, logString, (err) => { console.log(err) })
}
