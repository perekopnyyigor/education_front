class UrlController {
    static onLoad()
    {
        let res = Url.getUrl();
        if (res.type==="cours")
        {
            MainController.goToCours(res.id);
        }
        if (res.type==="article")
        {
            MainController.goToArticle(res.id);
        }


    }
}