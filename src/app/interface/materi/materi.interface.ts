export interface listIsiMateri {
  judulMateri: string,
  isiMateri: string,
  htmlMateri?: string
  Image: string,
  UrlYoutube: string,
  type?: string
  soal?: string
  imageSoal?: string
  typePilihanSoal?: string
  kunjawSoal?: number
  pilihanSoal?: string[]
}

export interface DataSubTitle {
  titleModul: string,
  isiMateri: listIsiMateri[]
}

export interface DataMateri {
  // title: string;
  materi: DataSubTitle;
  status: string;
}

export interface DataSoal {
  title: string
  typeSoal: string
  Pertanyaan: string
  jawaban: string
  pilihanJawaban: string[]
}

export const materiOperator: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Materi Percabangan If",
      isiMateri: [
        {
          judulMateri: "Percabangan",
          isiMateri: ``,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify;">
              Percabangan adalah konsep dalam pemrograman yang memungkinkan program untuk membuat keputusan berdasarkan kondisi atau situasi tertentu. Dengan menggunakan percabangan, program dapat mengevaluasi kondisi atau ekspresi logis dan memilih jalur atau langkah yang sesuai berdasarkan hasil evaluasi tersebut. Ini memungkinkan program untuk melakukan tindakan yang berbeda tergantung pada situasi yang dihadapi, membuatnya lebih fleksibel dan mampu menyesuaikan diri dengan berbagai skenario yang mungkin terjadi saat program dijalankan.
              </span>
            </div>

            <h1 style="font-size: 30px; margin-top:20px">Percabangan if</h1>

            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <span style="font-size: 20px; text-align: justify;">
              Percabangan if adalah salah satu bentuk percabangan yang paling umum digunakan dalam pemrograman. Dengan menggunakan percabangan if, kita dapat memberi instruksi kepada program untuk menjalankan serangkaian pernyataan jika suatu kondisi tertentu terpenuhi, dan menjalankan pernyataan lain jika kondisi tersebut tidak terpenuhi.
              </span>

              <span style="font-size: 20px; align-self:start">
              Secara umum, percabangan if memiliki format seperti ini:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/gambar1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Dalam contoh di atas, "kondisi" adalah ekspresi logis yang dievaluasi oleh program. Jika kondisi tersebut bernilai true (benar), maka program akan menjalankan pernyataan yang ada di dalam blok if. 
              </span>

              <span style="font-size: 20px; align-self:start">
              Berikut ini contoh program percabangan if:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi1/gambar2.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start" >
              Dalam contoh ini, jika nilai variabel "umur" lebih besar dari atau sama dengan 18, program akan mencetak <strong>"Anda sudah dewasa."</strong>
              </span>

              <span style="font-size: 20px; align-self:start">
              Perhatikan video ilustrasi berikut:
              </span>

              <div style="justify-content: center; align-items: center; margin-top:15px; margin-bottom:15px">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/VkcM4M4FKf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <h1 style="font-size: 30px; align-self:start; margin-top:20px">Latihan Soal</h1>

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Setelah memahami materi dan menonton ilustrasi tersebut, yuk coba jawab pertanyaan di bawah ini:
              </span>

              <span style="font-size: 20px; text-align: justify; align-self:start; margin-top:10px">
              Ani diminta membuat program untuk menentukan apakah ia dapat mengemudi mobilnya berdasarkan usianya. Jika usianya 18 tahun atau lebih, maka ia diizinkan mengemudi. Buatlah program yang menampilkan pesan apakah seseorang boleh mengemudi berdasarkan usiannya!
              </span>
            </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
      ]
    },
    status: "materi"
  }
];

