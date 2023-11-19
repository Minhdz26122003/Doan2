fetch('../Json/loaisanpham.json')
    .then(response => response.json())
    .then(data => {

      const selectElementlsp = document.getElementById('loaisped');
      if (Array.isArray(data.Loaisanpham)) {
        data.Loaisanpham.forEach(item => {
          const optionlsp = document.createElement('option');
          optionlsp.value = item.tenloai; 
          optionlsp.text = item.tenloai;
          selectElementlsp.appendChild(optionlsp);
        });
      } else {
        console.error('Dữ liệu từ tệp JSON không phải là mảng.');
      }
    })
    .catch(error => console.error('Lỗi: ' + error));
       

fetch('../Json/Nhacungcap.json')
  .then(response => response.json())
  .then(data => {

    const selectElement = document.getElementById('ncced');
    if (Array.isArray(data.Nhacungcap)) {
      data.Nhacungcap.forEach(item => {
        const optionElement = document.createElement('option');
        optionElement.value = item.tenncc;
        optionElement.text = item.tenncc;
        selectElement.appendChild(optionElement);
      });
    } else {
      console.error('Dữ liệu từ tệp JSON không phải là mảng.');
    }
  })
  .catch(error => console.error('Lỗi: ' + error));



function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products"));
    
    if (products && products.products) {
        const productList = document.getElementById('productListadmin');
        var str = "";
    
        products.products.forEach((product, index) => {
            str += `
            <tr>           
            <td class="idsp">${product.id}</td>
            <td class="namesp">${product.name}</td>
            <td class="img-sp">
                <img src="${product.image_url}" alt="" style="width: 200px;height:auto;">
            </td>
            <td class="soluongsp" style="text-align: center;">${product["soluongsp"]}</td>
            <td class="new-price" style="text-align: right;">${product["new-price"]}</td>
            <td class="tenlsp">${product.tenloai}</td>
            <td class="Ncc">${product.tenncc}</td>
            <td class="">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal_SPsua" onclick="getdata(${index})" event.preventDefault();> 
                    <i class="fas fa-edit" title="Sửa"></i>                           
                </button>
            <div class="modal fade " id="Modal_SPsua" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5"><i class="fas fas fa-boxes"></i> Sửa thông tin sản phẩm </h1>
                        <button type="button" id="btn-dm" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
        
                    <div class="modal-body">
                        <div class="container float-start">
                            <div class="row">
                                <div class="Proc-Infor col-12">
                                    <form action="#">
                                        <div class="mb-2">
                                            <label>Loại sản phẩm:</label>
                                            <div>
                                                <select class="form-select" id="loaisped">
                                                  
                                                </select>
                                            </div>
        
                                        </div>
                                        <div class="mb-2">
                                            <label>Nhà Cung Cấp:</label>
                                            <div>
                                                <select class="form-select" id="ncced">
                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <label>Mã sản phẩm:</label>
                                            <input class="form-control" type="text" id="maspedit" placeholder="Nhập mã sản phẩm..."
                                                required>
                                        </div>
                                        <div class="mb-2">
                                            <label>Tên sản phẩm:</label>
                                            <input class="form-control" type="text" id="tenspedit"
                                                placeholder="Nhập tên sản phẩm..." required>
                                        </div>
                                        <div class="mb-2">
                                            <label>Hình ảnh:</label>
                                        </div>
                                        <div class="mb-2">
                                            <input type="file" id="imginputed" accept="image/*" onchange="previewImage()" required>
                                            <div>
                                                <span class="float-start">View:</span>
                                                <img class="mx-3 my-3 viewimged" style="max-width:180px;max-height:180px">
                                                                                            
                                            </div>
                                        </div>
        
                                        <div class="mb-2">
                                            <label>Số lượng:</label>
                                            <input class="form-control" min="0" type="number" id="slspedit"
                                                placeholder="Nhập số lượng..." required>
                                        </div>
                                        <div class="mb-2">
                                            <label>Giá bán:</label>
                                            <input class="form-control" min="0" type="number" id="giabanedit"
                                                placeholder="Nhập giá bán..." required>
                                        </div>
        
                                        <button type="submit" class="btn btn-primary" onclick="SuaSP()" >Sửa sản phẩm</button>
        
                                        <hr>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <button class="btn btn-success"> 
                <i class="fas fa-trash-alt" title="Xóa" onclick="XoaSP('${product.id}')"></i>
            </button>    
               
            </td>
        </tr>`;                             
        });
    
        productList.innerHTML = str;

        calculateTotalPrice();
    } else {
        alert('Dữ liệu sản phẩm không tồn tại trong localStorage.');
    }
}
  
