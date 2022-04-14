class SubscrCoursView {
    static onLoad()
    {
        let text = document.getElementById("main").innerHTML;
        text +="<div>Курсы</div>";

        document.getElementById("main").innerHTML=text;
    }
    static cours(cours_js)
    {
        let cours = JSON.parse(cours_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='cours_list_cab'>";
        for (let i=0; i<cours.length;i++) {
            text +="<div onclick='SubscrCoursController.goToCours("+cours[i].id+")' class='cours_cab'><img src='https://lern.tiwy.ru/"+cours[i].img+"'>"+cours[i].name+"</div>";
        }
        text +="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static showChapter(chapter_js)
    {
        let chapter = JSON.parse(chapter_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class=\"hamburger-menu\">";
        text +="<input id=\"menu__toggle\" type=\"checkbox\" />";
        text +="<label class=\"menu__btn\" for=\"menu__toggle\">";
        text +="<span></span>";


        text +="</label>";
        text +="<div class='chapter_list_show'>";
        for (let i=0; i<chapter.length;i++) {
            text +="<div class='chapter_show'><div class='chapter_name_show'>"+chapter[i].name+"</div></div>";

            if(chapter[i].articles!="" && chapter[i].articles!=null)
            {
                for (let j=0; j<chapter[i].articles.length;j++)
                {
                    text +="<div class='article_show' onclick='SubscrCoursController.goToArticle("+chapter[i].articles[j].id+")'>"+chapter[i].articles[j].name+"</div>";
                }
            }
        }

        document.getElementById("main").innerHTML=text;
    }
    static article(json_article)
    {
        let article = JSON.parse(json_article);
        let text = document.getElementById("main").innerHTML;
        text += "<div id='view' class='view'>Просмотр</div>";
        document.getElementById("main").innerHTML=text;
        let view =  document.getElementById("view");

        ShowCoursView.input(article.text);
    }
    static lern(id,json_lesson)
    {

        let text = document.getElementById("main").innerHTML;
        text +="<div>Информация по изучению данной темы</div>";
        text +="<button onclick='SubscrCoursController.addLesson("+id+")'>Повторение</button>";
        let lesson=JSON.parse(json_lesson);
        if(lesson.lastDate!=null && lesson.lastDate!="")
        {
            text +="<div>Количество повторов "+lesson.count+"</div>";
            text +="<div>Последний повтор "+lesson.lastDate+"</div>";
            text +="<div>Все повторы</div>"
            for(let i=0;i<lesson.allDate.length;i++)
            {
                text +="<div>"+lesson.allDate[i]+"</div>";

            }
        }

        document.getElementById("main").innerHTML=text;
    }
    static input(text)
    {

        let view = document.getElementById("view");
        change();
        function change() {
            view.innerHTML = Redactor.parseMd(text);

            // находим элемент, в который будем рендерить формулу
            let formula = document.getElementsByTagName("formula");

// вызываем метод библиотеки для отображения формулы

            for (let i = 0; i < formula.length; i++)
                katex.render(formula[i].innerHTML, formula[i]);

            let chem = document.getElementsByClassName("chem");

            for (let i = 0; i < chem.length; i++) {
                var elem2 = chem[i];
                var ex2 = ChemSys.compile(chem[i].innerHTML);
                chem[i].innerHTML = "";
                ChemSys.draw(elem2, ex2);
            }

            var chem_str = document.getElementsByClassName("chem_str");

            for (let i = 0; i < chem_str.length; i++) {
                var elem2 = chem_str[i];
                var ex2 = ChemSys.compile(chem_str[i].innerHTML);
                chem_str[i].innerHTML = ex2.html();

            }
            hljs.highlightAll();
        }
    }

}