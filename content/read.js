Vue.createApp({
    data() {
        return {
            article: null,
        };
    },
    methods: {
        getMarkdownData() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const article = urlParams.get('articles');
            var converter = new showdown.Converter();
            axios
                .get(
                    'https://raw.githubusercontent.com/Ferman300502/tekweb2022/main/content/' + articles
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.articles = html;
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