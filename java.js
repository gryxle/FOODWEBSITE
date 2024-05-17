document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("productModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', () => {
            const imgSrc = product.querySelector('img').src;
            const title = product.querySelector('h3').textContent;
            const price = product.querySelector('.price').textContent;

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalPrice.textContent = price;

            modal.style.display = "block";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
