
 document.getElementById('frmdangky').addEventListener('submit', function(e) {
    e.preventDefault();
    const hovaten = document.getElementById('hovaten').value;
    const tendn = document.getElementById('tendn').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const diachi = document.getElementById('diachi').value;


    if (localStorage.getItem(tendn)) {
        alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác.');
        return;
    }else{
        
        // localStorage.setItem("account",tendn);
        // localStorage.setItem("password",password);
        // localStorage.setItem("email",email);
        // localStorage.setItem("diachi",diachi);
        // localStorage.setItem("hoten",hovaten);

        const userInfo = {
            tendn:tendn,
            hoten: hovaten,
            password: password,
            email: email,
            diachi: diachi
        };
        localStorage.setItem('userLogin', JSON.stringify(userInfo));
    }
    alert("Đăng ký thành công");
   
});


