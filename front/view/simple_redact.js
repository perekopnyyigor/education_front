class SimpleRedactor {


    static onLoad(article_json) {

        let article = JSON.parse(article_json);
        alert(article.cours);
        let text = document.getElementById("main").innerHTML;
        text += "<div ><button onclick='SimpleRedactorController.save("+article.id+")'>Сохранить</button></div>";
        text += "<div ><button onclick='SimpleRedactorController.back("+article.cours+")'>Назад</button></div>";
        text += "<div ><input name='file' type='file'  onchange='SimpleRedactorController.addImg("+article.id+")'></div>";
        text +="<textarea style=\"width: 60%; height: 500px;\" id=\"area1\" cols=\"40\"></textarea></div>";
        document.getElementById("main").innerHTML = text;


        document.getElementById("area1").innerHTML=article.text;
        bkLib.onDomLoaded(function() { new nicEditor({fullPanel : true}).panelInstance('area1'); });
        //SimpleRedactor.input(article.text);

    }
    static getImgData()
    {
        return document.getElementsByName("file")[0].files[0];
    }
    static getText()
    {
        let nicE = new nicEditors.findEditor('area1');
        let content = nicE.getContent();


        return  content;
    }
    static input(text)
    {


        let view = document.getElementById("area1");

        change();
        function change() {
            //view.value = Redactor.parseMd(text);

            // находим элемент, в который будем рендерить формулу
            let formula = document.getElementsByTagName("formula");

// вызываем метод библиотеки для отображения формулы

            for (let i = 0; i < formula.length; i++)
                this.katex.render(formula[i].innerHTML, formula[i]);

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