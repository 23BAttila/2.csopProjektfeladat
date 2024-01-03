var products = [
    {
        type: 'GPU',
        name: 'ASUS GeForce RTX 4070 Ti',
        parameters: '12GB memória,GDDR6X, 3 darab ventilátor',
        price: '470000 Ft',
        shortDescription: 'Erős GPU, ideális mindenhez.',
        details: 'Grafikus chip sebessége 2790 MHz, Grafikus memória sebessége 21000 MHz,Csatolófelület PCI-Express, Tápcsatlakozó 1 x 16-pin, Ajánlott tápegység 750 W, Maximális felbontás 7680 x 4320 pixel'
    },
    {
        type: 'GPU',
        name: 'ASUS Dual GeForce RTX 3060, 2 darab ventilátor',
        parameters: '12 GB GDDR6',
        price: '150000 Ft',
        shortDescription: 'Erős GPU, ideális mindenhez.',
        details: 'A legújabb NVIDIA® Ampere architektúrával az ASUS Dual GeForce RTX™ 3060 a dinamikus hőteljesítményt a széles körű kompatibilitással egyesíti. A zászlóshajó grafikus kártyák fejlett hűtési megoldásai – köztük két Axial-tech ventilátor, amelyek maximalizálják a légáramlást a radiátor felé – a 20 cm hosszú, két ventilátoros kártyába vannak csomagolva, így nagyobb teljesítményt biztosítanak kevesebb helyen. Ezek a fejlesztések az ASUS Dualt tökéletes választássá teszik azoknak a játékosoknak, akik nagy grafikus teljesítményre vágynak kompakt változatban.'
    },
    {
        type: 'GPU',
        name: 'Radeon RX-580 Videokártya',
        parameters: '8GB, GDDR5, 256 bit',
        price: '80000 Ft',
        shortDescription: 'Közepesen Erős GPU, ideális mindenhez.',
        details: 'Az AMD Radeon RX 580-as sorozatú videokártyái sokáig nagy népszerűségnek örvendtek, ám az öt éves fejlesztés felett szépen lassan eljárt az idő. Az eredeti fejlesztés egy Polaris 20-as kódnévre keresztelt GPU-t alkalmazott, ami 2304 stream egységgel, 144 textúrázóval, illetve 32 renderelő egységgel rendelkezett, a 8 GB-nyi GDDR5-ös fedélzeti memória pedig 256-bites adatsínen keresztül kapcsolódott a GPU-hoz.'
    },
    {
        type: 'GPU',
        name: 'ASUS Dual Radeon™ RX 6600',
        parameters: '12GB memória,GDDR4,3 darab',
        price: '70000 Ft',
        shortDescription: 'Gyenge GPU, ideális mindenhez.',
        details: 'Az AMD Radeon™ RX 6600 grafikus kártyák komoly játékokat biztosítanak 1080p felbontáson és nagyon magas képkockasebességgel. Használja ki az akár 32 nagy teljesítményű számítási egység, az innovatív AMD Infinity Cache és az akár 8 GB dedikált GDDR6 memória előnyeit. Tapasztald meg a játékteljesítmény következő generációját az AMD Smart Access Memory technológiával, ha egy AMD Radeon RX 6600 XT grafikus kártyát párosítasz egy AMD Ryzen™ 5000 sorozatú asztali processzorral.'
    },
    {
        type: 'GPU',
        name: 'SUS Dual Radeon™ RX 6750 XT',
        parameters: '16GB memória,GDDR4,4 darab',
        price: '210000 Ft',
        shortDescription: 'Erős GPU, ideális mindenhez.',
        details: 'A legújabb AMD RDNA™ 2 architektúra élményét a legtisztább formájában kínáló ASUS Dual Radeon™ RX 6750 XT egyedülállóan ötvözi a teljesítményt és az egyszerűséget. A zászlóshajó grafikus kártyákból származó fejlett hűtési technológiát használó Dual a lényeget választja a stílus helyett, így tökéletes választás a kiegyensúlyozott felépítéshez. Kösse be a biztonsági övet, és vegyen részt az utolsó generációs játéktesztekben.'
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