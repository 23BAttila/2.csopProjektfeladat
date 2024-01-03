var products = [
    {
        type: 'CPU',
        name: 'Intel Core i9-13900K',
        parameters: '3.0 GHz, 24 mag',
        price: '250000 Ft',
        shortDescription: 'Erős processzor, ideális játékokhoz és munkához.',
        details: 'Az Intel Core i9-13900K egy magas teljesítményű processzor, amely 3.0 GHz-es órajellel és 8 maggal rendelkezik. Ideális választás játékokhoz és munkához.'
    },
    {
        type: 'CPU',
        name: 'Intel Core i3-10100F ',
        parameters: '3.6 GHz, 4 mag',
        price: '27000 Ft',
        shortDescription: 'Gyengébb processzor, munkához és régebbi játékokhoz.',
        details: 'Az Intel Core i3-10100F egy közepes teljesítményű processzor, amely 3.6 GHz-es órajellel és 4 maggal rendelkezik. Főleg munkához.'
    },

    {
        type: 'CPU',
        name: 'AMD Ryzen 5 5600X',
        parameters: '3,7 GHz, 6 mag',
        price: '70000 Ft',
        shortDescription: 'Erős processzor, ideális játékokhoz és munkához.',
        details: 'Az AMD Ryzen 5 5600X egy nagy teljesítményű processzor, amely 3.6 GHz-es órajellel és 8 maggal rendelkezik. Ideális választás játékokhoz és munkához.'
    },
    {
        type: 'CPU',
        name: 'AMD Ryzen 3 3600X',
        parameters: '2.7 GHz, 4 mag',
        price: '40000 Ft',
        shortDescription: 'Gyenge processzor, munkához.',
        details: 'Az AMD Ryzen 3 3600X egy nagy teljesítményű processzor, amely 2.7 GHz-es órajellel és 2.7 maggal rendelkezik. főleg munkához.'
    },
    {
        type: 'CPU',
        name: 'AMD Ryzen 4 4600X',
        parameters: '3 GHz, 8 mag',
        price: '60000 Ft',
        shortDescription: 'Közepes erősségű processzor, ideális játékokhoz és munkához.',
        details: 'Az AMD Ryzen 4 4600X egy nagy teljesítményű processzor, amely 3 GHz-es órajellel és 8 maggal rendelkezik. Ideális választás játékokhoz és munkához.'
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

