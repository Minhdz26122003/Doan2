
document.addEventListener("DOMContentLoaded", function () {
    var loaitrangsucCheckbox = document.querySelectorAll('input[name="loaitrangsuc"]');
    var vatlieuCheckbox = document.querySelectorAll('input[name="vatlieu"]');
    var giabanCheckbox = document.querySelectorAll('input[name="giaban"]');

    loaitrangsucCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
           
            filterByLoai(checkbox.value);
        });
    });

    vatlieuCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
    
            filterByVatLieu(checkbox.value);
        });
    });
   
    giabanCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
     
            filterByGiaBan(checkbox.value);
        });
    });
});
function filterByLoai(loai) {
    var products = document.querySelectorAll(".lock");
    products.forEach(function (product) {
        if (loai === "Tất cả" || product.dataset.loai === loai) {
            product.style.display = "block";
         
        } else {
            product.style.display = "none";
        }
    });
}

// Hàm lọc sản phẩm dựa trên vật liệu
function filterByVatLieu(vatlieu) {
    var products = document.querySelectorAll(".lock");
    products.forEach(function (product) {
        if (vatlieu === "Tất cả" || product.dataset.vatlieu === vatlieu) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Hàm lọc sản phẩm dựa trên giá bán
function filterByGiaBan(minGia) {
    var products = document.querySelectorAll(".lock");
    products.forEach(function (product) {
        var giaBan = parseFloat(product.dataset.giaban);
        if (giaBan >= minGia) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}