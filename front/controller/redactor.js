class RedactorController {
    static back(id)
    {

        MyCoursController.coursRedactFormBack(id,Cours.message);


    }
    static save(id)
    {
        let text = Redactor.getText();
        Article.save(id,text);
        alert(Article.message);
    }
    static addImg(articleId)
    {
        let img = Redactor.getImgData();
        Article.addImg(articleId,img);
        MyCoursController.goToRedact(articleId);
    }

}