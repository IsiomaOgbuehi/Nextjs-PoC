export function FilterPrice(products, categories, price) {
    let newArray = [];

    if(categories.length > 0) {
        return products.filter(product => categories.includes(product.data.category)).filter((val) => val.data.price >= price.min && val.data.price <= price.max);
    }
    else if (price === '' && categories.length === 0){
        return products;
    }
    else {
        return products.filter((val) => (val.data.price >= price.min) && (val.data.price <= price.max));

    }

}