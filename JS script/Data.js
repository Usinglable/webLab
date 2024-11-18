const meals = [
    // Супы
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        kind: "veg",
        count: '350 г',
        image: 'https://eat-cook.ru/wp-content/uploads/2024/01/1666804735_78-mykaleidoscope-ru-p-salat-gaspacho-oboi-85.jpg'
    },
    {
        keyword: 'borscht',
        name: 'Борщ',
        price: 210,
        category: 'soup',
        kind: 'meat',
        count: '350 г',
        image: 'https://avatars.mds.yandex.net/i?id=b147110a5c6ded8ddd20ef8e6f26fc97_l-5205578-images-thumbs&n=13'
    },
    {
        keyword: 'okroshka',
        name: 'Окрошка',
        price: 200,
        category: 'soup',
        kind: 'meat',
        count: '350 г',
        image: 'https://static.mk.ru/upload/entities/2023/08/14/04/articles/facebookPicture/69/91/12/a5/3a10985f4a3ea677f1f445bb41cf45ec.jpg'
    },
    {
        keyword: 'mushroom',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        kind: 'veg',
        count: '330 г',
        image: 'https://pic.rutubelist.ru/video/81/94/8194c18561f42cf7e63ca37f64390690.jpg'
    },
    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        kind: 'fish',
        count: '330 г',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/2355127/pub_62de27c0c9ee5c0a87c4c5c9_62de356f770bcd19c61a86f4/scale_1200'
    },
    {
        keyword: 'bouillabaisse',
        name: 'Буйабес',
        price: 290,
        category: 'soup',
        kind: 'fish',
        count: '330 г',
        image: 'https://i.pinimg.com/736x/49/5c/c4/495cc46440fefc36963a1bb50f9a1ccf.jpg'
    },

    // Главное блюдо
    {
        keyword: 'fried-potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        kind: 'veg',
        count: '250 г',
        image: 'https://lafoy.ru/photo_l/kartoshka-s-gribami-v-duhovke-recepty-1400-56561.jpg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        kind: 'meat',
        count: '310 г',
        image: 'https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-14066.jpg?size=626&ext=jpg'
    },
    {
        keyword: 'chicken-cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main',
        kind: 'meat',
        count: '280 г',
        image: 'https://static.tildacdn.com/tild6436-6532-4632-b036-393966326262/kopiya__mg_0078-1.jpg'
    },
    {
        keyword: 'vegetable-stir-fry',
        name: 'Овощное рагу',
        price: 170,
        category: 'main',
        kind: 'veg',
        count: '300 г',
        image: 'https://avatars.mds.yandex.net/i?id=c00ccb63756c095d572c1a734f517b8d_l-5231845-images-thumbs&n=13'
    },
    {
        keyword: 'grilled-salmon',
        name: 'Лосось на гриле',
        price: 450,
        category: 'main',
        kind: 'fish',
        count: '200 г',
        image: 'https://i.pinimg.com/originals/ab/a5/24/aba5248e06e400c70e13759983c7c784.jpg'
    },
    {
        keyword: 'cod-fillet',
        name: 'Филе трески с овощами',
        price: 350,
        category: 'main',
        kind: 'fish',
        count: '250 г',
        image: 'https://i.pinimg.com/originals/26/4d/b5/264db5bf408ad5f668ce2f7e7013e2fe.jpg'
    },
    

    // Салаты и стартеры
{ 
    keyword: "shrimp_salad",
    name: "Салат с креветками",
    price: 320,
    category: "salad",
    kind: "fish",
    count: "250г",
    image: "https://dikoed.ru/upload/iblock/20c/15378-salat-iz-severnykh-krevetok-s-avokado.jpg"
},
{
    keyword: "caprese",
    name: "Салат Капрезе",
    price: 230,
    category: "salad",
    kind: "veg",
    count: "200г",
    image: "https://avatars.mds.yandex.net/i?id=1777020993a2eeccd5bf479c7b585b1f_l-5319522-images-thumbs&n=13"
},
{
    keyword: "avocado_toast",
    name: "Тост с авокадо",
    price: 200,
    category: "salad",
    kind: "veg",
    count: "150г",
    image: "https://avatars.mds.yandex.net/i?id=141434a7ed0247fd6f60fd1765100b78_l-5248825-images-thumbs&n=13"
},
{
    keyword: "smoked_salmon_starter",
    name: "Закуска с копченым лососем и авокадо",
    price: 270,
    category: "salad",
    kind: "fish",
    count: "180г",
    image: "https://img.povar.ru/main-micro/8f/cd/f3/c1/tartinki_s_kopchenim_lososem_i_avokado-802043.JPG"
},
{
    keyword: "beef_salad",
    name: "Салат с говядиной и овощами",
    price: 320,
    category: "salad",
    kind: "meat",
    count: "270 г",
    image: "https://zheludenko.ru/uploads/monthly_2021_12/salat.jpg.a659feddb1beb424c36faca47ea97be8.jpg"
},
{
    keyword: "mini_tacos",
    name: "Мини тако с курицей",
    price: 220,
    category: "salad",
    kind: "meat",
    count: "200г",
    image: "https://i.pinimg.com/originals/fc/8b/f5/fc8bf57958fde952f045d1fe17d1fd96.jpg"
},

// Десерты
{
    keyword: "apple_pie",
    name: "Яблочный пирог",
    price: 200,
    category: "dessert",
    kind: "large",
    count: "200г",
    image: "https://cdn.culture.ru/images/f9b0bfe7-72e9-5196-942e-0c5e0ea6c4ae"
},
{
    keyword: "lemon_tart",
    name: "Лимонный тарт",
    price: 190,
    category: "dessert",
    kind: "small",
    count: "150г",
    image: "https://i.pinimg.com/originals/6b/bf/62/6bbf6221266bee4f93a6ac669ba3e207.jpg"
},
{
    keyword: "churros",
    name: "Чуррос с шоколадом",
    price: 160,
    category: "dessert",
    kind: "small",
    count: "120г",
    image: "https://i.pinimg.com/originals/22/c1/f3/22c1f30c9598a4f522d6d9341d63f81d.jpg"
},
{
    keyword: "mango_pudding",
    name: "Пудинг с манго",
    price: 210,
    category: "dessert",
    kind: "medium",
    count: "180г",
    image: "https://avatars.mds.yandex.net/i?id=aa5910b8f1f788460efb7d2b2d3f085a_l-4238614-images-thumbs&n=13"
},
{
    keyword: "eclair",
    name: "Эклер с ванильным кремом",
    price: 150,
    category: "dessert",
    kind: "small",
    count: "100г",
    image: "https://sweethouse.su/upload/medialibrary/b56/c0u2c7ct8vnfahc6kzjltj6hw7hvq6a1.jpg"
},
{
    keyword: "panna_cotta",
    name: "Панна-котта с ягодами",
    price: 230,
    category: "dessert",
    kind: "medium",
    count: "200г",
    image: "https://avatars.mds.yandex.net/i?id=2dd08c6cd118403832bd8787c140955a_l-5310207-images-thumbs&n=13"
},


    // Напитки
    {
        keyword: 'orange-juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'https://avatars.mds.yandex.net/get-mpic/5254518/img_id4752955625068132767.jpeg/orig'
    },
    {
        keyword: 'apple-juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'https://avatars.mds.yandex.net/i?id=238a9a3ef17b76d2ae124491cfd774d8_l-7011884-images-thumbs&n=13'
    },
    {
        keyword: 'carrot-juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'https://avatars.mds.yandex.net/get-znatoki/1520758/2a0000017ce5abe6ab7b2792d45b024386d7/orig'
    },
    {
        keyword: 'black-tea',
        name: 'Чёрный чай',
        price: 70,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'https://podarichai.ru/foto_blog/color_1.jpg'
    },
    {
        keyword: 'green-tea',
        name: 'Зелёный чай',
        price: 80,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'https://avatars.mds.yandex.net/i?id=0038c31d256ba52f2c8fcf915eec09c3_l-5287379-images-thumbs&n=13'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 150,
        category: 'drink',
        kind: 'hot',
        count: '250 мл',
        image: 'https://avatars.mds.yandex.net/i?id=067237878e54b0ca865086af16d75cb2_l-9146142-images-thumbs&n=13'
    }    
];
