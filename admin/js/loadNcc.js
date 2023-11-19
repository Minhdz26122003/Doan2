fetch('../Json/Nhacungcap.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("Nhacungcap", JSON.stringify(data));
        
    }) 
    .catch(error => console.error('Lỗi: ' + error));
    
    function LoadNcc() {
        const Ncc = JSON.parse(localStorage.getItem("Nhacungcap"));
        if (Ncc && Ncc.Nhacungcap) {
            const Ncclist = document.getElementById('Nhacungcaplist');
            var str = "";
            Ncc.Nhacungcap.forEach((ncc, index) => {
                str += `
                <tr>              
                <td class="idncc">${ncc.idncc}</td>
                <td class="namencc">${ncc.tenncc}</td>
                
                <td class="sdtncc">${ncc.sdtncc}</td>
                <td class="emailncc">${ncc.emailncc}</td>
                <td class="diachincc">${ncc.diachincc}</td>
               
                <td style="text-align: center;">                                  
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Modal_NCCsua" onclick="Getdulieu(${index})" event.preventDefault();>
                        <i class="fas fa-edit" title="Sửa"></i>
                    </button>
            
                <div class="modal fade" id="Modal_NCCsua" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5"><i class="fas fas fa-boxes"></i> Nhập thông tin nhà cung cấp</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="Ncc-Infor col-12">
                                            <form action="#">
                                                <div class="mb-2">
                                                    <label>Mã Nhà Cung Cấp:</label>
                                                    <input class="form-control" type="text" id="manccedit"
                                                        placeholder="Nhập mã nhà cung cấp" required>
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tên Nhà Cung Cấp:</label>
                                                    <input class="form-control" type="text" id="tennccedit"
                                                        placeholder="Nhập tên nhà cung cấp" required>
                                                </div>
                                                <div class="mb-2">
                                                    <label>Số Điện Thoại:</label>
                                                    <input class="form-control" type="text" id="sdtnccedit" placeholder="Nhập số điện thoại..."
                                                        required>
                                                </div>
                                                <div class="mb-2">
                                                    <label>Email:</label>
                                                    <input class="form-control" type="email" id="emailnccedit" placeholder="Nhập email..."
                                                        required>
                                                </div>
                                                <div class="mb-2">
                                                    <label>Địa Chỉ:</label>
                                                    <input class="form-control" type="text" id="diachinccedit" placeholder="Nhập địa chỉ..."
                                                        required>
                                                </div>
                
                                                <button type="submit" class="btn btn-primary" onclick="SuaNCC()">Sửa nhà cung cấp</button>
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
                        <i class="fas fa-trash-alt" title="Xóa" onclick="XoaNCC('${ncc.idncc}')"></i>
                    </button>
                </td>
            </tr>                                                           
                `;
            });
            Ncclist.innerHTML = str;
    
        } else {
            alert('Dữ liệu nhà cung cấp không tồn tại trong localStorage.');
        }
    }

