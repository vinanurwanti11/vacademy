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

export const soalLogic: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Kuesioner Logical Thinking",
      isiMateri: [
        {
          judulMateri: "1",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat menghanalisis ciri-ciri sejumlah objek yang sejenis.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-1-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-1-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-1-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-1-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-1-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
              <div style="font-family: Arial, sans-serif;" >
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Saya dapat membandingkan ciri-ciri untuk ditemukan ciri yang sama dan selalu ada serta yang hakiki.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-2-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-2-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-2-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-2-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-2-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya dapat mengabstraksikan, yaitu menyisihkan, membuang ciri-ciri yang tidak hakiki dan menangkap ciri-ciri yang hakiki.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-3-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-3-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-3-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-3-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-3-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu menyatakan 1 pendapat afirmatif/positif yaitu pendapat yang mengiyakan, yang secara tegas mengatakan keadaan sesuatu.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-4-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-4-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-4-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-4-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-4-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu menyatakan pendapat negatif yaitu pendapat yang secara tegas menerangkan tentang tidak adanya sesuatu sifat pada sesuatu hal.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-5-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-5-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-5-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-5-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-5-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu menyatakan pendapat modalitas (kemungkinan) yaitu pendapat yang menerangkan kemungkinan- kemungkinan sesuatu sifat pada sesuatu hal.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-6-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-6-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-6-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-6-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-6-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu membuat keputusan induktif, yaitu keputusan yang diambil dari pendapat-pendapat khusus menuju ke satu pendapat umum.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-7-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-7-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-7-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-7-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-7-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu membuat keputusan deduktif, yaitu keputusan yang diambil dari pendapat umum ke khusus.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-8-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-8-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-8-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-8-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-8-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu membuat keputusan analogis, yaitu keputusan yang diperoleh dengan jalan membandingkan atau menyesuaikan dengan pendapat khusus yang sudah ada.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-9-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-9-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-9-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-9-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-9-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu menyebutkan seluruh informasi dari apa yang diketahui dan apa yang ditanyakan soal dengan tepat.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-10-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-10-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-10-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-10-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-10-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu menentukan langkah yang ditempuh dengan teratur dalam menyelesaikan permasalahan yang diberikan dari awal hingga akhir.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-11-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-11-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-11-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-11-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-11-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu mengungkapkan pendapat atau alasan logis pada langkah-langkah penyelesaian yang digunakan untuk menyelesaikan permasalahan yang diberikan dari awal hingga akhir.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-12-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-12-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-12-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-12-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-12-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya dapat menyelesaikan soal secara tepat pada setiap langkah serta dapat memberi argumen pada setiap langkah.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-13-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-13-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-13-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-13-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-13-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya dapat mengungkapkan alasan logis untuk jawaban akhir yang kurang tepat.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-14-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-14-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-14-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-14-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-14-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
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
                  Saya mampu memberikan kesimpulan dengan tepat dari suatu permasalahan yang ada berdasarkan langkah yang telah ditempuh.
                  </span>
                </div>       
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;" key="PP-15-1">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-15-2">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  2
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-15-3">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-15-4">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  4
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;" key="PP-15-5">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  5
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 5,
          UrlYoutube: "",
          type: "soal"
        },
      ]
    },
    status: "materi"
  }
];