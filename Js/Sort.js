function sortProducts() {
    var selectedValue = document.getElementById("priceFilter").value;

    if(selectedValue==="All") {
        resetProducts();}
    else if (selectedValue === "lowToHigh") {
        sortByPriceLowToHigh();
    } else if (selectedValue === "highToLow") {
        sortByPriceHighToLow();
    // } else if (selectedValue === "newest") {
    //     sortByNewest();
    }
}
var initialProducts = [];

document.addEventListener("DOMContentLoaded", function () {
    var productList = document.getElementById("productList");
    var productItems = Array.from(productList.querySelectorAll(".product"));

    // Lưu thứ tự ban đầu của sản phẩm
    initialProductOrder = productItems.slice();
});


function resetProducts() {  
    var productList = document.getElementById("productList");
    

    productList.innerHTML = '';
    
    // Thêm lại sản phẩm theo thứ tự ban đầu
    initialProductOrder.forEach(function (item) {
        productList.appendChild(item);
        item.style.display="block";
    });
}
// Hàm để sắp xếp sản phẩm theo giá thấp đến cao
function sortByPriceLowToHigh() {
    var productList = document.getElementById("productList");
    var productItems = Array.from(productList.querySelectorAll(".product"));

    productItems.sort(function (a, b) {
        var priceA = parseFloat(a.querySelector(".new-price").textContent);
        var priceB = parseFloat(b.querySelector(".new-price").textContent);
        return priceA - priceB;
    });

    
    productList.innerHTML = '';

    // Thêm lại sản phẩm đã sắp xếp
    productItems.forEach(function (item) {
        productList.appendChild(item);
        item.style.display="block";
    });
}

function sortByPriceHighToLow() {
    var productList = document.getElementById("productList");
    var productItems = Array.from(productList.querySelectorAll(".product"));

    productItems.sort(function (a, b) {
        var newPriceElementA = a.querySelector(".new-price");
        var newPriceElementB = b.querySelector(".new-price");

        if (newPriceElementA && newPriceElementB) {
            var priceA = parseFloat(newPriceElementA.textContent);
            var priceB = parseFloat(newPriceElementB.textContent);
            return priceB - priceA;
        } else {
            // Xử lý trường hợp không tìm thấy '.new-price'
            return 0;
        }
    });

    productList.innerHTML = '';

    // Thêm lại sản phẩm đã sắp xếp
    productItems.forEach(function (item) {
        productList.appendChild(item);
        item.style.display="block";
    });
}

//----------------------------------------------------------------//

var forms = document.querySelectorAll('form');

//sự kiện change cho mỗi form
forms.forEach(function (form) {
    form.addEventListener('change', function (event) {
        var checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            if (checkbox !== event.target) {
                checkbox.checked =false;
                
            }
        });
    });
});