function calculateTotalPrice() {
    const priceElements = document.querySelectorAll(".new-price");
    const currencyOptions = { style: 'currency', currency: 'VND' };

    for (const element of priceElements) {
        const price = parseFloat(element.textContent.replace(/\D/g, ''));
        element.textContent = price.toLocaleString('vi-VN', currencyOptions);
    }
    // replace(/\D/g, ''): thay thế tất cả các ký tự không phải là số bằng một chuỗi rỗng /\D /
    // g là một cờ (global)., biểu thức chính quy (regex) dùng để tìm tất cả các ký tự không phải số (\D) trong chuỗi,
 
}

function loadOptionLSP() {
    fetch('../Json/loaisanpham.json')
    .then(response => response.json())
    .then(data => {

      const selectElementlsp = document.getElementById('loaisp');

      if (Array.isArray(data.Loaisanpham)) {
        data.Loaisanpham.forEach(item => {
          const optionlsp = document.createElement('option');
          optionlsp.value = item.tenloai; 
          optionlsp.text = item.tenloai;
          selectElementlsp.appendChild(optionlsp);
        });
      } else {
        console.error('Dữ liệu từ tệp JSON không phải là mảng.');
      }
    })
    .catch(error => console.error('Lỗi: ' + error));
       
}
function loadOptionLNCC() {
    fetch('../Json/Nhacungcap.json')
    .then(response => response.json())
    .then(data => {

      const selectElementlsp = document.getElementById('ncc');

      if (Array.isArray(data.Nhacungcap)) {
        data.Nhacungcap.forEach(item => {
          const optionlsp = document.createElement('option');
          optionlsp.value = item.tenncc; 
          optionlsp.text = item.tenncc;
          selectElementlsp.appendChild(optionlsp);
        });
      } else {
        console.error('Dữ liệu từ tệp JSON không phải là mảng.');
      }
    })
    .catch(error => console.error('Lỗi: ' + error));
       
}


//----------------------------------------------------------------//
function NhapMoiSP() {
    document.getElementById("maspedit").value ='';
    document.getElementById("tenspedit").value ='';
    document.getElementById("loaisp").value ='';
    document.getElementById("ncc").value ='';
    document.getElementById("imginput").value ='';
    document.getElementById("slspedit").value ='';
    document.getElementById("giabanedit").value ='';
}
function getdata(index) {
    var list = JSON.parse(localStorage.getItem("products")) || { products: [] };    
    var arrayToModify = list.products || []
    if (index >= 0 && index < arrayToModify.length) {
        var selectedSP = arrayToModify[index];
        
        var masp = selectedSP.id;
        var tensp = selectedSP.name;
        var img = selectedSP.image_url;
        var loaisp = selectedSP.idloai;
        var ncc = selectedSP.idncc;
        var soluongsp = selectedSP.soluongsp;
        var giaban = selectedSP["new-price"];

        document.getElementById("maspedit").readOnly = true;
        document.getElementById("maspedit").value = masp;
        document.getElementById("tenspedit").value = tensp;
        document.getElementById("loaisp").value = loaisp;
        document.getElementById("ncc").value = ncc;

        document.getElementById("slspedit").value = soluongsp;
        document.getElementById("giabanedit").value = giaban;
    }
}
var selectedImageSrc;

function getimg(){
    
}
var imageInput = document.getElementById("imginput");//hàm chọn một tệp hình ảnh và hiển thị demo ảnh đó.
imageInput.addEventListener("change", function (event) {//khi thay đổi dữ liệu trong truòng input
  var file = event.target.files[0];//đoc tệp
  var reader = new FileReader();
  reader.onload = function (e) {
    var imagePreview = document.getElementById("viewimg");
    imagePreview.src = e.target.result; //Gán đường dẫn của hình ảnh được đọc vào thuộc tính src của thẻ <img>, từ đó hiển thị hình ảnh trước.
    selectedImageSrc = imagePreview.src;// Gán giá trị src vào biến selectedImageSrc
  
  };
  reader.readAsDataURL(file);
});
var number = /^[0-9]+$/;
function ThemSP() {    
    var list = JSON.parse(localStorage.getItem("products")) || { products: [] };

    var maspip =  document.getElementById("masp").value ;
    var tenspip =  document.getElementById("tensp").value ;
    var loaisp = document.getElementById("loaisp").value;
    var ncc = document.getElementById("ncc").value ; 
    var imgInput = document.getElementById("imginput");
    var soluongsp =  document.getElementById("slsp").value ;
    var giaban = document.getElementById("giaban").value;

    // Kiểm tra nếu không có hình ảnh được chọn
    var file = imgInput.files[0];//đoc file trong input
    var reader = new FileReader();
    if (maspip == null || maspip === "") {
        var d = new Date();
        maspip = d.getTime().toString();
    }
    if (tenspip == null || tenspip == "") {
        alert("Tên sản phẩm không được để trống! Vui lòng nhập lại!");
        return false;
    }
    if (loaisp == null || loaisp === "") {
        alert("Vui lòng chọn loại sản phẩm!");
        return false;
    }
    if (ncc == null || ncc === "") {
        alert("Vui lòng chọn nhà cung cấp!");
        return false;
    }
    if (imgInput.files.length === 0) {
        alert("Ảnh không được để trống! Vui lòng nhập lại!");
        return false;
    }
    if (!soluongsp.match(number) || soluongsp <= 0) {
        alert("Số lượng sản phẩm phải là số dương! Vui lòng nhập lại!");
        return false;
    }
    if (!giaban.match(number) || (giaban) <= 0) {
        alert("Giá bán sản phẩm phải là số thực dương! Vui lòng nhập lại!");
        return false;
    }

    // Hàm callback khi đọc hình ảnh hoàn thành
    reader.onload = function (e) {
        var imgDataUrl = e.target.result;

        var products = {
            "id": maspip,
            "name": tenspip,
            "tenloai": loaisp,
            "tenncc": ncc,
            "image_url": imgDataUrl, // Sử dụng đường dẫn hình ảnh từ FileReader
            "soluongsp": parseInt(soluongsp),
            "new-price": giaban
        };   

        list.products.push(products);
        localStorage.setItem("products", JSON.stringify(list));    
   
        alert("Đã thêm thành công!");
        loadProducts(); 
    };

    reader.readAsDataURL(file);
}

