const PASSWORD = 'hi';

// 如果沒有server，就沒有cookie，「錯５次」就不會生效

const checkPassword = _ => {
    const t = document.querySelector("input[type='password']");
    let wrong = getCookie("adminWrongPw");

    if ( typeof wrong === 'undefined' ) {
        wrong = 0;
    } else wrong = Number(wrong);

    if ( wrong >= 5 ) {
        document.getElementsByTagName('code')[0].innerText = '密碼輸入錯誤達5次，請等5分鐘後再試';
    } else if ( t.value == PASSWORD ) {
        setCookie("adminWrongPw", 0, 0);
        window.location.href = 'admin.html';
    } else if ( wrong < 4 ) {
        setCookie("adminWrongPw", wrong + 1 , 5);
        document.getElementsByTagName('code')[0].innerText = '密碼輸入錯誤，請重新輸入';
        t.value = '';
    } else if ( wrong == 4 ) {
        setCookie("adminWrongPw", wrong + 1 , 5);
        document.getElementsByTagName('code')[0].innerText = '密碼輸入錯誤達5次，請等5分鐘後再試';
        t.value = '';
    }
};

// 點確定 或 按鍵盤Enter
const b = document.getElementsByTagName('button')[0];
b.addEventListener('click', checkPassword);
document.addEventListener('keydown', ev => {
    if ( ev.key === 'Enter' ) checkPassword();
});