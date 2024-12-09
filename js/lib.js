"use strict";

/* Function list:

filterFunc          used in search
sortFunc            used by search.html sort button
setCookie           used in admin_login
getCookie           used in admin_login
sizeBoxes           used in search and product
*/


/*
return Array of p_id
when k == 'price', v is array with 2 values, otherwise 1 value
( Array of id, string (key), 1 or 2 variable ) => Array of id
*/

const filterFunc = (ar, k, ...v) => {
    let a = ar.map( i => [ i , productList[i-1][k] ] );
    switch (k) {
        case 'size':  // array
            a = a.filter( i => i[1].includes(Number(v[0])) );
            break;
        case 'type':
        case 'b_id':
            a = a.filter( i => i[1] == v[0] );
            break;
        case 'price':
            a = a.filter( i => i[1] >= v[0] && i[1] <= v[1]);
    };
    return a.map( i => i[0] );
};

/* 
sort price or view
( Array of id, 'price' or 'view' (key), true(ascending) or false(descending) ) => Array of id
*/

const sortFunc = (ar, k, o) => {
    let a = ar.map( i => [ i , productList[i-1][k] ] );
    if (o) { 
        a.sort( (x, y) => x[1] - y[1] );
    } else {
        a.sort( (x, y) => y[1] - x[1] );
    };
    return a.map( i => i[0] );
};


/*
m = minute
server required for cookie to work in Chrome

setCookie("username", "JohnDoe", 7);
getCookie("username");
*/

const setCookie = (name, value, m) => {
    let date = new Date();
    date.setTime(date.getTime() + (m * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const getCookie = name => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};



/*
處理 尺碼 的小格子
s = 格子們的selector
*/

const sizeBoxes = s => {
    window.sValue = '';
    const sBox = document.querySelectorAll(s);
    sBox.forEach( b => {
        b.addEventListener('click', _ => {
            sBox.forEach(bb => { bb.style.backgroundColor = ""; });
            if (sValue == b.innerText) {
                b.style.backgroundColor = "";
                sValue = '';
            } else {
                b.style.backgroundColor = "grey";
                sValue = b.innerText;
            }
        });
    });
};