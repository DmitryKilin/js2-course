//  LESSON 1.
//
// const products = [
//   {id: 1, title: 'Hazardous teen 1', price: 2000, path: 'img/hazardous_teen_178x200.jpg'},
//   {id: 2, title: 'Hazardous teen 2', price: 20, path: 'img/hazardous_teen_178x200.jpg'},
//   {id: 3, title: 'Hazardous teen 3', price: 200, path: 'img/hazardous_teen_178x200.jpg'},
//   {id: 4, title: 'Hazardous teen 4', price: 50, path: 'img/hazardous_teen_178x200.jpg'}
// ]

// const renderProduct = (product) => {
//   return `<div class="product-card">
//                 <h3 class="product-card__title">${product.title}</h3>
//                 <p class="product-card__tally">
//                   Price: <span class="product-card__price">${product.price}</span> &#8364;
//                 </p>
//                 <img class="product-card__img" src=${product.path} width="178" height="200" alt="Product picture">
//                 <button class="product-card__buy-btn">Купить</button>
//                 <p class="product-card__tally">
//                   Article: <span class="product-card__id">${product.id}</span>
//                 </p>
//             </div>`
// }

// const renderCatalogue = catalogue => {
//     const productsCatalogue = catalogue.map(product => renderProduct(product))
//     document.querySelector('.catalogue').innerHTML = productsCatalogue.join('')
// }
// renderCatalogue(products)



// LESSON 2.
class Product {
  constructor (product) {
    if (this._checkProduct(product)) {
      Object.assign(this, product)
    }
  }
  get total() {
    return this.price*this.count
  }

  hasSameArticle(product) {
    return this.article === product.article
  }

  hasSamePrice(product) {
    return this.price === product.price
  }

  //protected
  _checkProduct(product = this) {
    if (!product.article) {
      throw "The instance of Product hasn't the 'article' property!"
    }
    if (!(product.count || product.count === 0)) {
      throw "The instance of Product hasn't the 'count' property!"
    }
    if (!(product.price || product.price === 0)) {
      throw "The instance of Product hasn't the 'price' property!"
    }
    return true
  }
}

class ProductList extends Array {
  push() {
    function _addProduct (product) {
      let findedProductListItem =
        this.find(item => item.hasSameArticle(product) && item.hasSamePrice(product))

      if (findedProductListItem) {
        findedProductListItem.count += product.count
      } else {
        Array.prototype.push.call(this, new Product(product))
      }
    }

    let filteredArgments = this.filter.call(arguments,
                              product => product.constructor.name === 'Product')

    filteredArgments.forEach(_addProduct, this)
  }

  get total() {
    return this.reduce((total, productListItem) => total += productListItem.total, 0)
  }

}
