
document.getElementById('frmlogin').addEventListener('submit', function(event) {
    // Ngăn chặn gửi form mặc định
    event.preventDefault(); 
    const usernamedn = document.getElementById('tk').value;
    const passworddn = document.getElementById('mk').value;

    var listqly = [
        {
            anh: "../image/Menu/2023-LOCK2.webp",
            email: "Nguyenngocminh261203@gmai.com",
            tentkql: 'admin',
            mkql: "123",
            quyen: "Quản lý",
            sdtql: "0365184730",
            hoten: "Nguyễn Ngọc Minh",
            trangthai: "Hoạt động"
        }
    ];

    var listnv = [
        {
            anh: "../image/Menu/t-hp-whatisnew-desktop-gal.jpg",
            email: "nguyenngoca@gmail.com",
            tentknv: 'nhanvien',
            mknv: "123",
            quyen: "Nhân Viên",
            sdtnv: "099699686",
            hoten: "Nguyễn Văn A",
            trangthai: "Hoạt động"
        }
    ];
    localStorage.setItem('inforql', JSON.stringify(listqly));
    localStorage.setItem('infornv', JSON.stringify(listnv));
 
       for (const x of listqly) {
            if (x.tentkql === usernamedn  && x.mkql === passworddn) {
                alert(`Đăng nhập thành công với quyền: ${x.quyen}`);
                localStorage.setItem('InforDN', JSON.stringify(x));
                window.location.href = "Tongquan.html";                
                break;
            }         
            else if (x.tentkql != usernamedn  && x.mkql != passworddn){
                alert(`Đăng nhập không thành công `);
            }  
        }
        for (const y of listnv) {
            if (y.tentknv === usernamedn  && y.mknv === passworddn) {
                alert(`Đăng nhập thành công với quyền: ${y.quyen}`);
                localStorage.setItem('InforDN', JSON.stringify(y));
                window.location.href = "Tongquan.html";        
                break;
            }  
            else if (y.tentknv != usernamedn  && y.mknv != passworddn){
                alert(`Đăng nhập không thành công `);
            }        
        }     

});
function setLightTheme() {
    const body = document.body;
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    document.getElementById('lightThemeButton').style.backgroundColor = "rgb(172, 172, 156)";//active
    document.getElementById('darkThemeButton').style.backgroundColor = " rgb(226, 226, 203)";
}

function setDarkTheme() {
    const body = document.body;
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    document.getElementById('lightThemeButton').style.backgroundColor = " rgb(218, 218, 207)";
    document.getElementById('darkThemeButton').style.backgroundColor = " rgb(172, 172, 156)";
}
// function LoadUser() {
//     var u = JSON.parse(localStorage.getItem('user')) || [];
//     $('#anhnv').html(u.anhnv);
//     $('#hoten').html(u.hoten);
//     $('#email').html(u.email);
//     $('#manv').html(u.manv);
//     $('#quyen').html(u.quyen);
//     $('#sdtnv').html(u.sdtnv);
// }

function Logout(){
    localStorage.setItem('InforDN', null);
    // localStorage.removeItem('InforDN');
    window.location.href = "../admin/Login.html";
}
function getnametk() {
    var user = JSON.parse(localStorage.getItem('InforDN'));
    document.getElementById('tentk').textContent=user.hoten;
    

    var imageSrc = user.anh;
    if (imageSrc) {
        document.getElementById('imglogin').src = imageSrc;
    }
    
}