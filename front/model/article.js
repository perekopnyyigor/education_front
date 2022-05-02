class Article
{
    static message;
    static add(name,chapter)
    {
        if(name!=null && name!="")
        {
            let article={
                name:name,
                chapter_id:chapter
            };
            let article_json = JSON.stringify(article);
            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://tiwy.ru/back/responze/article.php?action=add", false);
            let formData = new FormData();
            formData.append("article", article_json);

            xhttp.send(formData);
            Article.message = xhttp.responseText;
        }

    }
    static save(id,text)
    {

        let article={
            id:id,
            text:text
        };
        let article_json = JSON.stringify(article);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/article.php?action=save", false);
        let formData = new FormData();
        formData.append("article", article_json);

        xhttp.send(formData);
        Article.message = xhttp.responseText;

    }
    static saveOption(option,file)
    {

        let option_json = JSON.stringify(option);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/article.php?action=save_option", false);
        let formData = new FormData();
        formData.append("option", option_json);
        formData.append("file[]", file);
        xhttp.send(formData);
        Article.message = xhttp.responseText;

    }
    static getArticle(id)
    {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://tiwy.ru/back/responze/article.php?action=article&id="+id, false);

            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhttp.send();Article.message = xhttp.responseText;

    }
    static addImg(article,file)
    {

        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/article.php?action=add_img", false);
        let formData = new FormData();
        formData.append("file[]", file);
        formData.append("article", article);
        xhttp.send(formData);
        Article.message = xhttp.responseText;
    }
    static findArticles()
    {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/article.php?action=all_article", false);
        let formData = new FormData();
        xhttp.send();
        Article.message = xhttp.responseText;
    }
    /*
    static getArticle(id) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                Article.message = xhttp.responseText;
            }
        };

        xhttp.open("GET", "https://tiwy.ru/back/responze/article.php?action=article",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.send();
    }*/
}