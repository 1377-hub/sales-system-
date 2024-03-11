const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Shoes',
        price: 2500,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Utensils',
        price: 6000,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: 'Necklace',
        price: 500,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Clothing',
        price: 1000,
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>KES ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "KES " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "KES " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>KES ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