export const materiIfThen: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Percabangan If Else",
      isiMateri: [
        {
          judulMateri: "Percabangan If Else",
          isiMateri: ``,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify;">
              Percabangan if-else adalah salah satu konsep dasar dalam pemrograman yang memungkinkan program untuk membuat keputusan berdasarkan kondisi tertentu. Dengan menggunakan percabangan if-else, program dapat melakukan tindakan berbeda tergantung pada apakah kondisi yang diberikan benar (true) atau salah (false).
              </span>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Secara umum, percabangan if memiliki format seperti ini:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/gambar1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Dalam contoh di atas, "kondisi" adalah ekspresi logis yang dievaluasi oleh program. Jika kondisi tersebut bernilai true (benar), maka program akan menjalankan pernyataan yang ada di dalam blok if. Namun, jika kondisi tersebut bernilai false (salah), maka program akan menjalankan pernyataan yang ada di dalam blok else (jika ada).
              </span>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Berikut ini contoh program percabangan if else:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi2/gambar2.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start" >
              Dalam contoh ini, kita memiliki suatu kondisi yang diperiksa menggunakan percabangan if. Kondisi tersebut adalah apakah nilai variabel "nilai" lebih besar dari atau sama dengan 70. Jika kondisi tersebut terpenuhi (nilai lebih besar dari atau sama dengan 70), maka program akan mencetak pesan "Selamat, Anda lulus ujian!".amun, jika kondisi tersebut tidak terpenuhi (nilai kurang dari 70), maka program akan mencetak pesan "Maaf, Anda belum lulus ujian."
              </span>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Perhatikan video ilustrasi berikut:
              </span>

              <div style="justify-content: center; align-items: center; margin-top:15px; margin-bottom:15px">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/RAwrY-RoV7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <h1 style="font-size: 30px; align-self:start; margin-top:20px">Latihan Soal</h1>

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Setelah memahami materi dan menonton ilustrasi tersebut, yuk coba jawab pertanyaan di bawah ini:
              </span>

              <span style="font-size: 20px; text-align: justify; align-self:start; margin-top:10px">
              Seorang pengemudi taksi ingin mengetahui tarif perjalanan berdasarkan jarak yang ditempuh. Buatlah program  untuk menghitung tarif perjalanan berdasarkan jarak sebagai berikut:
              </span>
              <ul style="align-self:start; margin-left:20px">
                  <li style="font-size: 20px;">Jarak perjalanan kurang dari atau sama dengan 5 km: 10.000 rupiah per km</li>
                  <li style="font-size: 20px;">Jarak perjalanan lebih dari 5 km: 8.000 rupiah per km</li>
              </ul>

            </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
      ]
    },
    status: "materi"
  }
];

export const materiIfElse: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Percabangan Nested If",
      isiMateri: [
        {
          judulMateri: "Percabangan Nested If",
          isiMateri: ``,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify;">
              Percabangan nested if adalah konsep di mana kita memiliki satu atau lebih percabangan if di dalam blok pernyataan lainnya. Dalam konteks ini, blok pernyataan yang satu berada di dalam blok pernyataan yang lain. Dengan menggunakan percabangan nested if, kita dapat membuat struktur percabangan yang lebih kompleks, di mana kita dapat memeriksa beberapa kondisi secara bertingkat.
              </span>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Berikut adalah struktur umum dari percabangan nested if:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/gambar1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Dalam struktur ini, kita memiliki percabangan if yang berada di dalam blok pernyataan lainnya. Pernyataan di dalam blok if kedua akan dieksekusi hanya jika kondisi dari kedua if, yaitu kondisi1 dan kondisi2, terpenuhi.
              </span>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Berikut ini contoh program percabangan nested if:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi3/gambar2.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start" >
              Dalam contoh ini, kita memiliki dua tingkat percabangan if. Pertama, program memeriksa apakah angka positif atau negatif. Jika angka positif, maka program masuk ke dalam blok if kedua untuk memeriksa apakah angka genap atau ganjil. Jika angka negatif, maka program langsung mencetak "Angka adalah negatif.". Ini merupakan contoh sederhana dari percabangan nested if yang memungkinkan kita untuk membuat struktur percabangan yang lebih kompleks.
              </span>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Perhatikan video ilustrasi berikut:
              </span>

              <div style="justify-content: center; align-items: center; margin-top:15px; margin-bottom:15px">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/yClNpWBY_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <h1 style="font-size: 30px; align-self:start; margin-top:20px">Latihan Soal</h1>

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Setelah memahami materi dan menonton ilustrasi tersebut, yuk coba jawab pertanyaan di bawah ini:
              </span>

              <span style="font-size: 20px; text-align: justify; align-self:start; margin-top:10px">
              Sebuah toko buku memberikan diskon berdasarkan jumlah buku yang dibeli oleh pelanggan. Jika pelanggan membeli 1-3 buku, maka tidak ada diskon yang diberikan. Jika pelanggan membeli 4-10 buku, maka diberikan diskon 5% dari total harga. Jika pelanggan membeli lebih dari 10 buku, maka diberikan diskon 10% dari total harga. Buatlah program dalam bahasa C untuk menghitung total harga yang harus dibayar oleh pelanggan berdasarkan jumlah buku yang dibeli dan diskon yang diberikan.
              </span>

            </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
      ]
    },
    status: "materi"
  }
];

