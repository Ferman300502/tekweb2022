Vue.createApp({
    data() {
        return {
            articles: null,
        };
    },
    methods: {
        getMarkdownData() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const article = urlParams.get('article');
            var converter = new showdown.Converter();
            axios
                .get(
                    'https://github.com/Ferman300502/tekweb2022/tree/main/content' + articles
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getMarkdownData()
    },
}).mount("#app");