class ShowCoursView {
    static showChapter(chapter_js)
    {
        let chapter = JSON.parse(chapter_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='chapter_list_show'>";
        for (let i=0; i<chapter.length;i++) {
            text +="<div class='chapter_show'><div class='chapter_name_show'>"+chapter[i].name+"</div></div>";

            if(chapter[i].articles!="" && chapter[i].articles!=null)
            {
                for (let j=0; j<chapter[i].articles.length;j++)
                {
                    text +="<a href='https://lern.tiwy.ru/?type=article&id="+chapter[i].articles[j].id+"'>";
                    text +="<div class='article_show'>"+chapter[i].articles[j].name+"</div></a>";
                }

            }

        }

        document.getElementById("main").innerHTML=text;
    }
    static coursInfo(id)
    {

        let text = document.getElementById("main").innerHTML;
        text +="<div>Чтобы добавить материалы в избранное запишитесь на курс</div>";
        text +="<button onclick='ShowCoursController.subscrib("+id+")'>Записаться</button>";
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