var number = /^[0-9]+$/;
    function NhapMoiNcc() {
        document.getElementById("mancc").value ='';
        document.getElementById("tenncc").value ='';
        document.getElementById("sdtncc").value ='';
        document.getElementById("emailncc").value ='';
        document.getElementById("diachincc").value ='';
    }
    function Getdulieu(index) {
        var list = JSON.parse(localStorage.getItem("Nhacungcap")) || { Nhacungcap: [] }; 
        console.log(index);   
        var arrayToModify = list.Nhacungcap || []
        if (index >= 0 && index < arrayToModify.length) {
            var selectedNcc = arrayToModify[index];
            
            var mancc = selectedNcc.idncc;
            var tenncc = selectedNcc.tenncc;
            var sdtncc = selectedNcc.sdtncc;
            var emailncc = selectedNcc.emailncc;
            var diachincc = selectedNcc.diachincc;
    
            document.getElementById("manccedit").readOnly = true;
            document.getElementById("manccedit").value = mancc;
            document.getElementById("tennccedit").value = tenncc;
            document.getElementById("sdtnccedit").value = sdtncc;
            document.getElementById("emailnccedit").value = emailncc;
            document.getElementById("diachinccedit").value = diachincc;
        }
    }
    
    function ThemNCC() {    
        var list = JSON.parse(localStorage.getItem("Nhacungcap")) || { Nhacungcap: [] };
        var manccip = document.getElementById("mancc").value;
        var tennccip = document.getElementById("tenncc").value;
        var sdtnccip = document.getElementById("sdtncc").value;
        var emailnccip = document.getElementById("emailncc").value;
        var diachinccip = document.getElementById("diachincc").value;
        if (manccip == null || manccip === "") {
            var d = new Date();
            manccip = "Ncc" + d.getTime();
        }
        if (tennccip == null || tennccip == "") {
            alert("Tên nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        }
        else if (sdtnccip == null || sdtnccip == "") {
            alert("Số điện thoại nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        } else if (!sdtnccip.match(number) || sdtnccip.length != 10) {
            alert("Số điện thoại nhà cung cấp phải là kiểu số và có độ dài là 10 ký tự! Vui lòng nhập lại!");
            return false;
        }
        else if (emailnccip == null || emailnccip == "") {
            alert("Email nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        }
        for (var x of list.Nhacungcap) {
            if (x.idncc == manccip  ) {
                alert("Mã nhà cung cấp đã tồn tại! Vui lòng nhập lại!")
                return false;
            }
        }
    
        var Nhacungcap = {
            "idncc": manccip,
            "tenncc": tennccip,
            "sdtncc": sdtnccip,
            "emailncc": emailnccip,
            "diachincc": diachinccip
        };   
        list.Nhacungcap.push(Nhacungcap);
    
        localStorage.setItem("Nhacungcap", JSON.stringify(list));    
        alert("Đã thêm thành công!");
        LoadNcc(); 
    }
    

    function XoaNCC(manccip) {
        var list = JSON.parse(localStorage.getItem("Nhacungcap")) || { Nhacungcap: [] };
    
        // Chắc chắn rằng list là một mảng
        var arrayToModify = list.Nhacungcap || [];
    
        if (confirm("Bạn chắc chắn muốn xóa!")) {
            var index = arrayToModify.findIndex(x => x.idncc == manccip);
            if (index >= 0) {
                arrayToModify.splice(index, 1);
            }
           
            localStorage.setItem('Nhacungcap', JSON.stringify(list));
        }
        LoadNcc(); 
    }

    function SuaNCC() {
        var list = JSON.parse(localStorage.getItem("Nhacungcap")) || { Nhacungcap: [] };
        var arrayToModify = list.Nhacungcap || [];

        var manccip = document.getElementById("manccedit").value; 
        var tennccip = document.getElementById("tennccedit").value;
        var sdtnccip = document.getElementById("sdtnccedit").value;
        var emailnccip = document.getElementById("emailnccedit").value;
        var diachinccip = document.getElementById("diachinccedit").value;
       
        if (tennccip == null || tennccip == "") {
            alert("Tên nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        }
        else if (sdtnccip == null || sdtnccip == "") {
            alert("Số điện thoại nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        } else if (!sdtnccip.match(number) || sdtnccip.length != 10) {
            alert("Số điện thoại nhà cung cấp phải là kiểu số và có độ dài là 10 ký tự! Vui lòng nhập lại!");
            return false;
        }
        else if (emailnccip == null || emailnccip == "") {
            alert("Email nhà cung cấp không được để trống! Vui lòng nhập lại!");
            return false;
        }
       
        var Index = arrayToModify.findIndex(x => x.idncc == manccip);       
        if (Index >= 0 && Index < arrayToModify.length) {
            arrayToModify[Index].tenncc = tennccip;
            arrayToModify[Index].sdtncc = sdtnccip;
            arrayToModify[Index].emailncc = emailnccip;
            arrayToModify[Index].diachincc = diachinccip;
            
            localStorage.setItem('Nhacungcap', JSON.stringify(list));
           
            $('#Modal_NCCsua').on('hidden.bs.modal', function () {
                alert("Sửa thành công");
                LoadNcc();
            });
    
            // Ẩn modal
            $('#Modal_NCCsua').modal('hide');
        } else {
            alert("Không tìm thấy trong danh sách.");
        }
    }
   
    