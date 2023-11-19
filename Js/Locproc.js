document.addEventListener("DOMContentLoaded", function () {
    var kieudangCheckbox = document.querySelectorAll('input[name="kieudang"]');
    var vatlieuCheckbox = document.querySelectorAll('input[name="vatlieu"]');
    var giabanCheckbox = document.querySelectorAll('input[name="giaban"]');

    kieudangCheckbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
           
            filterByKieudang(checkbox.value);
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
function filterByKieudang(kieudang) {
    var products = document.querySelectorAll(".product");
    products.forEach(function (product) {
        if (kieudang === "Tất cả" || product.dataset.kieudang === kieudang) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterByVatLieu(vatlieu) {
    var products = document.querySelectorAll(".product");
    products.forEach(function (product) {
        if (vatlieu === "Tất cả" || product.dataset.vatlieu === vatlieu) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


function filterByGiaBan(minGia) {
    var products = document.querySelectorAll(".product");
    products.forEach(function (product) {
        var giaBan = parseFloat(product.dataset.giaban);
        if (giaBan >= minGia) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
