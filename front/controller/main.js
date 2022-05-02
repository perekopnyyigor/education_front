class MainController {
    static onLoad()
    {
        let res = Url.getUrl();

        if (res.id!=null && res.id!="")
        {
            UrlController.onLoad();
        }
        else
        {
            MainView.head();
            Cours.findCours();
            MainView.cours(Cours.message);
            Article.findArticles();
            MainView.articles(Article.message);

        }


    }


    static cabinet()
    {
        CabinetController.onLoad();
    }
    static goToCours(cours_id)
    {
        MainView.head();
        Cours.findChapter(cours_id);
        //alert(Cours.message);
        ShowCoursView.showChapter(Cours.message);
        Cours.findOneCours(cours_id);
        ShowCoursView.coursInfo(Cours.message);
    }
    static goToArticle(id)
    {

        MainView.head();

        Article.getArticle(id);

        let article = JSON.parse(Article.message);
        Cours.findChapter(article.cours);
        ShowCoursView.showChapter(Cours.message);
        ShowCoursView.article(Article.message);
        MainView.seo(Article.message);

    }
}