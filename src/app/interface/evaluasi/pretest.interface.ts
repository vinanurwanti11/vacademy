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

export const soalPretest: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Evaluasi Pre-test",
      isiMateri: [
        {
          judulMateri: "1",
          isiMateri: `
          Seorang siswa sedang belajar matematika dan dia ingin membuat program sederhana untuk menentukan apakah suatu bilangan adalah bilangan ganjil. Berikut adalah pernyataan yang benar tentang program yang akan dia buat:  
              `,
          Image: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Seorang siswa sedang belajar matematika dan dia ingin membuat program sederhana untuk menentukan apakah suatu bilangan adalah bilangan ganjil. Berikut adalah pernyataan yang benar tentang program yang akan dia buat: <br/>
                </span>
              </div>
                          
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Program tersebut hanya menentukan apakah suatu bilangan adalah bilangan ganjil positif. Karena siswa tersebut hanya ingin membuat program yang mengetahui apakah suatu bilangan termasuk ke dalam bilangan ganjil positif atau bukan.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Program tersebut akan menampilkan pesan bahwa bilangan tersebut adalah bilangan ganjil negatif.  Karena siswa tersebut hanya ingin mengatahui apakah suatu bilangan termasuk bilangan ganjil negatif atau bukan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Program tersebut hanya akan menampilkan pesan bahwa bilangan tersebut adalah bilangan ganjil. Karena program yang dibuat oleh siswa tersebut adalah program untuk menentukan suatu bilangan termasuk ke dalam bilangan ganjil atau bukan.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Program tersebut tidak valid karena tidak memungkinkan untuk menentukan apakah suatu bilangan adalah bilangan ganjil. Karena dalam sebuah program tidak bisa menentukan apakalah bilangan tersebut bilangan ganjil atau bukan.
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Program tidak dapat dibuat, karena tidak ada kondisi yang bisa menyatakan bahwa suatu program termasuk ke dalam bilangan ganjil atau bukan.
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
              Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
              `,
          Image: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut:
                </span>
              </div>  
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/3pre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Susunan dari pseudocode di atas tidak sesuai, manakah susunan yang paling tepat…
                </span>
              </div>            
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	1-4-3-2-5
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	1-2-3-5-4
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	2-3-5-4-1
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	4-3-1-5-2
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	2-4-1-3-5
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre3.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika diinputkan jumlah produk yang dibeli sebanyak 6, maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Anda mendapatkan diskon
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Membeli produk < 10
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Membeli produk = 6
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Tidak terjadi apa-apa
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Selamat anda mendapat diskon
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
          judulMateri: "4",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan code berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre4.png"
                  style="height: 20%; width: 20%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Apabila program tersebut dijalankan, maka akan menggalami erorr. Mengapa?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Penempatan tanda “{“ seharusnya disimpan setelah if sebelum kondisi
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Setelah tanda “{“ dan “}” harus menggunkan tanda “;”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Setelah printf (“A”) harus menggunakan tanda “;”
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Terjadi kesalahan penulisan kondisi
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	“if” harus ditulis dengan huruf kapital
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
          judulMateri: "5",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pernyataan berikut: <br/>
                “Suatu laboratorium memiliki sensor yang akan berbunyi apabila suhu di laboratorium tersebut mencapai lebih dari 100°C yang menandakan tanda bahaya.” <br/>
                Berdasarkan pernyataan di atas, penulisan kode percabangan if yang tepat adalah…
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
                  src="/media/pretest/7a.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7b.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7c.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7d.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7e.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "6",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Seorang siswa diharuskan untuk menentukan jenis diskon yang akan diterima berdasarkan total pembelian di toko buku. Jika total pembelian mencapai Rp100.000 atau lebih, maka siswa akan mendapatkan diskon sebesar 10%. Jika total pembelian kurang dari Rp100.000, maka siswa tidak mendapatkan diskon. Berdasarkan narasi tersebut, jenis percabangan yang paling tepat digunakan adalah...
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	If, karena hanya satu kondisi yang dicari yaitu menentukan apakah siswa yang membeli buku mendapatkan diskon atau tidak.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	If-else, karena diperlukan beberapa kondisi untuk mengecek apakah total pembeliannya mencapai batas syarat mendapatkan diskon jika pembelian mencapai Rp100.000 atau lebih, dan kondisi jika pembelian kurang dari Rp100.000 maka tidak mendapatkan diskon.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Nested-if, karena untuk menentukan pembeli mendapatkan diskon atau tidak diperlukan pengecekan secara bertingkat.c.	Nested-if, karena untuk menentukan pembeli mendapatkan diskon atau tidak diperlukan pengecekan secara bertingkat.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Switch-case, karena diberlukan banyak sekali kondisi  untuk menentukan apakah suatu pelanggan mendapatkan diskon atau tidak.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	For, karena dibutuhkan perulangan untuk mengecek apakah suatu pembeli mendapatkan diskon atau tidak.
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
          judulMateri: "7",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/pretest/pre9.png"
                style="height: 50%; width: 50%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Berdasarkan program di atas, jika inputan = 8, maka output yang dihasilkan adalah…
              </span>
            </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Angka 8 adalah bilangan positif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Angka 8 adalah bilangan negatif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Angka 8 adalah nol. 
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Tidak ada output yang dihasilkan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Error karena sintaks program salah.
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
          judulMateri: "8",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/pretest/pre11.png"
                style="height: 50%; width: 50%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Berdasarkan program di atas, jika inputan = 8, maka output yang dihasilkan adalah…
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
              b.	2-1-3-6-4-5
              </span>
            </div>        
          </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	3-2-4-1-5-6
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	4-1-2-3-6-5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	6-1-3-2-4-5
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
          judulMateri: "9",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre9.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/> Terdapat kesalahan pada program di atas, pada line berapakah kesalahan tersebut?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Posisi Line 1 dan Line 2 terbalik
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Posisi Line 1 dan Line 3 terbalik
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Posisi Line 2 dan Line 3 terbalik
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Posisi Line 2 dan Line 4 terbalik
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Posisi Line 3 dan Line 4 terbalik
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre10.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika pada program berikut kita menginputkan tahun 2024, maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Tahun kabisat
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Bukan tahun kabisat
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	2024 adalah tahun kabisat.
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	2024 bukan tahun kabisat.
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
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "11",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Pada suatu sore yang cerah, Ali sedang merencanakan untuk pergi bermain ke luar rumah. Dia ingin memutuskan aktivitas apa yang ingin dia lakukan terlebih dahulu. Setelah mempertimbangkan beberapa pilihan, dia menyadari bahwa cuaca akan menjadi faktor penentu utama. <br/>
                Jenis percabangan yang paling tepat digunakan oleh Ali dalam membuat keputusan berdasarkan cuaca adalah...
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	If, karena Ali hanya perlu mengecek apakah cuaca cerah.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	If-else, karena Ali perlu menentukan kegiatan apa yang ingin dilakukan, dan apakah cuaca cerah atau tidak.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Nested-if, karena Ali perlu membuat keputusan yang bergantung pada beberapa kondisi yang bertingkat atau terkait satu sama lain.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Switch-case, karena Ali membutuhkan beberapa kondisi untuk menentukan kegiatan apa yang inggin Ali lakukan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	For, karena Ali membutuhkan perulangan untuk menentukan cuaca dan kegiatan apa yang akan ia lakukan.
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
          judulMateri: "12",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre26.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Apabila kita menginputkan nilai x=15 dan y=3, maka hasil output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Hasil : A
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Hasil : B
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Hasil : C
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Error
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Tidak ada output
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre13.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Di bawah ini susunan pseudocode yang tepat adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	1-4-6-5-3-2
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	1-3-2-5-6-2
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	2-3-1-5-6-4
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	3-2-4-1-5-6
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	4-2-1-5-3-6
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
          judulMateri: "14",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan code berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre14.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Apabila program tersebut dijalankan, maka akan menggalami erorr. Mengapa?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Terlalu banyak menggunakan tanda “{}”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Seharusnya  penulisan “else” menjadi “else if”                
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Penulisan kondisi seharusnya menggunakan tanda “( )”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Tidak perlu menggunakan tanda “;”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Penulisan grade ‘A’, seharusnya menjadi grade “A”
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
          judulMateri: "15",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan progran berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre15.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Dari program di atas, dapat disimpulkan bahwa…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Program memeriksa apakah suatu bilangan negatif atau tidak.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Program memeriksa apakah suatu bilangan ganjil atau genap.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Program memeriksa apakah suatu bilangan positif genap, positif ganjil atau bilangan negatif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Program memeriksa apakah suatu bilangan genap atau non-positif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Program memeriksa apakah suatu bilangan positif dan genap.
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
          judulMateri: "16",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dalam bahasa C, apakah switch case dapat digunakan untuk mengevaluasi beberapa kondisi secara bersamaan?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Ya, karena switch case paling tepat digunakan saat terdapat banyak sekali kondisi yang diperlukan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Tidak, karena switch case hanya dapat digunakan untuk mengevaluasi satu kondisi tunggal.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Tidak, karena hanya jika menggunakan ekstensi pihak ketiga dalam bahasa C.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Ya, karena tergantung pada versi dari kompiler yang digunakan. 
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Ya, karena switch case lebih efektif jika digunakan untuk mengecek kondisi secara bersamaa.
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
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut! <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre17.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Inputan dan output yang tepat pada program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Input = Selasa <br/>
                    Output = Batik
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Input = Senin <br/>
                    Output = Seragam Sekolah
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Input = Rabu <br/>
                    Output = Pakaian: Seragam sekolah
                </span>
              </div>        
            </div>
            `,
            `

            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Input = Jumat <br/>
                    Output = Pakaian: Batik
                </span>
              </div>        
            </div>
            `,
            `

            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Input = Kamis <br/>
                    Output = Hari kamis menggunakan pakaian seragam olahraga
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
          judulMateri: "18",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre18.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Jika kita menginputkan angka 3 pada program tersebut, maka outputnya adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Anda memilih Pensil.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Anda memilih Pulpen.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Pilihan tidak valid.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Pensil
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Pulpen 
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
          judulMateri: "19",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut! <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre19.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Terdapat kesalahan output pada program di atas. Kesalahan tersebut terletak pada line…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Line 13 seharusnya di Line 1
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Line 13 seharusnya di Line 8
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Line 10 seharusnya di Line 9
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Line 6 seharusnya di Line 2
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Line 2 seharusnya di Line 1
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
          judulMateri: "20",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan code berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre20.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Apabila program tersebut dijalankan, maka akan menggalami erorr. Mengapa?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Kata “switch” dan “case” tertukar posisi
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Line pertama seharusnya “swich case” bukan “swich” saja
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Tidak perlu menggunakan tanda “{}”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Akhir dari setiap case di tutup oleh “break”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Tidak perlu menambahkan “default”
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];