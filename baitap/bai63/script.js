window.onload = function () {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
  
    // Nạp ngày
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i < 10 ? `0${i}` : i; // Hiển thị số có hai chữ số
      daySelect.appendChild(option);
    }
  
    // Nạp tháng
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i; // Hiển thị số tháng
      monthSelect.appendChild(option);
    }
  
    // Nạp năm
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i; // Hiển thị năm
      yearSelect.appendChild(option);
    }
    };
  
  // Xử lý nút Đăng ký
  function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
  
    // Lấy sở thích
    const hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
      hobbies.push(checkbox.value);
    });
  
    // Lấy màu yêu thích
    const color = document.querySelector('input[name="color"]:checked')?.value;
  
    // Kiểm tra dữ liệu nhập
    if (!name) {
      alert("Tên không được bỏ trống!");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Email không hợp lệ!");
      return;
    }
  
    // Thêm thông tin vào bảng
    const table = document.getElementById("memberTable");
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = gender || "";
    row.insertCell(3).textContent = `${day}/${month}/${year}`;
    row.insertCell(4).textContent = hobbies.join(", ");
  
    const colorCell = row.insertCell(5);
    colorCell.textContent = color || "";
    }
  
  // Xử lý nút Tiếp
  function resetForm() {
    document.getElementById("registerForm").reset();
    document.getElementById("name").focus();
  }
  