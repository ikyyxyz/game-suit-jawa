var tanya = true;
while( tanya ) {        
    //menangkap pilihan player
    var player  = prompt('pilih : gajah, semut, orang');

    //menangkap pilihan computer
    //membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut'
    }

    var hasil = '';
    //membuat rules 
    if( player == comp ) {
        hasil = 'SERI';
    } else if( player == 'gajah' ) {
        hasil = ( comp == 'oranng' ) ? 'MENANG' : 'KALAH';
    } else if( player == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH' : 'MENANG';
    } else if( player == 'semut' ) {
        hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan yang salah';
    }

    //tampilkan hasilnya 
    alert('kamu memilih : ' + player + ' dan komputer memilih : ' + comp + ' \nMaka hasilnya Kamu ' + hasil);

    tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain');