var products = [
    {
        type: 'Keyboard',
        name: 'Cooler Master MK110',
        parameters: 'Magyar',
        price: '16000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 440mm széles, 134mm magas'
    },
    {
        type: 'Keyboard',
        name: 'Keygord 500',
        parameters: 'Magyar',
        price: '19000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 500mm széles, 140mm magas'
    },{
        type: 'Keyboard',
        name: 'Dual Master ZK52',
        parameters: 'Magyar',
        price: '25000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 390mm széles, 124mm magas'
    },{
        type: 'Keyboard',
        name: 'ARES gladus',
        parameters: 'Magyar',
        price: '30000 Ft',
        shortDescription: 'Gamer, red switch',
        details: 'RGB-s világítás, 400mm széles, 140mm magas'
    },{
        type: 'Keyboard',
        name: 'OFFICE billentyűzet',
        parameters: 'Angol',
        price: '5000 Ft',
        shortDescription: 'Irodai munkára',
        details: 'RGB-s világítás nélküli, 300mm széles, 120mm magas'
    },
    
    
];

var productContainer = document.getElementById('product-container');

for (var i = 0; i < products.length; i++) {
    var product = document.createElement('div');
    product.className = 'product';

    var title = document.createElement('h2');
    title.textContent = products[i].name;
    product.appendChild(title);

    var shortDescription = document.createElement('p');
    shortDescription.textContent = products[i].shortDescription;
    product.appendChild(shortDescription);

    var details = document.createElement('p');
    details.className = 'details';
    details.textContent = products[i].details;
    product.appendChild(details);

    var button = document.createElement('button');
    button.textContent = 'Részletek';
    button.addEventListener('click', function() {
        var details = this.parentNode.querySelector('.details');
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
    product.appendChild(button);

    productContainer.appendChild(product);
}