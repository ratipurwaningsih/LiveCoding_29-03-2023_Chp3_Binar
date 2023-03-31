class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

// console.log(new Product());

    class ProductItem {
        constructor(product) {
            this.product = product;
        }
    
        render() {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item'
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\Rp.${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Nambah ke Keranjang</button>
                    </div>
                </div>
                `;
            return prodEl;
        }
    }

    // Masih kurang
    // Class ShoppingCart {
    //     item = [];
    //     render() {
    //         const cartE1 = document.createElement('section');
    //         cartE1.innerHTML
    //     }
    // }

const productList = {
    products : [
        new Product(
            'boneka',
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3139148/galeri-boneka_galeri-boneka-teddy-bear-love-pink-boneka_full02.jpg',
            20000,
            'ini boneka lucu loh kayak fasil kita'
        ),
        new Product(
            'boneka',
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3139148/galeri-boneka_galeri-boneka-teddy-bear-love-pink-boneka_full02.jpg',
            20000,
            'ini boneka lucu loh kayak fasil kita'
        ),
        new Product(
            'boneka',
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3139148/galeri-boneka_galeri-boneka-teddy-bear-love-pink-boneka_full02.jpg',
            20000,
            'ini boneka lucu loh kayak fasil kita'
        ),
        new Product(
            'boneka',
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3139148/galeri-boneka_galeri-boneka-teddy-bear-love-pink-boneka_full02.jpg',
            20000,
            'ini boneka lucu loh kayak fasil kita'
        ),
    // {
    //     title: 'boneka',
    //     imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3139148/galeri-boneka_galeri-boneka-teddy-bear-love-pink-boneka_full02.jpg',
    //     price: 20000,
    //     description: 'ini boneka lucu loh kayak fasil kita'
    // },
    // {
    //     title: 'coklat',
    //     imageUrl: 'https://3.bp.blogspot.com/-zJ8qvXsCQnA/WL9GycVSSfI/AAAAAAAAFAU/G1t5YLXZcokukxsc2DXApiR_Go8UxDGwgCLcB/s1600/Cokelat.jpg',
    //     price: 15000,
    //     description: 'ini coklat manis loh kayak fasil kita'
    // },
    // {
    //     title: 'kaos',
    //     imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-51764043/tidak_ada_merk_kaos_polos_hitam_-_kaos_polos_hitam_pria_-_kaos_polos_murah_full01_e7269231.jpg',
    //     price: 30000,
    //     description: 'ini kaos keren FSW3'
    // },
], 
render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const product of this.products) {
        const productItem = new ProductItem(product)
        const prodEl = productItem.render();
        prodList.append(prodEl)
    }
    renderHook.append(prodList);
}
}

// Masih kurang
// class Shop {
//     render() {
//         const renderHook = document.getElementById('app');

//         const cart = new ShoppingCart();
//         const cartE1 = Cart.render();

//         const productList = new productList();
//         const prodListE1 = productList.remder();

//         renderHook.append(cartE1)
//         renderHook.append(prodListE1)
//         }
//     }
//     const shop = new Shop{}
//     shop.render();
// }

productList.render()