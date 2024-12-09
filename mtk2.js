function showFeature(feature) {
    const output = document.getElementById("output");
    switch (feature) {
        case 'prima':
            output.innerHTML = `
    <h2>Bilangan Prima</h2>
    <p>Masukkan angka untuk melihat hasil modulus dan menentukan apakah angka tersebut bilangan prima.</p>
    <input type="number" id="bilanganInput" placeholder="Masukkan angka" />
    <button onclick="cekBilangan()">Cek</button>
    <div id="hasilModulus"></div>
  `;
            break;
        case 'piramida':
            output.innerHTML = `
    <h2>Piramida Bintang</h2>
    <p>Masukkan jumlah baris untuk membuat piramida bintang.</p>
    <input type="number" id="inputPiramida" placeholder="Jumlah baris" />
    <button onclick="buatPiramida()">Buat</button>
    <pre id="hasilPiramida"></pre>
  `;
            break;
        case 'hitungBangun':
            output.innerHTML = `
    <h2>Hitung Luas dan Keliling Bangun</h2>
    <p>Pilih jenis bangun untuk dihitung:</p>
    <select id="pilihBangun" onchange="tampilkanFormBangun()">
      <option value="">-- Pilih Bangun --</option>
      <option value="persegi">Persegi</option>
      <option value="persegiPanjang">Persegi Panjang</option>
      <option value="lingkaran">Lingkaran</option>
    </select>
    <div id="formBangun"></div>
  `;
            break;

        default:
            output.innerHTML = `<h2>Fitur tidak ditemukan.</h2>`;

        case "statistik":
            output.innerHTML = `
    <h2>Statistik</h2>
    <p>Masukkan angka untuk menghitung rata-rata, median, dan modus:</p>
    <textarea id="dataStatistik" placeholder="Pisahkan dengan koma, contoh: 1,2,3,4,5"></textarea>
    <button onclick="hitungStatistik()">Hitung</button>
    <div id="hasilStatistik"></div>
  `;
            break;

        case "faktorial":
            output.innerHTML = `
  <h2>Hitung Faktorial</h2>
  <input type="number" id="inputFaktorial" placeholder="Masukkan angka positif" />
  <button onclick="hitungFaktorial()">Hitung</button>
  <div id="hasilFaktorial"></div>
`;
            break;

        case "fibonacci":
            output.innerHTML = `
  <h2>Bilangan Fibonacci</h2>
  <input type="number" id="jumlahFibonacci" placeholder="Masukkan jumlah bilangan Fibonacci" />
  <button onclick="hitungFibonacci()">Hitung</button>
  <div id="hasilFibonacci"></div>
`;
            break;

        case "kata":
            output.innerHTML = `
  <h2>Manipulasi Kata</h2>
  <input type="text" id="inputKata" placeholder="Masukkan kata untuk dimanipulasi" />
  <button onclick="manipulasiKata()">Proses</button>
  <div id="hasilKata"></div>
`;
            break;


    }
}




    function tampilkanFormBangun() {
        const pilihan = document.getElementById("pilihBangun").value;
        const formBangunDiv = document.getElementById("formBangun");

        switch (pilihan) {
            case "persegi":
                formBangunDiv.innerHTML = `
    <p>Masukkan panjang sisi persegi:</p>
    <input type="number" id="sisiPersegi" />
    <button onclick="hitungLuasKeliling('persegi')">Hitung</button>
    <div id="hasilLuasKeliling"></div>
  `;
                break;

            case "persegiPanjang":
                formBangunDiv.innerHTML = `
    <p>Masukkan panjang dan lebar:</p>
    Panjang: <input type="number" id="panjangPersegiPanjang" />
    Lebar: <input type="number" id="lebarPersegiPanjang" />
    <button onclick="hitungLuasKeliling('persegiPanjang')">Hitung</button>
    <div id="hasilLuasKeliling"></div>
  `;
                break;

            case "lingkaran":
                formBangunDiv.innerHTML = `
    <p>Jari-jari Lingkaran:</p>
    <input type="number" id="jariLingkaran" />
    <button onclick="hitungLuasKeliling('lingkaran')">Hitung</button>
    <div id="hasilLuasKeliling"></div>
  `;
                break;
        }
    }





function cekBilangan() {
    const bilangan = parseInt(document.getElementById('bilanganInput').value);
    if (isNaN(bilangan) || bilangan < 1) {
        alert("Masukkan bilangan bulat positif!");
        return;
    }

    let hasilModulus = '';
    for (let i = 1; i <= bilangan; i++) {
        const isPrime = cekBilanganPrima(i);
        hasilModulus += `${i} adalah ${isPrime ? 'Bilangan Prima' : 'Bukan Bilangan Prima'}<br>`;
    }

    document.getElementById('hasilModulus').innerHTML = hasilModulus;
}

