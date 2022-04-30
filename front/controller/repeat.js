class RepeatController {
    static onLoad()
    {
        MainView.head();

        CabinetView.onload();
        User.findMyCours();
        RepeatView.showCours(User.message);


        User.getRepeat();
        RepeatView.onLoad(User.message);

        //alert(User.message);
    }
    static goToArticle(id,cours_id)
    {
        MainView.head();

        User.getRepeat(cours_id);
        RepeatView.onLoad(User.message);
        if (id!=null)
        {
            Article.getArticle(id);
            RepeatView.article(Article.message);
            User.getLesson(id);
            RepeatView.lern(id,User.message);
        }

    }
    static goToArticle1(cours_id)
    {
        MainView.head();

        CabinetView.onload();
        User.findMyCours();
        RepeatView.showCours(User.message);


        User.getRepeat(cours_id);
        RepeatView.onLoad(User.message);
    }
    static addLesson(article_id)
    {
        User.addLesson(article_id);
        RepeatController.goToArticle(article_id);
    }
    static goToCard(id,cours_id)
    {
        MainView.head();

        User.getRepeat(cours_id);
        RepeatView.onLoad(User.message);

        //Article.getArticle(id);
        Card.findCard(id, User.id);

        RepeatView.cards(Article.message,Card.message);

        User.getLesson(id);
        RepeatView.lern(id,User.message);
    }
    static addCard()
    {
        let card = RepeatView.getDataCard();
        Card.add(card);
        alert(Card.message);
    }

}