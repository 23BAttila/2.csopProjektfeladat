var products = [
    {
        type: 'Monitor',
        name: '24" AOC 24G2SPU',
        parameters: 'AOC 4 ms 165Hz',
        price: '58900 Ft',
        shortDescription: 'Gamer',
        details: 'LCD monitor - Full HD 1920 × 1080, IPS, 16:9 képarány, 4 ms válaszidő, 165Hz képfrissítési gyakoriság, FreeSync, 8bit színmélység, 300 cd/m2 fényerő, 1000:1 kontraszt, DisplayPort 1.2, HDMI 1.4, VGA, USB, fül/fejhallgató kimenet, állítható magasság, tükröződésmentes kijelző, pivot, hangszórók, VESA'
    },
    {
        type: 'Monitor',
        name: 'AOC Gaming 165Hz IPS monitor 23.8" 24G2SPAE/BK',
        parameters: '1920x1080, 16:9, 300cd/m2, 1ms, VGA/2xHDMI/DisplayPort',
        price: '64000 Ft',
        shortDescription: 'Gamer',
        details: '23,8" játékmonitor 165 Hz-es frissítési frekvenciával, 1 ms MPRT válaszidővel, IPS panellel és Adaptive Sync funkcióval. A 24G2SPAE/BK a 23,8"-os modellünk azoknak a játékosoknak, akik nem akarnak lemondani a kényelemről a nagy teljesítményért. Emellett 1080p Full High Definition (FHD) felbontást, alacsony bemeneti késleltetést, IPS panelt, 2 W-os sztereó hangszórókat és széles színtartományt kínál.'
    },
    {
        type: 'Monitor',
        name: 'DAHUA LM22-B201S',
        parameters: 'Full HD 75HZ 4ms',
        price: '45000 Ft',
        shortDescription: 'Irodai',
        details: 'DAHUA LM22-B201S típusú 21.45”-es IPS paneles Fekete színű monitor 1920 x 1080 (Full HD) felbontással.'
    },
    {
        type: 'Monitor',
        name: 'LG 26WQ500-B Monitor',
        parameters: '26", IPS, 21:9, 2560x1080, 5ms, 250cd, HDMIx2, HDR10, FreeSync, Fekete',
        price: '55000 Ft',
        shortDescription: 'Munka és Játék(Gamer)',
        details: 'ásson többet és csináljon többet az UltraWide™ Full HD (2560 x 1080) képernyőn! 33%-kal több hely áll rendelkezésre, mint a Full HD (1920 x 1080) felbontású kijelzők esetén, így több feladaton dolgozhat hatékonyan anélkül, hogy váltani kellene a programok között.'
    },
    {
        type: 'Monitor',
        name: 'ASUS ROG Swift PG48UQ',
        parameters: '4k 0.1ms 47.5 inch  38 Hz',
        price: '860000 Ft',
        shortDescription: 'Gamer',
        details: 'A ROG Swift OLED PG48UQ egy játékhoz optimalizált 47,5”-es, 4K felbontású OLED monitor, amely csillogásmentes mikrotextúrás bevonatával csökkenti a tükröződéseket. Ezzel a képernyő még pontosabban tudja megjeleníteni a színeket. Szupergyors, (túlhajtva) 138 Mhz-es képfrissítési sebességével és fantasztikus 0,1 ezredmásodperces válaszidejével nagyobb méretben is képes magával ragadó játékot nyújtani. A 98%-os DCI-P3 színtér, a valós 10 bites színmegjelenítés és a Delta E < 2 pontosság életszerű színeket eredményez és a lehető legsötétebb fekete árnyalatokat kínálja.'
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