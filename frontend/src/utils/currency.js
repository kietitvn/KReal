export function doctien(SoTien) {
  var Tien = new Array(" triệu ", " tỷ ", " nghìn tỷ ", " triệu tỷ ");
  var lan = 0;
  var i = 0;
  var so = SoTien;
  var KetQua = "";
  var tmp = "";
  var ViTri = new Array();

  if (SoTien == 0) return "0";

  ViTri[3] = Math.floor(so / 1000000000000000);
  if (isNaN(ViTri[3])) ViTri[3] = "0";
  so = so - parseFloat(ViTri[3].toString()) * 1000000000000000;

  ViTri[2] = Math.floor(so / 1000000000000);
  if (isNaN(ViTri[2])) ViTri[2] = "0";
  so = so - parseFloat(ViTri[2].toString()) * 1000000000000;

  ViTri[1] = Math.floor(so / 1000000000);
  if (isNaN(ViTri[1])) ViTri[1] = "0";
  so = so - parseFloat(ViTri[1].toString()) * 1000000000;

  ViTri[0] = parseInt(so / 1000000);
  if (isNaN(ViTri[0])) ViTri[0] = "0";
  so = so - parseFloat(ViTri[0].toString()) * 1000000;

  console.log(so, ViTri);
  if (isNaN(ViTri[0])) ViTri[0] = "0";
  if (ViTri[3] > 0) {
    lan = 3;
  } else if (ViTri[2] > 0) {
    lan = 2;
  } else if (ViTri[1] > 0) {
    lan = 1;
  } else {
    lan = 0;
  }
  for (i = lan; i >= 0; i--) {
    tmp = ViTri[i];
    KetQua += " " + tmp > 0 ? tmp : "";
    if (ViTri[i] > 0) KetQua += Tien[i];
  }
  return KetQua.trim();
}
