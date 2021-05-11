export function FilterCategory(products, categories, price) {

    if(price !== '' && categories.length > 0){
        const arr = products.filter(product => categories.includes(product.data.category)).filter((val) => val.data.price >= price.min && val.data.price <= price.max);
        return arr;
    }
    else if (price === '' && categories.length > 0){
        return products.filter(product => categories.includes(product.data.category));
    }
   else  if (categories.length === 0 && price === ''){
        return products
    }
    else if (categories.length === 0 && price !== '') {
        return products.filter((val) => (val.data.price >= price.min) && (val.data.price <= price.max));
    }
    else{
        return products;
    }

}