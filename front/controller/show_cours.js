class ShowCoursController {
    static goToArticle(id)
    {
        MainView.head();
        ShowCoursView.showChapter(Cours.message);
        Article.getArticle(id);
        //alert(Article.message);
        ShowCoursView.article(Article.message);
        MainView.seo(Article.message);
    }
    static subscrib(id)
    {
        User.ini()
        if (User.name=="" || User.name==null)
        {
            alert("Войдите или зарегистрируйтесь");
        }
        else
        {
            User.subscrib(id);
            alert(User.message);
        }

    }

}