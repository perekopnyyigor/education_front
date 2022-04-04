class SubscrCoursController {
    static onLoad()
    {
        MainView.head();
        CabinetView.onload();
        User.findSubscrib();
        SubscrCoursView.onLoad();
        SubscrCoursView.cours(User.message);
        //alert(User.message);
    }
    static goToCours(cours_id)
    {
        MainView.head();
        Cours.findChapter(cours_id);
        //alert(Cours.message);
        SubscrCoursView.showChapter(Cours.message);
    }
    static goToArticle(id)
    {
        MainView.head();
        SubscrCoursView.showChapter(Cours.message);
        Article.getArticle(id);
        //alert(Article.message);

        SubscrCoursView.article(Article.message);

        User.getLesson(id);
        alert(User.message);
        SubscrCoursView.lern(id,User.message);

    }
    static addLesson(article_id)
    {
        User.addLesson(article_id);
        SubscrCoursController.goToArticle(article_id);
    }

}