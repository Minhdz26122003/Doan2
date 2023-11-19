fetch('../Json/loaisanpham.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("Loaisanpham", JSON.stringify(data));
        
    }) 
    .catch(error => console.error('Lỗi: ' + error));
    
    function loadTypeProducts() {
        const Lsps = JSON.parse(localStorage.getItem("Loaisanpham"));
        if (Lsps && Lsps.Loaisanpham) {
            const LsptList = document.getElementById('Lsplist');
            var str = "";
    
            Lsps.Loaisanpham.forEach((Lsp, index) => {
                str += `
                    <tr>
                        <td class="idlsp">${Lsp.idloai}</td>
                        <td class="tenlsp">${Lsp.tenloai}</td>
                        <td class="text-center">                             
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal_LSPsua" onclick="Getdata(${index}); event.preventDefault();">
                            <i class="fas fa-edit" title="Sửa"></i>                           
                        </button>
                    
                                                <div class="modal fade" id="Modal_LSPsua" aria-hidden="true">
                                                    <div class="modal-dialog modal-xl">
                                                      <div class="modal-content">
                                                        <div class="modal-header">
                                                          <h1 class="modal-title fs-5"><i class="fas fas fa-boxes"></i>Nhập thông tin loại sản phẩm </h1>
                                                          <button type="button" id="btn-dm" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                
                                                        <div class="modal-body">
                                                            <div class="container ">
                                                                <div class="row">
                                                                    <div class="TypeProc-Infor col-12">
                                                                        <form>
                                                                            <div class="mb-2">
                                                                                <label>Mã loại sản phẩm:</label>
                                                                                <input class="form-control" type="text" id="maloaiedit" placeholder="Nhập mã loại sản phẩm..." required>
                                                                            </div>
                                                                            <div class="mb-2">
                                                                                <label>Tên loại sản phẩm:</label>
                                                                                <input class="form-control" type="text" id="tenloaiedit" placeholder="Nhập tên loại sản phẩm..." required>
                                                                            </div>                                                                    
                                                                            <button type="submit" class="btn btn-primary" onclick="SuaLoaiSanPham()">Sửa loại sản phẩm</button>
                                                                            <hr>
                                                                        </form>
                                                                    </div>                       
                                                                </div>
                                                            </div>                
                                                        </div>                                       
                                                      </div>
                                                    </div>
                                                </div>
                            <button class="btn btn-success" onclick="XoaLoaiSanPham('${Lsp.idloai}')">
                                <i class="fas fa-trash-alt" title="Xóa"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
    
            LsptList.innerHTML = str;
        } else {
            alert('Dữ liệu loại sản phẩm không tồn tại trong localStorage.');
        }
    }

var list = JSON.parse(localStorage.getItem("Loaisanpham")) || { Loaisanpham: [] }; 

function Getdata(index) {
    var arrayToModify = list.Loaisanpham || [];
    if (index >= 0 && index < arrayToModify.length) {
        var selectedLoai = arrayToModify[index];
        
        var maloai = selectedLoai.idloai;
        var tenloai = selectedLoai.tenloai;

        document.getElementById("maloaiedit").readOnly=true;
        document.getElementById("maloaiedit").value = maloai;

        document.getElementById("tenloaiedit").value = tenloai;
    }
    
}


    function NhapMoiLSP() {
        document.getElementById('maloai').value = '';
        document.getElementById('tenloai').value = '';
    }
    function ThemLoaiSanPham() {   
        var maloai = document.getElementById("maloai").value;
        var tenloai = document.getElementById("tenloai").value;   
        if (maloai == null || maloai === "") {
            var d = new Date();
            maloai = "L" + d.getTime();
        }
        if (tenloai == null || tenloai == "") {
            alert("Tên loại không được để trống! Vui lòng nhập lại!");
            return false;
        }
        var Loaisanpham = {
            "idloai": maloai,
            "tenloai": tenloai
        };   
        list.Loaisanpham.push(Loaisanpham);
    
        localStorage.setItem("Loaisanpham", JSON.stringify(list));    
        alert("Đã thêm thành công!");
        loadTypeProducts(); 
    }

    function XoaLoaiSanPham(maloai) {

        // Chắc chắn rằng list là một mảng
        var arrayToModify = list.Loaisanpham || [];
    
        if (confirm("Bạn chắc chắn muốn xóa!")) {
            var index = arrayToModify.findIndex(x => x.idloai == maloai);
            if (index >= 0) {
                arrayToModify.splice(index, 1);
            }
           
            localStorage.setItem('Loaisanpham', JSON.stringify(list));
        }
        loadTypeProducts(); 
    }
    function SuaLoaiSanPham() {
        var arrayToModify = list.Loaisanpham || [];
        var tenloaiMoi = document.getElementById("tenloaiedit").value;
        var maloai = document.getElementById("maloaiedit").value;
    
        if (tenloaiMoi == null || tenloaiMoi == "") {
            alert("Tên loại không được để trống! Vui lòng nhập lại!");
            return false;
        }
    
        var Index = arrayToModify.findIndex(x => x.idloai == maloai);
    
        if (Index >= 0 && Index < arrayToModify.length) {
            arrayToModify[Index].tenloai = tenloaiMoi;
            localStorage.setItem('Loaisanpham', JSON.stringify(list));                                
            
            $('#Modal_LSPsua').on('hidden.bs.modal', function () {
                alert("Sửa thành công");
                loadTypeProducts();
            });
    
            // Ẩn modal
            $('#Modal_LSPsua').modal('hide');
           
        } else {
            alert("Không tìm thấy sản phẩm cần sửa trong danh sách.");
        } 
        
    }
    
    
    
    
    
    
    

           