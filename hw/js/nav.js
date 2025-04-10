'use strict';

// small screen right-nav-bar display
const rListBtn = document.getElementById('rListBtn');
const nRList = document.getElementById('navRightList');
rListBtn.addEventListener('click', () => {
    rListBtn.style.display = 'none';
    nRList.style.right = '0';
});
document.getElementById('nrlBack').addEventListener('click', () => {
    rListBtn.style.display = 'block';
    nRList.style.right = '-100vw';
});