export const materiCase: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Percabangan Switch Case",
      isiMateri: [
        {
          judulMateri: "Percabangan Switch Case",
          isiMateri: ``,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span style="font-size: 20px; text-align: justify;">
              Percabangan switch-case adalah konstruksi dalam pemrograman yang memungkinkan pemilihan aksi yang berbeda berdasarkan nilai dari sebuah ekspresi. Ini merupakan alternatif untuk penggunaan percabangan if-else yang lebih mudah dibaca dan ditulis dalam beberapa situasi. Percabangan switch case cocok digunakan saat kita memiliki satu variabel atau ekspresi yang ingin kita bandingkan dengan beberapa nilai yang mungkin. Ini memungkinkan kita untuk mengevaluasi variasi nilai yang berbeda dan menjalankan kode yang berbeda berdasarkan nilai yang sesuai.
              </span>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Berikut adalah struktur umum dari percabangan switch-case dalam bahasa C:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/gambar1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Penjelasannya sebagai berikut:
              </span>

              <ul style="align-self:start; margin-left:20px">
                  <li style="font-size: 20px;text-align: justify;">switch mengevaluasi nilai dari ekspresi.</li>
                  <li style="font-size: 20px;text-align: justify;">case mendefinisikan nilai-nilai yang akan dibandingkan dengan ekspresi.</li>
                  <li style="font-size: 20px;text-align: justify;">Jika nilai dari ekspresi cocok dengan nilai pada salah satu case, pernyataan di dalam case tersebut akan dieksekusi. Perhatikan bahwa pernyataan di dalam case tidak perlu diakhiri dengan break.</li>
                  <li style="font-size: 20px;text-align: justify;">Jika nilai ekspresi tidak cocok dengan nilai pada semua case, pernyataan di dalam default akan dieksekusi.</li>
              </ul>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Berikut adalah contoh penggunaan percabangan switch-case:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/gambar2.png"
                style="height: 50%; width: 50%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start" >
              Dalam contoh ini, kita meminta pengguna untuk memasukkan nomor hari dalam seminggu (dari 1 hingga 7). Berdasarkan nomor yang dimasukkan, program akan mencetak nama hari yang sesuai menggunakan percabangan switch case. Jika nomor yang dimasukkan tidak valid (di luar rentang 1 hingga 7), program akan mencetak pesan bahwa nomor hari tidak valid.
              </span>

              <span style="font-size: 20px; align-self:start; margin-top:10px; margin-bottom:10px">
              Perhatikan video ilustrasi berikut:
              </span>

              <div style="justify-content: center; align-items: center; margin-top:15px; margin-bottom:15px">
                <iframe width="800" height="500" src="https://www.youtube.com/embed/nsZIBO5GQaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <h1 style="font-size: 30px; align-self:start; margin-top:20px">Latihan Soal</h1>

              <span style="font-size: 20px; text-align: justify; align-self:start">
              Setelah memahami materi dan menonton ilustrasi tersebut, yuk coba jawab pertanyaan di bawah ini:
              </span>

              <span style="font-size: 20px; text-align: justify; align-self:start; margin-top:10px">
              Seorang penyedia jasa katering menyediakan menu makanan yang berbeda setiap harinya, dapat dilihat di tabel berikut:
              </span>

              <img
                alt="Logo"
                src="/media/assetIsiMater/materi4/gambar3.png"
                style="height: 40%; width: 40%; margin-bottom: 20px; margin-top: 20px;"
              />

              <span style="font-size: 20px; text-align: justify; align-self:start; margin-top:10px">
              Buatlah program dalam bahasa C yang menampilkan menu makanan berdasarkan hari yang dimasukkan oleh pengguna.
              </span>

            </div>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
      ]
    },
    status: "materi"
  }
];

