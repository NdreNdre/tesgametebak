var ulang = true;
while (ulang) {
  // bot generate
  var bot = Math.floor(Math.random() * 10) + 1;

  // Nyawa
  var nyawa = 3;
  var hasil = '';
  for (var i = nyawa; i > 0; i--) {
    // player choice
    var p = parseInt(prompt('Tebak Angka 1-10 : \nAnda memiliki ' + i + 'x kesempatan'));
    // Rules

    if (p == bot) {
      hasil = 'JAWABAN ANDA BENAR!!!';
    } else if (p < bot) {
      hasil = 'Kekecilan';
    } else if (p > bot) {
      hasil = 'kebesaran';
    } else {
      i = 0;
      hasil = 'masukin angka dung koplak';
    }
    alert(hasil);
    if (hasil == 'JAWABAN ANDA BENAR!!!') {
      i = 0;
    }
  }
  if (hasil == 'JAWABAN ANDA BENAR!!!') {
    alert('ajg jago');
  } else {
    alert('Jawabannya ' + bot + ' bego');
  }
  ulang = confirm('maen lagi ga?');
}

alert('makasih lur');
