
document.getElementById('frmdangnhap').addEventListener('submit', function(e) {
    e.preventDefault();
    const tendn = document.getElementById('tendn').value;
    const passwordn = document.getElementById('password').value;

    const userDataString = localStorage.getItem('userLogin');
    if (userDataString) {
            // Chuyển JavaScript
            const userData = JSON.parse(userDataString);
        
            const storedtendn = userData.tendn;
            const storedPassword = userData.password;
            if (storedtendn === tendn && storedPassword === passwordn ) {
                alert('Đăng nhập thành công!');
                window.location.href = 'Trangchu.html';
                

            
            } else {          
                alert('Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.');
            
            }   
        } else {
          console.log('Không có dữ liệu người dùng trong localStorage');
        }    
        
   
})
