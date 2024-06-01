const colors_btn = document.querySelectorAll('button')
const img = document.querySelector('.macs')
const iphones = {
    white: "https://brostore.uz/cdn/shop/files/4_c48f241b-ea94-4f3f-bbeb-2a3be4200c76.png?v=1700301793",
    space_grey: "https://my-store.by/wp-content/uploads/2022/03/mbp14-spacegray-select-202110.jpg"
}

colors_btn.forEach(btn => {
    btn.onclick = () => {
        const color = btn.innerText.toLowerCase()

        img.style.backgroundImage = `url(${iphones[color]})` 
        
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.header22');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});


const h1 = document.querySelectorAll('h1[data-price]')
const span = document.querySelector('.text span')
const org_price = 1000

h1.forEach(h1 => {
    h1.onclick = () => {
        const addPrice = +btn.getAttribute('data-price')

        span.innerText = org_price + addPrice
    }
})
