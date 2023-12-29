
//! BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN:
function tinhTongLuong() {
    //Input:
    var tienLuong1Ngay = document.getElementById('tienLuong1Ngay');
    var soNgayLam = document.getElementById('soNgayLam').value;

    //Kiểm tra Input:
    // console.log('Tiền lương',tienLuong);
    // console.log('Số ngày làm',soNgayLam);

    //Output:
    var tongLuong = 0;
    var tienLuong1Ngay = 100000;
    tongLuong = tienLuong1Ngay * soNgayLam;
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();

}

//! BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH:
function tinhTrungBinh() {
    //1. Input:
    var giaTri1 = document.getElementById('giaTri1').value;
    var giaTri2 = document.getElementById('giaTri2').value;
    var giaTri3 = document.getElementById('giaTri3').value;
    var giaTri4 = document.getElementById('giaTri4').value;
    var giaTri5 = document.getElementById('giaTri5').value;

    //2. Kiểm tra Input:
    // console.log('giá trị 1',giaTri1);
    // console.log('giá trị 2',giaTri2);
    // console.log('giá trị 3',giaTri3);
    // console.log('giá trị 4',giaTri4);
    // console.log('giá trị 5',giaTri5);

    //3. Output:
    var trungBinh = 0;
    trungBinh = giaTri1/5 + giaTri2/5  + giaTri3/5  + giaTri4/5  + giaTri5/5;
    document.getElementById('trungBinh').innerHTML = trungBinh;

}



//! BÀI 3: QUY ĐỔI TIỀN:
function quyDoiTien() {
    //Input:
    var soTienCanDoi = document.getElementById('soTienCanDoi').value;

    //Kiểm tra Input:
    // console.log('Nhập số tiền USD',soTienCanDoi);

    //Output:
    var ketQuaQuyDoi = 0;
    var giaUSD = 23500;
    ketQuaQuyDoi = soTienCanDoi * giaUSD;
    document.getElementById('ketQuaQuyDoi').innerHTML = ketQuaQuyDoi.toLocaleString();

}





//! BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT:
function tinhDienTichChuVi() {
    //Input:
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    //Kiểm tra Input:
    // console.log('Tính diện tích',dienTich);
    // console.log('Tính chu vi',chuVi);

    //Output:
    var ketQuaTinh = 0;
    // var dienTich = 0;
    // var chuVi = 0;

    dienTich = chieuDai * chieuRong;
    chuVi = chieuDai*2 + chieuRong*2;

    ketQuaTinh = "Diện tích: " + dienTich + ';  Chu vi ' + chuVi;
    document.getElementById('ketQuaTinh').innerHTML = ketQuaTinh;

}


//! BÀI 5: TÍNH TỔNG 2 KÝ SỐ:
function tinhTongKySo() {
    //Input:
    var kySo = document.getElementById('kySo').value;

    //Progress:
    // Sử dụng hàm Math.floor
    var hangTram = Math.floor(kySo / 100);
    var hangChuc = Math.floor(kySo % 100 / 10);
    var donVi = kySo % 100 % 10;

    console.log('số hàng trăm =', hangTram);
    console.log('Số hàng chục =', hangChuc);
    console.log('Số hàng đơn vị =', donVi);

    //Output:
    var tongKySo = 0;
    tongKySo = hangTram + hangChuc + donVi;
    console.log('Tổng ký số =', tongKySo)
    document.getElementById('tongKySo').innerHTML = tongKySo;
}