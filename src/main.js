const products = [
  {id: 1, title: 'Hazardous teen 1', price: 2000, path: 'img/hazardous_teen_178x200.jpg'},
  {id: 2, title: 'Hazardous teen 2', price: 20, path: 'img/hazardous_teen_178x200.jpg'},
  {id: 3, title: 'Hazardous teen 3', price: 200, path: 'img/hazardous_teen_178x200.jpg'},
  {id: 4, title: 'Hazardous teen 4', price: 50, path: 'img/hazardous_teen_178x200.jpg'}
]

const renderProduct = (product) => {
  return `<div class="product-card">
                <h3 class="product-card__title">${product.title}</h3>
                <p class="product-card__tally">
                  Price: <span class="product-card__price">${product.price}</span> &#8364;
                </p>
                <img class="product-card__img" src=${product.path} width="178" height="200" alt="Product picture">
                <button class="product-card__buy-btn">Купить</button>
                <p class="product-card__tally">
                  Article: <span class="product-card__id">${product.id}</span>
                </p>
            </div>`
}

const renderCatalogue = catalogue => {
    const productsCatalogue = catalogue.map(product => renderProduct(product))
    document.querySelector('.catalogue').innerHTML = productsCatalogue.join('')
}

renderCatalogue(products)
