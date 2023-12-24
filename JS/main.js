//! Quản lý tuyển sinh
document.getElementById('btnKetQuaDiem').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);

    if ( diem1 > 0 && diem2 > 0 && diem3 > 0 ){
        var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
        document.getElementById('ketQuaDiem').innerHTML = tongDiem >= diemChuan ? "Thí sinh đã đậu với tổng điểm: " + tongDiem : "Thí sinh đã rớt với tổng điểm: " + tongDiem
    } else
    document.getElementById('ketQuaDiem').innerHTML = 'Bạn đã rớt do có điểm bằng 0'
}
