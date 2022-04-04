class SimpleRedactorController {
    static onoload()
    {
        let id = localStorage.getItem("article_id");
        Article.getArticle(id);
        MainView.head();
        SimpleRedactor.onLoad(Article.message);

    }
    static save(id)
    {
        let text = SimpleRedactor.getText();

        Article.save(id,text);
        alert(Article.message);
    }
    static back(id)
    {
        Cours.findChapter(id);
        MyCoursController.coursRedactFormBack(id,Cours.message);

    }
    static addImg(articleId)
    {
        let img = Redactor.getImgData();
        Article.addImg(articleId,img);
        MyCoursController.goToRedactSimple(articleId);
    }


}