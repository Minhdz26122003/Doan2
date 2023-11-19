
function LoadData() {
  var str = "";
  var list = JSON.parse(localStorage.getItem('cart'));
  for (var x of list) {   
      str += `<tr>
              <td class="img-sp">
                <img src="${x.image}" style="max-width: 110%; height: 100px;">
              </td>
              <td class="name">${x.name}</td>
              <td class="price">${x.price}</td>
              <td class="soluong">
                <input class="cart-quantity-input" type="number" min="1" value="${x.quantity}" style="width: 50px;" data-index="${x.id}" onchange="updateQuantity(this)">
              </td>
              <td class="btn-xoa">
                <button class="btn btn-danger" type="button" data-index="${x.id}" onclick="Xoa(${x.id})">Xóa</button>
              </td>

            </tr>`;
    }
    calculateTotalPrice();
    document.getElementById("listCart").innerHTML = str; 
}


function addToCart(item) {
  // debugger;
  item.quantity = 1;
  var list;
  if (localStorage.getItem('cart') == null) {
      list = [item];
  } else {
      list = JSON.parse(localStorage.getItem('cart')) || [];
      let ok = true;
      for (let x of list) {
          if (x.id == item.id) {
              alert("Mặt hàng đã có trong giỏ !");
              x.quantity += 1;
              ok = false;
              break;
          }
      }
      if (ok) {
          list.push(item);
      }
  }

  localStorage.setItem('cart', JSON.stringify(list)); 
  LoadData();
  alert("Đã thêm giỏ hàng thành công!");
  event.stopPropagation();
}
function Xoa(id) {
  
  var list = JSON.parse(localStorage.getItem('cart')) || [];
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(list)); 
        LoadData(); 
    } 
}



function calculateTotalPrice() {
  var list = JSON.parse(localStorage.getItem('cart')) || [];
  var total = 0;

  for (var i = 0; i < list.length; i++) {
      var item = list[i];
      total += item.price * item.quantity;
  }
  var formattedTotal = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  
  document.getElementById("spTong").textContent = formattedTotal;
}

function updateQuantity(inputElement) {
  var list = JSON.parse(localStorage.getItem('cart')) || [];
  var productId = inputElement.getAttribute('data-index');
  var newQuantity = parseInt(inputElement.value);

  //cập nhật số lượng
  for (var i = 0; i < list.length; i++) {
    if (list[i].id == productId) {
      list[i].quantity = newQuantity;
      break;
    }
  }

  localStorage.setItem('cart', JSON.stringify(list));
  calculateTotalPrice(); 
}
