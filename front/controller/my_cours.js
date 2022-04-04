class MyCoursController {

    static addCours()
    {
        let cours = MyCoursView.getNameCours();
        Cours.add(cours,cours.file);
        alert(Cours.message);
        MyCoursController.onload();
    }
    static onload()
    {
        MainView.head();
        CabinetView.onload();
        User.findMyCours();
        MyCoursView.showCours(User.message);
        MyCoursView.form();

    }
    //редактирование курса
    static coursRedactForm(id)
    {

        MainView.head();
        CabinetView.onload();
        MyCoursView.coursRedact(id);
        Cours.findChapter(id);
        setTimeout(MyCoursView.showChapter, 100, Cours.message);
       // MyCoursView.showChapter(Cours.message);

    }
    //открытие формы при возращении
    static coursRedactFormBack(id,cours)
    {

        MainView.head();
        CabinetView.onload();
        MyCoursView.coursRedact(id);
        //Cours.findChapter(id);
        setTimeout(MyCoursView.showChapter, 100, cours);
        //MyCoursView.showChapter(Cours.message);

    }

    static createChapter()
    {
        let chapter = MyCoursView.getDataChapter();
        Chapter.add(chapter);
        MyCoursController.coursRedactForm(chapter.cours);

    }
    //создать статью
    static createArticle(chapter_id,chapter_cours)
    {

        let name = prompt("Введите название статьи");
        Article.add(name,chapter_id);
        MyCoursController.coursRedactForm(chapter_cours);

    }
    //перейти в редактор
    static goToRedact(article_id)
    {

        MainView.head();

        Article.getArticle(article_id);
        //Redactor.onLoad(Article.message);
        //alert(Article.message);
        setTimeout(Redactor.onLoad,100,Article.message)



    }
    static goToRedactSimple(article_id)
    {
        localStorage.setItem("article_id",article_id);
        window.location.href = 'https://lern.tiwy.ru/front/pages/simple_redactor.html'

    }
    static deleteCours(id)
    {
        let del = confirm("Вы действилельно хотите удалить курс и все вложенные темы?");
        if(del)
            Cours.delete(id);
        alert(Cours.message);

    }
    static goToOptions(id,cours)
    {
        MainView.head();
        CabinetView.onload();

        //Cours.findChapter(cours);
        MyCoursView.coursRedact(cours);
        MyCoursView.showChapter(Cours.message);

        Article.getArticle(id);
        alert(Article.message);
        MyCoursView.optionForm(Article.message);
    }
    static setOption()
    {
        let option = MyCoursView.getDataOption();
        Article.saveOption(option,option.file);
        alert(Article.message);
    }

}