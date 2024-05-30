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

export const soalPosttest: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Evaluasi Post-test",
      isiMateri: [
        {
          judulMateri: "1",
          isiMateri: `
                 
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Seorang siswa sedang belajar matematika dan dia ingin membuat program sederhana untuk menentukan apakah suatu bilangan adalah bilangan bulat. Pernyataan manakah yang benar tentang program yang akan dia buat?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Program tersebut hanya menentukan apakah suatu bilangan adalah bilangan bulat negatif. Karena program tersebut ingin menentukan apakah suatu bilangan termasuk bilangan bulat negatif atau bukan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Program tersebut akan menampilkan pesan bahwa bilangan tersebut adalah bilangan bulat positif jika bilangan bulat tersebut lebih besar dari 0. Karena program yang ingin dibuat adalah program yang menentukan bilangan bulat positif saja.
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Program tersebut hanya akan menampilkan pesan bahwa bilangan tersebut adalah bilangan bulat. Karena program yang dibuat bertujuan untuk menentukan bilangan bulat.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Program tersebut tidak valid karena tidak memungkinkan untuk menentukan apakah suatu bilangan adalah bilangan bulat. Karena program tidak bisa dibuat untuk menentukan apakah suatu bilangan termasuk bilangan bulat atau bukan.
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Program tidak dapat dibuat, karena tidak ada kondisi yang bisa menyatakan bahwa suatu program termasuk ke dalam bilangan bulat atau bukan.
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "2",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po2.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>   
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Output dari program di atas adalah…
                  </span>
                </div>         
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Nilai x lebih besar dari 10
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Nilai x tidak lebih besar dari 10
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Tidak ada output yang ditampilkan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Terjadi kesalahan saat kompilasi
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Tidak dapat ditentukan
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "3",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po3.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Susunan pseudocode yang tepat adalah…
                  </span>
                </div>         
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	1-2-4-3-5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	2-1-5-4-3
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	3-4-1-2-5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	4-2-3-5-1
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	3-1-2-4-5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "4",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/4po.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Saat program di atas dijalankan, maka program tersebut tidak akan menampilkan apa-apa. Mengapa?
                  </span>
                </div>  
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Karena variabel x tidak diinisialisasi dengan nilai yang memenuhi kondisi if.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Karena terdapat tanda kurung kurawal yang kurang di dalam blok if.
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Karena variabel x tidak dideklarasikan sebelum digunakan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Karena kondisi if tidak dapat menangani nilai x yang kurang dari 10.
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Karena tidak ada kesalahan, program akan berjalan dengan baik.
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "5",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Seorang polisi ingin membuah program untuk mendeteksi kecepatan dari sebuah kendaraan. Jika kecepatan mencapai 60 km/jam atau lebih, maka akan muncul peringatan bahwa kecepatan sudah melewati batas maksimal.<br/>
                  Program if yang paling tepat terhadap narasi di atas adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/posttest/7a.png"
                style="height: 70%; width: 70%;"
              />
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/posttest/7b.png"
                style="height: 70%; width: 70%;"
              />
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/posttest/7c.png"
                style="height: 70%; width: 70%;"
              />
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/posttest/7d.png"
                style="height: 70%; width: 70%;"
              />
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/posttest/7ee.png"
                style="height: 70%; width: 70%;"
              />
            </div>           
          </div>
          `
          
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "6",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Permasalahan berikut yang dapat dimplementasi kedalam percabangan if-else, kecuali...
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Menentukan remedial atau tidaknya siswa dalam ujian, karena untuk menentukan remedial atau tidaknya siswa membutuhkan beberapa kali pengecekan kondisi.
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Menentukan keterlambatan absensi masuk, karena ada kebutuhan untuk menentukan dua kemungkinan kondisi: keterlambatan dan ketepatan waktu.
              </span>
            </div>        
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	Menentukan status kelulusan berdasarkan rata-rata nilai ujian, karena kondisi kelulusan memiliki dua kemungkinan, lulus atau tidak lulus berdasarkan rata-rata nilai ujian.
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	Menentukan besarnya tunjangan keluarga berdasarkan status pernikahan, karena terdapat beberapa kemungkinan status pernikahan yang berbeda.
              </span>
            </div>
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              e.	Menentukan jenis bunga yang sesuai dengan bulan kelahiran, karena diperlukan kondisi yang sangat banyak untuk menentukan jenis bungan yang sesuai dengan bulan.
              </span>
            </div>
          </div>
          `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "7",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po7.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Susunan  yang paling tepat untuk program di atas adalah..
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	3-1-4-2
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	3-4-2-1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	2-3-1-4
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	2-4-1-3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	1-3-2-4
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "8",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po88.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika kita menginputkan jumlah uang Rp. 150.000 dan menginput total belanja = Rp. 20.000, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	20000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	80000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	100000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	130000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	150000
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "9",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po19.png"
                    style="height: 60%; width: 60%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pada program di atas terdapat kesalahan, pada line berapakah kesalahan tersebut?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Posisi Line 1 terbalik dengan di Line 3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Posisi Line 3 terbalik dengan di Line 5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Posisi Line 5 terbalik dengan di Line 1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Posisi Line 2 terbalik dengan di Line 4
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Posisi Line 6 terbalik dengan di Line 3
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "10",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po23.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pernyataan yang sesuai dengan program di atas adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	program yang menentukan tingkat kesulitan soal perdasarkan nilai
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	program yang menentukan nilai soal perdasarkan tingkat kesulitan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	program untuk menentukan nilai
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	program untuk menentukan tingkat kesulitan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	program untuk menentukan nilai soal dan juga tingkat kesulitannya
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "11",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Seorang pelatih atletik memiliki persyaratan berikut untuk siswa yang ingin bergabung dengan tim atletiknya: <br/>
                  •	Siswa harus memiliki tinggi badan minimal 160 cm. <br/>
                  •	Jika tinggi badan siswa kurang dari 160 cm, maka siswa harus memiliki berat badan minimal 50 kg. <br/>
                  Berdasarkan persyaratan di atas, jenis percabangan yang tepat untuk digunakan dalam program pengecekan kelayakan siswa adalah...
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	If, karena hanya diperkukan satu kali pengecekan yaitu siswa yang memiliki tinggi badan 160 cm.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	If-Else, karena diperlukan pengcekan untuk mengukur tinggi badan dan berat badan siswa.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Nested-If, karena pada kasus tersebut diperlukan pengecekan kondisi bertingkat.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Switch-Case, karena diperlukan banyak kondisi untuk menentukan siswa yang memenuhi syarat masuk tim atletik.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	For, karena diperlukan perulangan pada kasus tersebut.
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "12",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po26.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Dari program di atas, jika kita menginputkan nilai ujian = 80 dan nilai praktek = 65, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Selamat! Anda memenuhi syarat untuk kursus lanjutan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Maaf, Anda belum memenuhi syarat untuk kursus lanjutan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Tidak ada output
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Program error
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Nilai ujian = 80 dan Nilai praktek = 65
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "13",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseuducode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po27.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pseudocode di atas belum memiliki susunan yang tepat. Susunan pseudocode yang tepat adalah...
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	1-2-3-4-5-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	1-3-2-5-4-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	1-4-2-3-5-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	2-4-3-1-5-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	3-1-5-4-6-2
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "14",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po30.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Terdapat kesalahan pada pseudocode di atas, kesalahan tersebut terdapat pada line…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Posisi Line 1 dan Line 3 terbalik
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Posisi Line 2 dan Line 1 terbalik
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Posisi Line 4 dan Line 6 terbalik
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Posisi Line 5 dan Line 7 terbalik
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Posisi Line 7 dan Line 4 terbalik 
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "15",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po31.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Pernyataan yang sesuai dengan program di atas adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Tidak mendapat beasiswa apabila peringkat 10
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Apabila peringkat 10 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Apabila peringkat 5 maka mendapatkan beasiswa selama 2 semester
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Apabila peringkat 5 dan apabila pengasilan 1500000 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Apabila peringkat 5 dan apabila pengasilan 1500000 maka tidak mendapatkan beasiswa 
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "16",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dalam pengembangan perangkat lunak, kapan switch case paling tepat digunakan?<br/>
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Ketika hanya ada satu pilihan yang harus dievaluasi, karena switch case memungkinkan untuk memeriksa satu kondisi secara langsung.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Ketika ada banyak pilihan dan setiap pilihan harus dievaluasi secara terpisah berdasarkan nilai variabel tertentu, karena switch case memungkinkan penanganan banyak kondisi dengan lebih bersih dan terstruktur dibandingkan dengan if-else.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Ketika hanya ada dua pilihan, karena switch case kurang efisien dan lebih rumit dibandingkan dengan if-else untuk hanya dua kondisi.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Ketika hanya ada beberapa pilihan yang mungkin, tetapi setiap pilihan harus mengevaluasi beberapa kondisi secara bersamaan, karena switch case tidak mendukung evaluasi beberapa kondisi secara bersamaan dengan baik.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Tidak ada situasi di mana switch case cocok digunakan, karena pernyataan ini tidak benar, switch case sangat berguna dalam situasi tertentu.
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "17",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program case berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po37.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Dari program di atas, maka output yang tepat adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Excellent!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Good!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Fair!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Needs Improvement!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Invalid Grade!
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "18",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po38.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika kita menginputkan operator = ‘-‘, menginputkan angka 5 dan 7, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Hasil penjumlahan: 12.00
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Hasil pengurangan: -2.00
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Hasil perkalian: 5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Tidak ada output
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Program error
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "19",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:
                </div> 
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po39.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Program di atas merupakan program diskon di sebuah restoran. Syarat untuk mendapatkan promo tersebut yaitu:
                  <br/>-	Jika membeli makanan (m), mendapat diskon 10%
                  <br/>-	Jika membeli minuman (d), mendapat diskon 5%
                  <br/>-	Jika membeli dessert (s), mendapat diskon 8%
                  <br/>-	Jika membeli paket makan dan minum (p), mendapat diskon 15%
                  <br/>-	Jika membeli paket komplit (k), mendapat diskon 25%.
                  Pada program di atas terdapat ketidak sesuaian dengan syarat yang diberikan. Pada line berapakah yang tidak sesuai?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Posisi Line 1 terbalik dengan Line 2
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Posisi Line 2 terbalik dengan Line 5
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	Posisi Line 5 terbalik dengan Line 11
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	Posisi Line 8 terbalik dengan Line 11
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              e.	Posisi Line 14 terbalik dengan Line 5
              </span>
            </div>           
          </div>
          `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "20",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan percabangan switch-case berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po40.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Apakah code di atas sesuai dengan percabangan switch-case…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Ya, pernyataan di atas valid dan tidak akan menimbulkan kesalahan saat kompilasi.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Tidak, pernyataan tersebut tidak valid karena mencampur tipe data karakter dan bilangan bulat dalam satu switch case.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Tidak, karena sintaks switch case harus menggunakan kata kunci case of bukan hanya case.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Mungkin, karena tergantung pada nilai variabel nilai.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Ya, karena program di atas sudah menuliskan program dengan baik sesuai ketentuan.
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
      ]
    },
    status: "materi"
  }
];