class RepeatController {
    static onLoad()
    {
        MainView.head();
        User.getRepeat();
        CabinetView.onload();
        RepeatView.onLoad(User.message);

        //alert(User.message);
    }
    static goToArticle(id)
    {
        MainView.head();

        User.getRepeat();
        RepeatView.onLoad(User.message);

        Article.getArticle(id);
        SubscrCoursView.article(Article.message);

        User.getLesson(id);
        RepeatView.lern(id,User.message);
    }
    static addLesson(article_id)
    {
        User.addLesson(article_id);
        RepeatController.goToArticle(article_id);
    }

}