function XoaSP(masp) {
    var list = JSON.parse(localStorage.getItem("products")) || { products: [] };

    // Chắc chắn rằng list là một mảng
    var arrayToModify = list.products || [];

    if (confirm("Bạn chắc chắn muốn xóa!")) {
        var index = arrayToModify.findIndex(x => x.id == masp);
        if (index >= 0) {
            arrayToModify.splice(index, 1);
        }
        alert("Đã xóa thành công!");
        localStorage.setItem('products', JSON.stringify(list));
    }
    loadProducts(); 
}
var selectedImageSrced; // Khai báo biến để lưu đường dẫn của hình ảnh được chọn

var imageInputed = document.getElementById("imginputed");
imageInputed.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagePreviewed = document.getElementById("viewimged");
        imagePreviewed.src = e.target.result;
        selectedImageSrced = imagePreviewed.src;
        alert(selectedImageSrced);
    };
    reader.readAsDataURL(file);
});

function SuaSP() {
    var list = JSON.parse(localStorage.getItem("products")) || { products: [] };
    var arrayToModify = list.products || []; // Sửa tên mảng từ "Nhacungcap" thành "products"
    var masped = document.getElementById("maspedit").value;
    var tensped = document.getElementById("tenspedit").value;
    var loaied = document.getElementById("loaisped").value;
    var nccde = document.getElementById("ncced").value;
    var imgInputed = document.getElementById("imginputed");
    var soluongsped = document.getElementById("slspedit").value;
    var giabaned = document.getElementById("giabanedit").value;

    var file = imgInputed.files[0];
    var reader = new FileReader();

    if (tensped.trim() === "") {
        alert("Tên sản phẩm không được để trống! Vui lòng nhập lại!");
        return false;
    }

    if (loaied.trim() === "") {
        alert("Vui lòng chọn loại sản phẩm!");
        return false;
    }

    if (nccde.trim() === "") {
        alert("Vui lòng chọn nhà cung cấp!");
        return false;
    }

    if (imgInputed.files.length === 0) {
        alert("Ảnh không được để trống! Vui lòng nhập lại!");
        return false;
    }

    if (!soluongsped.match(number) || soluongsped <= 0) {
        alert("Số lượng sản phẩm phải là số dương! Vui lòng nhập lại!");
        return false;
    }

    if (!giabaned.match(number) || parseFloat(giabaned) <= 0) {
        alert("Giá bán sản phẩm phải là số thực dương! Vui lòng nhập lại!");
        return false;
    }

    reader.onload = function (e) {
        var imgDataUrl = e.target.result;
        var Index = arrayToModify.findIndex(x => x.id == masped);
        if (Index >= 0 && Index < arrayToModify.length) {
            arrayToModify[Index].name = tensped;
            arrayToModify[Index].tenloai = loaied;
            arrayToModify[Index].tenncc = nccde;
            arrayToModify[Index].image_url = imgDataUrl;
            arrayToModify[Index].soluongsp = soluongsped;
            arrayToModify[Index]['new-price'] = giabaned;
          

            localStorage.setItem('products', JSON.stringify(list));
            $('#Modal_SPsua').on('hidden.bs.modal', function () {
                alert("Sửa thành công");
                loadProducts();
            });

            $('#Modal_SPsua').modal('hide');
        } else {
            alert("Không tìm thấy trong danh sách.");
        }
    };

    reader.readAsDataURL(file);
}
