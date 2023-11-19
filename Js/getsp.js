fetch('../Json/sanpham.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("products", JSON.stringify(data));
        
    }) 
    .catch(error => console.error('Lỗi: ' + error));
    
function loadProducts(startIndex,endIndex) {
    const products = JSON.parse(localStorage.getItem("products"));
    
    if (products && products.products) {
        const productList = document.getElementById('productList');
        var str = "";
    
        // Giới hạn số lượng sản phẩm hiển thị
        const Hienthi = products.products.slice(startIndex, endIndex);
    
        Hienthi.forEach(product => {
            str += `
            <div class="product  col-md-3 col-sm-6 col-11" data-loai="${product.loai}" data-kieudang="${product.kieudang}" data-vatlieu="${product.vatlieu}" data-giaban="${product.giaban}" onclick="chuyenHuongDenTrangKhac(${product.id})">
                <div>
                    <img src="${product.image_url}" alt="">
                </div>
                <div>
                    <div class="name"><header>${product.name}</header></div>
                    <div class="price">
                        <span class="old-price">${product["old-price"]}</span>
                        <span class="new-price float-end">${product["new-price"]}<span> VND</span></span>
                    </div>    
                    <button onclick="addToCart({id: ${product.id}, image: '${product.image_url}', price: ${product["new-price"]}, name: '${product.name}'})"
                    class="btn btn-dark btn-outline-info">Thêm Vào Giỏ</button>
                </div>
            </div>`;
        });
    
        productList.innerHTML = str;

        calculateTotalPrice();
    } else {
        alert('Dữ liệu sản phẩm không tồn tại trong localStorage.');
    }
}
function chuyenHuongDenTrangKhac(id) {
    if (id == "2") {
        window.location.href = "../Daychuyen1.html";
    }
    if (id == "52") {
        window.location.href = "../Vongtay1.html";
    }
}

  
function calculateTotalPrice() {
    const priceElements = document.querySelectorAll(".new-price, .old-price");
    const currencyOptions = { style: 'currency', currency: 'VND' };

    for (const element of priceElements) {
        const price = parseFloat(element.textContent.replace(/\D/g, ''));
        element.textContent = price.toLocaleString('vi-VN', currencyOptions);
    }
    // replace(/\D/g, ''): thay thế tất cả các ký tự không phải là số bằng một chuỗi rỗng /\D /
    // g là một cờ (global)., biểu thức chính quy (regex) dùng để tìm tất cả các ký tự không phải số (\D) trong chuỗi,
 
}


 
  
  