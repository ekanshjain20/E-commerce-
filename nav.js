const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo shantinath.png" class="brand-logo" alt="" width="90px" height="60px">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Appliances</a></li>
        <li class="link-item"><a href="#" class="link">Furniture</a></li>
        <li class="link-item"><a href="#" class="link">Security</a></li>
        <li class="link-item"><a href="#" class="link">Office</a></li>
        </ul>
    `;
}

createNav();