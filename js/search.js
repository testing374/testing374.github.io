"use strict";

// get url parameters, apply filters, get an array of p_id
const params = new URLSearchParams(window.location.search);
let displayList = [];
for ( let i = 1; i <= productList.length; i++ ) displayList.push(i);
for ( const kv of params.entries() ) {
    if (kv[0]=='price') {
        displayList = filterFunc(displayList,kv[0],kv[1].split('-')[0],kv[1].split('-')[1]);
    } else displayList = filterFunc(displayList,kv[0],kv[1]);
}

// from search.js
// add a div of a product
const loadDivB = p => {
    const product = productList[p-1];
    const shoeItem = document.createElement('a');
    shoeItem.setAttribute('href', `product.html?p=${product.p_id}`);
    shoeItem.innerHTML = `
    <div>
    <img src="https://static-hk.zacdn.com/p/${brand[product.b_id-1]}-${product.img}-1.jpg">
    <h4>${brandName[product.b_id-1]}</h4>
    <h4>${product.name}</h4>
    <h4>HK$${product.price}</h4>
    </div>    
    `;
    divB.appendChild(shoeItem);
};

const divB = document.getElementsByClassName('pList')[0];

if (displayList.length == 0) {
    divB.append('未找到任何結果。很抱歉，我們找不到符合條件的商品');
} else {
    displayList.forEach(loadDivB);
}



// divB nav

let txt = `${displayList.length}件貨品`;
if ( typeof q !== "undefined" ) txt = `搜尋結果 "${q}" ` + txt;
document.getElementsByTagName('code')[0].innerText = txt;

// 排序按鈕
const sortBtn = document.getElementById('sortBtn');
const sortDiv = sortBtn.querySelector('div');
sortBtn.addEventListener('click', _ => {
    if (sortDiv.style.display == 'none') {
        sortDiv.style.display = 'flex';
    } else sortDiv.style.display = 'none';
});
// 自動按一次
sortBtn.dispatchEvent(new Event("click"));

// 排序項目
const sortOptions = [
    { index: 0, key: 'price', asc: true },
    { index: 1, key: 'price', asc: false },
    { index: 2, key: 'view', asc: true },
    { index: 3, key: 'view', asc: false }
];
sortOptions.forEach(option => {
    sortBtn.querySelectorAll('span')[option.index].addEventListener('click', () => {
        divB.innerHTML = '';
        sortFunc(displayList, option.key, option.asc).forEach(loadDivB);
    });
});



// divA

// 尺碼 from lib
sizeBoxes('.size .box span');

// 篩選按鈕
const fBtn = document.getElementById('filterBtn');
fBtn.addEventListener('click', _ => {
    // 品牌 類別
    const foo = (a, b) => {
        const r = document.querySelector(`input[name="${b}"]:checked`);
        if ( r == null) {
            return '';
        } else return a+'='+r.value+'&';
    };
    let b = foo('b_id','br');
    let t = foo('type','ty');
    let s = sValue == '' ? '' : `size=${sValue}&`;
    // 價格
    let p = 'price=';
    const pMin = document.getElementById('minp').value;
    const pMax = document.getElementById('maxp').value;
    if ( pMin == '' && pMax == '' ) {
        p = '';
    } else if ( pMin == '' ){
        p += `0-${pMax}`;
    } else if ( pMax == '' ){
        p += `${pMin}-10000`;
    } else p += `${pMin}-${pMax}`;
    
    window.location.href = 'search.html?'+b+t+s+p;
});