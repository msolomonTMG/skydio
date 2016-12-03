var products = new Vue({
  el: '#products',
  data: {
    products: []
  }
})
myStore.Products.list(function(resp) {
  resp.data.forEach(product => {
    product.description = product.description.split('<p>')[1].split('</p>')[0]
    products.products.push(product)
  })
},function(error) {
  console.log(error);
});
