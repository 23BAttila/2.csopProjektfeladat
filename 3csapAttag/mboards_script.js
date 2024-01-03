var products = [
    {
        type: 'Motherboard',
        name: 'ASUS PRIME B450M-K II',
        parameters: '4.4 GHz, Micro-ATX, Memória foglalatok száma: 2 db, Memória típus: DDR4',
        price: '27900 Ft',
        shortDescription: 'DDR4, max 64GB memória 2 foglalattal',
        details: 'Alaplap típus:Micro-ATX, D-Sub kimenet:1, Formátum:Micro-ATX, Hálózati csatlakozás:1x 10/100/1000 Mb/s, HDMI kimenet:1, Maximum memória (GB):64, Memória foglalat:DDR4, Memória foglalatok száma:2, Memória órajel (MHz):4400, PCI-e verzió:3.0, PCI-E x1 csatlakozó:2, PCI-E x16 csatlakozó:1, Processzor foglalat:AMD AM4, PS/2 csatlakozó:1, Raid:0,1,10, SATA 3 csatlakozó:4, Táp csatlakozó (pin):24+8, USB 2.0:2, USB 3.0:4, Memória típus:DDR4, DVI csatlakozó:1, M.2 csatlakozó:1, Chipset típus:AMD B450'
    },
    {
        type: 'Motherboard',
        name: 'Gigabyte H410M',
        parameters: '2.9 GHz, Memória foglalatok száma: 2 db, Memória típus: DDR4',
        price: '25000 Ft',
        shortDescription: 'DDR4, max 64GB memória 2 foglalattal',
        details: 'DDR4, max 64GB memória 2 foglalattal, 2.9 GHz, Memória foglalatok száma: 2 db, Memória típus: DDR4'
    },
    {
        type: 'Motherboard',
        name: 'Gigabyte A520',
        parameters: 'Gigabyte A520 Aorus Elite, PCIe 3.0 x4 M.2, RGB FUSION 2.0, Gaming, ATX alaplap, DIMM, Memória foglalatok száma: 4 db, Memória típus: DDR4-SDRAM',
        price: '36000 Ft',
        shortDescription: 'A GIGABYTE AORUS sorozatú alaplapok 5+3 fázisú, tiszta digitális PWM + Low RDS(on) MOSFET-ek kialakítását használják a 3. generációs AMD Ryzen™ CPU-k támogatására azáltal, hogy hihetetlen pontosságot biztosítanak az alaplap legenergia-igényesebb és energiaérzékeny alkatrészei számára. valamint fokozott rendszerteljesítményt és tökéletes hardveres méretezhetőséget biztosít.',
        details: 'GIGABYTE H510M 3.2 GHz, Micro-ATX, Memória foglalatok száma: 2 db, Memória típus: DDR4'
        
        
    },
    {
        type: 'Motherboard',
        name: 'GIGABYTE H510M',
        parameters: '3.2 GHz, Micro-ATX, Memória foglalatok száma: 2 db, Memória típus: DDR4',
        price: '30000 Ft',
        shortDescription: 'DDR4, max 64GB memória 2 foglalattal',
        details: 'RGB FUSION 2.0, Gaming, ATX alaplap, DIMM, Memória foglalatok száma: 2 db, Memória típus: DDR4'
    },
    {
        type: 'Motherboard',
        name: 'ASUS ROG STRIX B550-F',
        parameters: '4.4 GHz, ATX, Memória foglalatok száma: 4 db, Memória típus: DDR4',
        price: '27900 Ft',
        shortDescription: 'Integrált VGA AMD GAMER',
        details: 'GIGABYTE H510M 3.2 GHz, Micro-ATX, Memória foglalatok száma: 2 db, Memória típus: DDR4'
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