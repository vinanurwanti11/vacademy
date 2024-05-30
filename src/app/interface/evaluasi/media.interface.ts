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

export const penilaianMedia: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Penilaian Terhadap Media Pembelajaran",
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
                    Media pembelajaran ini dapat meningkatkan produktivitas saya dalam Belajar
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-1-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-1-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-1-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-1-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-1-5}>
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
                <div style="font-family: Arial, sans-serif;">
                  <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                    <span style="font-size: 20px; text-align: justify;">
                    Media pembelajaran ini membuat saya lebih efektif Dalam
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-2-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-2-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-2-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-2-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-2-5}>
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
                    Media pembelajaran dapat meningkatkan hasil belajar dan berpikir kreatif Saya
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-3-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-3-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-3-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-3-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-3-5}>
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
                    Media pembelajaran memiliki prosedur yang jelas dan mudah Dipahami
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-4-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-4-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-4-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-4-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-4-5}>
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
                    Media pembelajaran dapat menunjang tercapainya tujuan pembelajaran Saya
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-5-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-5-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-5-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-5-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-5-5}>
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
                    Media pembelajaran mudah digunakan
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-6-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-6-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-6-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-6-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-6-5}>
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
                    Media pembelajaran membuat pembelajaran menjadi lebih Menarik
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-7-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-7-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-7-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-7-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-7-5}>
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
                    Media pembelajaran membuat pembelajaran menjadi lebih menyenangkan
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-8-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-8-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-8-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-8-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-8-5}>
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
                    Media pembelajaran cocok digunakan sebagai alat Pembelajaran
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-9-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-9-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-9-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-9-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-9-5}>
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
                    Saya akan menggunakan media pembelajaran untuk belajar
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-10-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-10-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-10-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-10-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-10-5}>
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
                    Saya akan sering menggunakan media pembelajaran ini untuk belajar secara rutin
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-11-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-11-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-11-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-11-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-11-5}>
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
                    Saya akan merekomendasi kan media pembelajaran ini kepada teman Saya
                    </span>
                  </div>       
                </div>
                `,
          pilihanSoal: [
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-12-1}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        1
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-12-2}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        2
                        </span>
                      </div>        
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-12-3}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        3
                        </span>
                      </div>           
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-12-4}>
                      <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                        <span style="font-size: 20px; text-align: justify;">
                        4
                        </span>
                      </div>
                    </div>
                    `,
            `
                    <div style="font-family: Arial, sans-serif;" key={PP-12-5}>
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