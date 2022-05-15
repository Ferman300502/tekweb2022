Vue.createApp({
    data() {
        return {
            message: "Hello Vue!",
            header: {},
        };
    },
    methods: {
        getHeaderData() {
            axios
                .get(
                    "D:\1. Tugas\Semester 4\Tekweb Lanjut\CopyPorto\header.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.header = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },
        getAboutData() {
            axios
                .get(
                    "./header.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.about = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },
        getServicesData() {
            axios
                .get(
                    "D:\1. Tugas\Semester 4\Tekweb Lanjut\CopyPorto \services.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.services = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },

    },
    beforeMount() {
        this.getHeaderData() //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
    },
}).mount("#app");