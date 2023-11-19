
var list = JSON.parse(localStorage.getItem('cart'));
function LoadDatatt() {
  var str = "";
  var total = 0;
  for (var x of list) { 
    total += x.price * x.quantity;   
      str +=`<tr>
              <td class="img-sp">
                <img src="${x.image}" style="max-width: 100%; height: 100px;">
              </td>
              <td class="name">${x.name}</td>
              <td class="price">${x.price}</td>
              <td class="soluong">
                <input readonly min="1" value="${x.quantity}" style="width: 50px;" data-index="${x.id}" data-index="${x.id}">
              </td>
            </tr>`;
    }
    
    var formattedTotal = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById("spTong2").textContent = formattedTotal;
    document.getElementById("listCart2").innerHTML = str;   
}
LoadDatatt();

