let h = `
        <div>
            <a href='index.html'><div class="logo">
                <img src="img/logo.jpg" alt="logo" width="50px" height="50px">
                <p>SHOOLAY</p>
            </div></a>

            <span id="hLogReg"><span>
                <img src="img/login.png" alt="">
                <a href="login.html">登入</a>&nbsp;/
                <a href="register.html">註冊</a>
            </span></span>

        </div>

        <nav>
            <span>
                <a href='search.html?type=1'>輕便鞋</a>
                <a href='search.html?type=2'>正式鞋</a>
                <a href='search.html?type=3'>涼鞋及拖鞋</a>
                <a href='search.html?type=4'>運動鞋</a>
            </span><br>
            <span>
                <a href='search.html?b_id=1'>Timberland</a>
                <a href='search.html?b_id=2'>Vans</a>
                <a href='search.html?b_id=3'>BOSS</a>
                <a href='search.html?b_id=4'>ADIDAS</a>
                <a href='search.html?b_id=5'>ZARA</a>
                <a href='search.html?b_id=6'>Reebok</a>
                <a href='search.html?b_id=7'>Projet1826</a>
                <a href='search.html?b_id=8'>WALK London</a>
            </span>
        </nav>
        <hr>
`;
let f = `
        <hr>
        <div>
            付款方法
            <img src="img/icon_visa.png" alt="">
            <img src="img/icon_mastercard.png" alt="">
        </div>
        <div class="ft2">
            <a href="contact.html">聯絡</a>
            |
            <a href="question.html">常見問題</a>
            |
            <a href="about.html">關於</a>
            |
            <a href="privacy.html">私隱</a>
            |
            <a href="terms-of-use.html">服務條款</a>

            © 2024 shoolay
            <span><a href="admin_login.html">Admin</a></span>
        </div>
`;
document.getElementsByTagName('header')[0].innerHTML = h;

document.getElementsByTagName('footer')[0].innerHTML = f;


// icon

const link = document.querySelector('link[rel*="icon"]') || document.createElement('link');
[link.rel, link.href] = ['icon', 'img/shoephone.jpg'];
document.getElementsByTagName('head')[0].appendChild(link);