export const materiNestedIf: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Pendahuluan Percabangan If bersarang",
      isiMateri: [
        {
          judulMateri: "Pendahuluan Percabangan If bersarang",
          isiMateri: `

            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            
            `,
          htmlMateri: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img1.jpg"
                style="height: 60%; width: 60%;"
              />
              <span style="font-size: 20px; text-align: justify;">
                Selamat guys! kalian telah sampai di modul trakhir tetang materi percabangan. Selanjutnya, kalian akan memperluas pemahaman tentang percabangan dengan nested if dalam bahasa Pascal. Nested if memungkinkan kalian untuk menggabungkan berbagai kondisi dan pengambilan keputusan dalam struktur percabangan yang lebih kompleks. Dengan nested if, kalian dapat menyelesaikan skenario yang memerlukan evaluasi lebih mendalam dan memberikan fleksibilitas yang lebih tinggi dalam alur eksekusi program.
                <br/>
                <br/>
                Pernyataan <strong>'nested if'</strong> adalah penggunaan struktur if di dalam blok if lainnya. Dalam nested if, blok if dijalankan hanya jika kondisi di dalamnya terpenuhi. Dalam nested if, kita dapat menambahkan lebih banyak blok if di dalam blok if lainnya sesuai kebutuhan, dan tidak membatasi jenis percabangan apa yang boleh berada di dalam percabangan lainnya.
              </span>
            </div>

            <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Contoh pernyataan <strong>'nested if'</strong></h1>
            <span style="font-size: 20px; text-align: justify;">
              Berikut ini contoh pernyataan <strong>'nested if'</strong> dalam pemrograman
            </span>
            <div style="display: flex; flex-direction: column; justify-content: center;align-items: center">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_contoh1.png"
                style="height: 100%; width: 100%; margin-bottom: 20px;margin-top: 20px;"
              />            
            </div>
            <span style="font-size: 20px; text-align: justify;">
              Pernyataan di atas adalah contoh penggunaan nested if dalam pemrograman. 
              <ul>
                <li>Jika '<strong>kondisi1</strong>' terpenuhi, maka blok kode di dalamnya akan dievaluasi.</li>
                <li>Jika '<strong>kondisi2</strong>' juga terpenuhi, maka blok kode di dalam <strong>if</strong> kedua akan dieksekusi.</li>
                <li>Jika '<strong>kondisi2</strong>' tidak terpenuhi, maka blok kode di dalam <strong>else</strong> akan dijalankan.</li>
                <li>Jika '<strong>kondisi1</strong>' tidak terpenuhi, maka blok kode di dalam <strong>else</strong> luar akan dieksekusi.</li>
              </ul>
              <br/>
              Dengan menggunakan <strong>nested if</strong>, kita dapat mengevaluasi lebih dari satu kondisi dan menjalankan blok kode yang sesuai berdasarkan kondisi yang terpenuhi.
            </span>
          </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Contoh kasus Percabangan If bersarang",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, dan kesamaan. 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Logika Pemikiran Manusia</h1>
              <span style="font-size: 20px; text-align: justify;">
                Buat kotak untuk memasukkan tiga buah masukan dan sebuah kotak untuk menyimpan penanda.
                <br/>
                Meminta masukkan pengguna (user) dan menginisialisasi penanda sebagai  false.
                <br/>
                Memeriksa satu per satu angka masukan, apakah angka masukan termasuk angka ribuan
                <br/>
                Memeriksa tanda, jika tanda berisi true  maka semua masukan memang berisi angka ribuan.              
              </span>

              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pseudocode</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_contoh2.png"
                  style="height: 70%; width: 70%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan variabel <strong>a</strong>, <strong>b</strong>, <strong>c</strong>, dan <strong>tanda</strong> sebagai tipe data <strong>integer</strong> dan <strong>boolean</strong>.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong>.</li>
                  <li>Menginisialisasi variabel <strong>tanda</strong> dengan nilai <strong>false</strong>.</li>
                  <li>Selanjutnya, program akan mengevaluasi nilai dari <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> untuk memastikan bahwa semuanya adalah angka ribuan (antara 1000 hingga 9999) menggunakan beberapa pernyataan <strong>IF</strong>.</li>
                  <li>Jika semua nilai <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah angka ribuan, maka variabel <strong>tanda</strong> akan diubah menjadi <strong>true</strong>.</li>
                  <li>Setelah itu, program akan menampilkan pesan sesuai dengan nilai dari variabel <strong>tanda</strong>. Jika <strong>tanda</strong> adalah <strong>true</strong>, maka program akan menampilkan pesan "semua angka masukan adalah ribuan". Jika <strong>tanda</strong> adalah <strong>false</strong>, maka program akan menampilkan pesan "tidak semua angka masukan adalah ribuan".</li>
                </ul>   
              </span>


              <h1 style="margin-bottom: 8px; font-size: 30px;margin-top: 60px;">Bahasa Pascal</h1>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_contoh3.png"
                  style="height: 70%; width: 70%; margin-bottom: 20px;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify;">
                Penjelasannya sebagai berikut:
                <ul>
                  <li>Mendeklarasikan variabel <strong>a</strong>, <strong>b</strong>, <strong>c</strong> sebagai tipe data <strong>integer</strong> dan <strong>tanda</strong> sebagai tipe data <strong>boolean</strong>.</li>
                  <li>Menampilkan pesan "<strong>Masukkan 3 angka dan tekan enter setelah memasukkan tiap angka:</strong>" di layar.</li>
                  <li>Mengambil input dari pengguna dan menyimpannya dalam variabel <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong>.</li>
                  <li>Menginisialisasi variabel <strong>tanda</strong> dengan nilai <strong>false</strong>.</li>
                  <li>Selanjutnya, program akan mengevaluasi nilai dari <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> untuk memastikan bahwa semuanya adalah angka ribuan (antara 1000 hingga 9999) menggunakan beberapa pernyataan <strong>if</strong>.</li>
                  <li>Jika semua nilai <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah angka ribuan, maka variabel <strong>tanda</strong> akan diubah menjadi <strong>true</strong>.</li>
                  <li>Setelah itu, program akan menampilkan pesan sesuai dengan nilai dari variabel <strong>tanda</strong>. Jika <strong>tanda</strong> adalah <strong>true</strong>, maka program akan menampilkan pesan "Semua angka masukan adalah ribuan.". Jika <strong>tanda</strong> adalah <strong>false</strong>, maka program akan menampilkan pesan "Tidak semua angka masukan adalah ribuan."</li>
                </ul>
                <br/>
                Jadi contoh kasus diatas akan meminta pengguna memasukkan 3 angka dan menampilkan pesan berdasarkan apakah semua angka yang dimasukkan adalah angka ribuan atau tidak. Jika semua angka masukan adalah angka ribuan, maka program akan memberikan pesan "Semua angka masukan adalah ribuan.". Jika tidak semua angka masukan adalah angka ribuan, maka program akan memberikan pesan "Tidak semua angka masukan adalah ribuan.".
              </span>
            </div>
            `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Codelab dengan Pascal",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          htmlMateri: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Untuk mencobanya silahkan klik <a href="https://onlinegdb.com/mizwK_XhL" target="_blank">disini</a> ya
                <br/>
                Program ini akan meminta pengguna memasukkan nilai dan memberikan respons berbeda berdasarkan rentang nilai yang dimasukkan. Respons ini ditentukan oleh nested if yang mengevaluasi nilai nilai dan memberikan pesan yang sesuai berdasarkan kondisi tersebut. Codelab ini menggambarkan bagaimana cara menggunakan nested if dalam Pascal untuk melakukan percabangan dan memberikan respons berbeda berdasarkan nilai yang dimasukkan.
                </span>
              </div>
              
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 1: Mendeklarasikan variabel nilai sebagai integer.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab1.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Kita mendeklarasikan variabel <strong>nilai</strong> yang akan digunakan untuk menyimpan nilai input dari pengguna. Variabel ini memiliki tipe data <strong>integer</strong>, yang berarti hanya dapat menyimpan nilai bilangan bulat.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 2: Menampilkan pesan untuk meminta pengguna memasukkan nilai.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab2.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
              Penjelasan: 
              <br/>
              Pesan yang ditampilkan pada <strong>writeln</strong> memberi tahu pengguna bahwa mereka harus memasukkan nilai. Nilai yang dimasukkan oleh pengguna akan disimpan dalam variabel <strong>nilai</strong> menggunakan <strong>readln</strong>.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 3: Evaluasi apakah nilai lebih besar atau sama dengan 0.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab3.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 0.
              </span>
  
              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 4: Evaluasi apakah nilai lebih besar atau sama dengan 50.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab4.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 50.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 5: Evaluasi apakah nilai lebih besar atau sama dengan 75.</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab5.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Pada langkah ini, program akan mengevaluasi apakah nilai yang dimasukkan oleh pengguna lebih besar atau sama dengan 75.
                <br/>
                Jika kondisi pada langkah 5 terpenuhi (nilai lebih besar atau sama dengan 75), maka program akan menampilkan pesan "Nilai Anda A" karena nilai tersebut memenuhi kondisi tertinggi pada nested if.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 6: Jika nilai kurang dari 75, program akan menampilkan pesan "Nilai Anda B".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab6.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 5 tidak terpenuhi (nilai kurang dari 75), maka program akan menampilkan pesan "Nilai Anda B" karena nilai tersebut memenuhi kondisi pada nested if ini.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 7: Jika nilai kurang dari 50, program akan menampilkan pesan "Nilai Anda C".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab7.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 3 tidak terpenuhi (nilai kurang dari 50), maka program akan menampilkan pesan "Nilai Anda C" karena nilai tersebut memenuhi kondisi pada nested if ini.
              </span>

              <h1 style="margin-bottom: 10px; margin-top: 60px; font-size: 30px;">Langkah 8: Jika nilai kurang dari 0, program akan menampilkan pesan "Nilai Anda Tidak Valid".</h1>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/assetIsiMater/materi5/img_codelab8.png"
                  style="height: 100%; width: 100%;"
                />
              </div>
              <span style="font-size: 20px; text-align: justify; margin-bottom: 20px;">
                Penjelasan: 
                <br/>
                Jika kondisi pada langkah 1 tidak terpenuhi (nilai kurang dari 0), maka program akan menampilkan pesan "Nilai Anda Tidak Valid" karena nilai tersebut tidak memenuhi kondisi pada if utama.
              </span>
            </div>
              `,
          Image: "",
          UrlYoutube: "",
          type: "materi"
        },
        {
          judulMateri: "Diskusi Kelompok",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          UrlYoutube: "",
          type: "rangkuman"
        },
        {
          judulMateri: "Latihan 1",
          isiMateri: `
            Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
            Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Kapan ‘nested if’ digunakan dalam sebuah program?
              </span>
            </div>            
          </div>
          `,
          pilihanSoal: [
            "Nested if digunakan ketika kita ingin mengulang beberapa pernyataan dengan kondisi tertentu.",
            "Nested if digunakan ketika kita ingin membandingkan dua variabel dalam satu kondisi.",
            "Nested if digunakan ketika kita ingin melakukan beberapa percabangan berlapis berdasarkan kondisi yang kompleks.",
            "Nested if digunakan ketika kita ingin membuat perulangan dalam program."
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 2",
          isiMateri: `
            Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
            `,
          Image: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Perhatikan kode Pascal berikut!
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_soal1.png"
                style="height: 70%; width: 70%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Apa output yang akan ditampilkan setelah menjalankan program di atas?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Hasil: A",
            "Hasil: B",
            "Hasil: C",
            "Hasil: D"
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "Latihan 3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Berikut adalah soal mengenai kode nested if yang salah dalam bahasa Pascal:
              </span>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/assetIsiMater/materi5/img_soal2.png"
                style="height: 100%; width: 100%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
                Apa kesalahan dalam kode di atas dan bagaimana cara memperbaikinya?
              </span>
            </div>
          </div>
          `,
          pilihanSoal: [
            "Tidak ada kesalahan dalam kode ini.",
            "Kesalahan terjadi karena kurangnya blok begin dan end untuk setiap pernyataan if.",
            "Kesalahan terjadi karena tipe data variabel 'nilaiA' dan 'nilaiB' harus dideklarasikan dengan var di depannya.",
            "Kesalahan terjadi karena pernyataan if dan else tidak saling berhubungan secara terstruktur."
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];

export type ArrayCreateMateri = CreateMateriType[]

export interface CreateMateriType {
  fullname: string
}

export interface DetailMateriTypeResponse {
  name: string
  status: string
  fullname: string
  tanggalMulai: string
  step: number
  pertanyaan: PertanyaanType[]
  latihan: HasilSoalType[]
  rangkuman: string
}

export interface UpdateSteptypeResponse {
  step: number
}

export interface DetailMateriState {
  idMateri: string
  name: string
  status: string
  fullname: string
  step: number
  latihan: Latihan[]
  rangkuman: string
}

export interface Latihan {
  jawaban: number
  hasil: boolean
}

export interface CreateMateriTypeResponse {
  name: string
}

export interface UpdateRangkumanTypeResponse {
  rangkuman: string
}

export interface HasilSoalType {
  name: string,
  jawaban: number,
  hasil: boolean,
  textJawaban: string
}

export interface BodySendEvaluasi {
  hasilSoal: HasilSoalType[]
  poin: number
}

export interface HasilEvaluasiType {
  name: string,
  jawaban: number,
  hasil: boolean,
}

export interface PertanyaanType {
  fullname: string,
  pertanyaan: string
}

export interface PertanyaanResponse {
  id: string,
  pertanyaan: PertanyaanType
}

export interface PertanyaanTypeResponse {
  pertanyaan: PertanyaanType
}

export interface IsEvaluasiTypeResponse {
  isEvaluasi: boolean
}