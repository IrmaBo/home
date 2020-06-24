ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [33.789575669062316,-118.19441814843749],
            zoom: 11,
            controls: ["zoomControl"]
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([33.76750006779284,-118.20849438134762], {
            hintContent: 'Design studio',

        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'mymap/map_icon.png',
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -40],

            iconShadow: true,

            iconShadowImageHref: "mymap/shadow.png",
            iconShadowImageSize: [33, 18],
            iconShadowImageOffset: [-16, 0]
        });

    myMap.geoObjects
        .add(myPlacemark);

});
