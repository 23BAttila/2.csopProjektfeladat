var products = [
    {
        type: 'Mouse',
        name: 'Huzaro Shot',
        parameters: 'Vezetékes',
        price: '8000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 500-1000 dpi, 1,8m zsinór'
    },
    {
        type: 'Mouse',
        name: 'CONNECT IT CMO-2510-BK',
        parameters: 'Ergonomic, Vezeték nélküli',
        price: '7000 Ft',
        shortDescription: 'Egészséges',
        details: 'RGB-s világítás nélküli, elemes: AAA, 1600 dpi, 6 gomb'
    },
    {
        type: 'Mouse',
        name: 'Magic Mouse',
        parameters: 'Apple, Vezeték nélküli, tölthető usb-c-vel',
        price: '35000 Ft',
        shortDescription: 'Apple',
        details: 'A Magic Mouse vezeték nélkül működik, és újratölthető. Talpát az íróasztalon való könnyű mozgásra optimalizáltuk. A Multi‑Touch felületen egyszerű kézmozdulatokat használhatsz: például csúsztatással válthatsz a weboldalak között, vagy görgethetsz a dokumentumokban. Az akkumulátoros Magic Mouse egyetlen feltöltéssel akár egy hónapnál is tovább bírja. A dobozból kivéve azonnal munkára kész, és automatikusan kapcsolódik a Macedhez. Szőtt borítású USB-C – Lightning kábel is jár hozzá, amelyet a Mac USB‑C portjához csatlakoztatva töltéshez és párosításhoz használhatsz.'
    },
    {
        type: 'Mouse',
        name: 'STEELSERIES RIVAL 3',
        parameters: 'Vezetékes',
        price: '14000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 8500 dpi, 1,6m zsinór'
    },
    {
        type: 'Mouse',
        name: 'Logitech G502 Hero',
        parameters: 'Vezetékes',
        price: '20000 Ft',
        shortDescription: 'Gamer',
        details: 'RGB-s világítás, 25600 dpi, 1,8m zsinór'
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