function cekBilanganPrima(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}





function buatPiramida() {
    const jumlah = parseInt(document.getElementById('inputPiramida').value);
    if (isNaN(jumlah) || jumlah < 1) {
        alert("Masukkan jumlah yang valid!");
        return;
    }

    let hasil = '';
    for (let i = 1; i <= jumlah; i++) {
        const spasi = ' '.repeat(jumlah - i);
        const bintang = '*'.repeat(2 * i - 1);
        hasil += spasi + bintang + '\n';
    }

    document.getElementById('hasilPiramida').innerText = hasil.trim();
}






function hitungLuasKeliling(bangun) {

    let hasil = {};

    switch (bangun) {
        case "persegi":
            const sisi = parseFloat(document.getElementById("sisiPersegi").value);
            if (isNaN(sisi) || sisi <= 0) {
                alert("Masukkan panjang sisi yang valid untuk persegi.");
                return;
            }
            hasil = {
                luas: sisi ** 2,
                keliling: 4 * sisi,
            };
            break;

        case "persegiPanjang":
            const panjang = parseFloat(document.getElementById("panjangPersegiPanjang").value);
            const lebar = parseFloat(document.getElementById("lebarPersegiPanjang").value);
            if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
                alert("Masukkan panjang dan lebar yang valid untuk persegi panjang.");
                return;
            }
            hasil.luas = panjang * lebar;
            hasil.keliling = 2 * (panjang + lebar);
            break;

        case "lingkaran":
            const jari = parseFloat(document.getElementById("jariLingkaran").value);
            if (isNaN(jari) || jari <= 0) {
                alert("Masukkan jari-jari yang valid untuk lingkaran.");
                return;
            }
            hasil = {
                luas: Math.PI * jari ** 2,
                keliling: 2 * Math.PI * jari,
            };
            break;
    }

    // Menampilkan hasil
    document.getElementById("hasilLuasKeliling").innerHTML = `
Luas: ${hasil.luas}<br>
Keliling: ${hasil.keliling}
`;
}







function hitungStatistik() {
    const data = document.getElementById("dataStatistik").value.split(",").map(Number);

    if (data.length === 0 || data.some(isNaN)) {
        alert("Masukkan data yang valid dan dipisahkan dengan koma!");
        return;
    }

    const rataRata = data.reduce((a, b) => a + b, 0) / data.length;
    data.sort((a, b) => a - b);

    const median = data.length % 2 === 0
        ? (data[data.length / 2 - 1] + data[data.length / 2]) / 2
        : data[Math.floor(data.length / 2)];

    const frekuensi = {};
    data.forEach((num) => {
        frekuensi[num] = (frekuensi[num] || 0) + 1;
    });

    const modus = Object.keys(frekuensi).filter(
        (key) => frekuensi[key] === Math.max(...Object.values(frekuensi))
    );

    document.getElementById("hasilStatistik").innerHTML = `
Rata-rata: ${rataRata}<br>
Median: ${median}<br>
Modus: ${modus.join(", ")}
`;
}



function hitungFaktorial() {
    const angka = parseInt(document.getElementById('inputFaktorial').value);

    if (isNaN(angka) || angka < 0) {
        alert("Masukkan angka positif yang valid untuk menghitung faktorial!");
        return;
    }

    let hasil = 1;
    for (let i = 1; i <= angka; i++) {
        hasil *= i;
    }

    document.getElementById('hasilFaktorial').innerHTML = `Faktorial dari ${angka} adalah: ${hasil}`;
}





function hitungFibonacci() {
    const jumlah = parseInt(document.getElementById('jumlahFibonacci').value);

    if (isNaN(jumlah) || jumlah < 0) {
        alert("Masukkan jumlah bilangan Fibonacci yang valid!");
        return;
    }

    let fibonacci = [];
    if (jumlah >= 1) fibonacci.push(0);
    if (jumlah >= 2) fibonacci.push(1);

    for (let i = 2; i < jumlah; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    document.getElementById('hasilFibonacci').innerHTML =
        `Bilangan Fibonacci hingga ${jumlah} bilangan: ${fibonacci.join(", ")}`;
}




function manipulasiKata() {
    const kata = document.getElementById('inputKata').value.trim();

    if (!kata) {
        alert("Masukkan kata untuk manipulasi!");
        return;
    }

    const kataBalik = kata.split("").reverse().join("");
    const jumlahHuruf = kata.length;

    document.getElementById('hasilKata').innerHTML = `
Kata yang dimasukkan: ${kata}<br>
Kata dibalik: ${kataBalik}<br>
Jumlah huruf: ${jumlahHuruf}
`;
}





