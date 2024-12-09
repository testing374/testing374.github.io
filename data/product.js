/*
type
輕便1 正式2 涼鞋3 運動4
b_id
Timberland 1  Vans 2  BOSS 3  ADIDAS 4 ZARA 5 Reebok 6 Projet1826 7 WALK London 8
*/
const shoeType = ['輕便鞋','正式鞋','涼鞋及拖鞋','運動鞋'];
const brand = ['timberland', 'vans', 'boss', 'adidas', 'undefined', 'undefined', 'undefined', 'undefined'];
const brandName = ['Timberland', 'Vans', 'BOSS', 'ADIDAS', 'ZARA', 'Reebok', 'Projet1826', 'WALK London'];

const productList = [
    {
        "p_id": 1,
        "name": "男款休閒帆船鞋",
        "type": 1,
        "b_id": 1,
        "price": 540,
        "size": [40,43,44,45],
        "img": "4290-4467286",
        "view": 0
    },
    {
        "p_id": 2,
        "name": "男款休閒鞋",
        "type": 1,
        "b_id": 1,
        "price": 450,
        "size": [41,43],
        "img": "3968-6400096",
        "view": 10
    },
    {
        "p_id": 3,
        "name": "男款低筒休閒鞋",
        "type": 1,
        "b_id": 1,
        "price": 575,
        "size": [40,41,42,43,44],
        "img": "3775-0630586",
        "view": 99
    },
    {
        "p_id": 4,
        "name": "男款皮革低筒休閒鞋",
        "type": 1,
        "b_id": 1,
        "price": 660,
        "size": [40,41,42,43,44,45],
        "img": "5770-5434207",
        "view": 70
    },
    {
        "p_id": 5,
        "name": "男款Graydon皮革休閒鞋",
        "type": 1,
        "b_id": 1,
        "price": 593,
        "size": [42],
        "img": "8113-8454046",
        "view": 32
    },
    {
        "p_id": 6,
        "name": "Color Theory Classic Slip-Ons",
        "type": 1,
        "b_id": 2,
        "price": 363,
        "size": [40,41,42,43,44],
        "img": "6852-8945496",
        "view": 44
    },
    {
        "p_id": 7,
        "name": "Classic Slip-Ons",
        "type": 1,
        "b_id": 2,
        "price": 335,
        "size": [41,42,42,44],
        "img": "8446-9165496",
        "view": 32
    },
    {
        "p_id": 8,
        "name": "Reissue 98 懶人鞋",
        "type": 1,
        "b_id": 2,
        "price": 560,
        "size": [40,42,44],
        "img": "6024-5921576",
        "view": 65
    },
    {
        "p_id": 9,
        "name": "經典懶佬鞋",
        "type": 1,
        "b_id": 2,
        "price": 523,
        "size": [40,42,43,44],
        "img": "6429-9855496",
        "view": 102
    },
    {
        "p_id": 10,
        "name": "色彩理論經典一腳蹬鞋",
        "type": 1,
        "b_id": 2,
        "price": 272,
        "size": [40,41,42],
        "img": "3653-9149356",
        "view": 20
    },
    {
        "p_id": 11,
        "name": "男款Bradstreet咖啡色皮革牛津鞋",
        "type": 2,
        "b_id": 1,
        "price": 540,
        "size": [39,40,41],
        "img": "1160-1306495",
        "view": 44
    },
    {
        "p_id": 12,
        "name": "男款Garrison Trail綁帶涼鞋",
        "type": 3,
        "b_id": 1,
        "price": 425,
        "size": [40,41,43,44,45,46],
        "img": "2207-3688016",
        "view": 32
    },
    {
        "p_id": 13,
        "name": "Raised 商標-BOSS Business",
        "type": 3,
        "b_id": 3,
        "price": 700,
        "size": [40,41,42,45],
        "img": "4736-3931007",
        "view": 68
    },
    {
        "p_id": 14,
        "name": "Kirk標誌拖鞋-BOSS Business",
        "type": 3,
        "b_id": 3,
        "price": 357,
        "size": [40,41],
        "img": "7671-5885986",
        "view": 11
    },
    {
        "p_id": 15,
        "name": "Bay 拖鞋 - BOSS Business",
        "type": 3,
        "b_id": 3,
        "price": 500,
        "size": [44,45],
        "img": "4766-2441007",
        "view": 15
    },
    {
        "p_id": 16,
        "name": "Superstar Shoes",
        "type": 4,
        "b_id": 4,
        "price": 315,
        "size": [40,41,42,43,44,45],
        "img": "9229-9155876",
        "view": 100
    },
    {
        "p_id": 17,
        "name": "Duramo Sl Shoes",
        "type": 4,
        "b_id": 4,
        "price": 313,
        "size": [44,45],
        "img": "6077-8155876",
        "view": 89
    },
    {
        "p_id": 18,
        "name": "Galaxy 6 Shoes",
        "type": 4,
        "b_id": 4,
        "price": 276,
        "size": [44,45],
        "img": "8050-5137356",
        "view": 74
    },
    {
        "p_id": 19,
        "name": "Pureboost 5 跑鞋",
        "type": 4,
        "b_id": 4,
        "price": 1089,
        "size": [40,41,42,43,44,45],
        "img": "2166-0482986",
        "view": 99
    },
    {
        "p_id": 20,
        "name": "Pureboost 23 Shoes",
        "type": 4,
        "b_id": 4,
        "price": 451,
        "size": [40,41,42,44,45],
        "img": "9727-2165876",
        "view": 88
    },
    {
        "p_id": 21,
        "name": "紋理涼鞋",
        "type": 3,
        "b_id": 5,
        "price": 120,
        "size": [40,41],
        "img": "3100-4881407",
        "view": 108
    },
    {
        "p_id": 22,
        "name": "菱紋運動鞋",
        "type": 4,
        "b_id": 5,
        "price": 250,
        "size": [40,41],
        "img": "7558-9752407",
        "view": 18
    },
    {
        "p_id": 23,
        "name": "經典皮鞋",
        "type": 2,
        "b_id": 5,
        "price": 1139,
        "size": [44],
        "img": "5310-0951407",
        "view": 168
    },
    {
        "p_id": 24,
        "name": "Classic Slide",
        "type": 3,
        "b_id": 6,
        "price": 175,
        "size": [39,40,42,43,44,45],
        "img": "7039-4754307",
        "view": 145
    },
    {
        "p_id": 25,
        "name": "Clean Slide Sandals",
        "type": 3,
        "b_id": 6,
        "price": 151,
        "size": [39,40,41],
        "img": "5068-4515007",
        "view": 123
    },
    {
        "p_id": 26,
        "name": "Classic Slides",
        "type": 3,
        "b_id": 6,
        "price": 202,
        "size": [39,40,41,42,43,44],
        "img": "5019-6705007",
        "view": 198
    },
    {
        "p_id": 27,
        "name": "Classic Slide",
        "type": 3,
        "b_id": 6,
        "price": 187,
        "size": [40,41,42,43,44,45],
        "img": "6876-5534307",
        "view": 16
    },
    {
        "p_id": 28,
        "name": "Classic Slide",
        "type": 3,
        "b_id": 6,
        "price": 190,
        "size": [39,40,41,42,43,44,45],
        "img": "7209-4725007",
        "view": 94
    },
    {
        "p_id": 29,
        "name": "Hyperium Sandals",
        "type": 3,
        "b_id": 6,
        "price": 295,
        "size": [43,44],
        "img": "4957-5794007",
        "view": 76
    },
    {
        "p_id": 30,
        "name": "CASUAL SPORTY GREEN",
        "type": 3,
        "b_id": 7,
        "price": 600,
        "size": [40,42,45],
        "img": "4664-8528566",
        "view": 85
    },
    {
        "p_id": 31,
        "name": "EFRON CASUAL BLUE",
        "type": 3,
        "b_id": 7,
        "price": 600,
        "size": [42,43,45],
        "img": "4029-2714546",
        "view": 65
    },
    {
        "p_id": 32,
        "name": "LACE UP LEATHER BLUE",
        "type": 3,
        "b_id": 7,
        "price": 550,
        "size": [44],
        "img": "4665-3717316",
        "view": 111
    },
    {
        "p_id": 33,
        "name": "THONG LEATHER BLUE",
        "type": 3,
        "b_id": 7,
        "price": 490,
        "size": [41,42],
        "img": "3957-3319735",
        "view": 122
    },
    {
        "p_id": 34,
        "name": "CROSS STRAP GREEN",
        "type": 3,
        "b_id": 7,
        "price": 340,
        "size": [40,41,42,43],
        "img": "3951-0419735",
        "view": 166
    },
    {
        "p_id": 35,
        "name": "LEATHER THONG BROWN",
        "type": 3,
        "b_id": 7,
        "price": 490,
        "size": [41,42],
        "img": "3937-4319735",
        "view": 77
    },
    {
        "p_id": 36,
        "name": "ROUND TOE LEATHER BLACK",
        "type": 3,
        "b_id": 7,
        "price": 490,
        "size": [42],
        "img": "3930-8219735",
        "view": 38
    },
    {
        "p_id": 37,
        "name": "BACK SLING LEATHER BLUE",
        "type": 3,
        "b_id": 7,
        "price": 540,
        "size": [41,42],
        "img": "4665-3593085",
        "view": 74
    },
    {
        "p_id": 38,
        "name": "THONG LEATHER BLACK",
        "type": 3,
        "b_id": 7,
        "price": 400,
        "size": [42,43,44],
        "img": "4014-4717316",
        "view": 40
    },
    {
        "p_id": 39,
        "name": "DARL BACK SLING BLUE",
        "type": 3,
        "b_id": 7,
        "price": 540,
        "size": [38,39,45],
        "img": "3981-7333475",
        "view": 164
    },
    {
        "p_id": 40,
        "name": "奧利佛德比鞋",
        "type": 2,
        "b_id": 8,
        "price": 900,
        "size": [40,41,42,43,44],
        "img": "7043-7239016",
        "view": 195
    },
    {
        "p_id": 41,
        "name": "奧利佛和尚綁帶鞋",
        "type": 2,
        "b_id": 8,
        "price": 900,
        "size": [43,44,45],
        "img": "7042-5239016",
        "view": 9
    },
    {
        "p_id": 42,
        "name": "亞歷克斯牛津鞋",
        "type": 2,
        "b_id": 8,
        "price": 800,
        "size": [40,44],
        "img": "7044-0339016",
        "view": 29
    },
    {
        "p_id": 43,
        "name": "奧利佛德比鞋",
        "type": 2,
        "b_id": 8,
        "price": 900,
        "size": [41,42,43,44,45],
        "img": "7045-3339016",
        "view": 22
    },
    {
        "p_id": 44,
        "name": "詹姆斯圍裙鞋",
        "type": 2,
        "b_id": 8,
        "price": 750,
        "size": [40,41,43,44],
        "img": "0078-9199895",
        "view": 200
    },
    {
        "p_id": 45,
        "name": "喬伊裝飾樂福鞋",
        "type": 1,
        "b_id": 8,
        "price": 950,
        "size": [40,41,42,43,44],
        "img": "8412-8239016",
        "view": 136
    },
    {
        "p_id": 46,
        "name": "亞歷克斯德比鞋",
        "type": 2,
        "b_id": 8,
        "price": 750,
        "size": [40,41,42,44],
        "img": "4455-9099895",
        "view": 148
    },
    {
        "p_id": 47,
        "name": "麗娃便士樂福鞋",
        "type": 1,
        "b_id": 8,
        "price": 950,
        "size": [40,42,43,44,45],
        "img": "8198-0239016",
        "view": 124
    },
    {
        "p_id": 48,
        "name": "麗娃鏈條樂福鞋",
        "type": 1,
        "b_id": 8,
        "price": 1000,
        "size": [42,44,45,46],
        "img": "7041-3239016",
        "view": 185
    }
]
