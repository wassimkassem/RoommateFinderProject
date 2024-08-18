
export class ProductService {
    getProducts() {
        return fetch('data/listings.json').then(res => res.json()).then(d => d.data);
    }
}
     