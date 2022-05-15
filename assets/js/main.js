Vue.createApp({
    data() {
        return {
            message: "Hello Vue",
            header: {
                title: "Ferman Alfiansyah",
                description: "Mahasiswa Program Studi Sistem Informasi Angkatan 2020. Universitas Ahmad Dahlan Yogyakarta.",
                social: {
                    ig: {
                        url: "https://www.instagram.com/ferman30_/",
                    },
                    github: {
                        url: "https://github.com/Ferman300502",
                    },
                    yt: {
                        url: "https://www.youtube.com/channel/UClN0TM6g3hmPsuA2vTKmM8g",
                    }
                }
            },
            about: {
                title: "Ferman Alfiansyah",
                subtitle: "Information System",
                description: "Mahasiswa Universitas Ahmad Dahlan Angkatan 2020. Mata Kuliah Teknologi Website Lanjut.",
            },
            articles: {
                title: "Figma",
                title1: "Ms Word",
                title2: "Microsoft Power Point",
                desc: "Aplikasi berbasis web untuk mendesain UI dan UX yang dapat digunakan untuk membuat aplikasi, web, serta berbagai komponen user interface yang dapat digabungkan ke dalam project lainnya.",
                desc1: "Sebuah program yang merupakan bagian dari paket instalasi Microsoft Office, berfungsi sebagai perangkat lunak pengolah kata meliputi membuat, mengedit, dan memformat dokumen.",
                desc2: "Sebuah program presentasi yang dibuat pada perangkat lunak dari Microsoft yang memungkinkan pengguna untuk menambahkan fitur audio, visual, dan audio/visual ke presentasi.",
            },

        }
    }
}).mount('#app')