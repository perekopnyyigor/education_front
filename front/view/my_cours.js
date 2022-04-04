class MyCoursView
{
    static form()
    {
        let text = document.getElementById("main").innerHTML;
        text+="<div class='form'>";
        text+="<input name='name' placeholder='Название курса'>";
        text+="<input name='file' type='file' >";
        text+="<select name='type'>";

        text+="<option>Выберите тип доступа</option>";
        text+="<option selected value='open' checked> Открытый доступ</option>";
        text+="<option  value='close'>Закрытый доступ</option>";
        text+="</select>";
        text+="<button onclick='MyCoursController.addCours()'>Создать</button>";
        text+="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static getNameCours()
    {
        User.ini();
        let cours ={
            name:document.getElementsByName("name")[0].value,
            type:document.getElementsByName("type")[0].value,
            file:document.getElementsByName("file")[0].files[0],
            user:User.id
        };
        return cours;
    }
    static showCours(cours_js)
    {
        let cours = JSON.parse(cours_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='cours_list_cab'>";
        for (let i=0; i<cours.length;i++) {
            text +="<div class='cours_cab'><img src='https://lern.tiwy.ru/"+cours[i].img+"'>"+cours[i].name;
            text+="<button onclick='MyCoursController.coursRedactForm(\""+cours[i].id+"\")'>Редактировать</button>";
            text+="<button onclick='MyCoursController.deleteCours(\""+cours[i].id+"\")'>Удалить</button></div>";
        }
        text +="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static coursRedact(id)
    {
        let text = document.getElementById("main").innerHTML;
        text+="<div class='form_cors_redact'>";
        text+="<input name='name' placeholder='Название главы'>";
        text+="<input type='hidden' name='id' value='"+id+"'>";
        text+="<button onclick='MyCoursController.createChapter()'>Создать</button>";
        text+="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static getDataChapter()
    {

        let chapter ={
            name:document.getElementsByName("name")[0].value,
            cours:document.getElementsByName("id")[0].value,

        };
        return chapter;
    }
    //список глав
    static showChapter(chapter_js)
    {
        let chapter = JSON.parse(chapter_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='chapter_list'>";
        for (let i=0; i<chapter.length;i++) {
            text +="<div class='chapter'><div class='chapter_name'>"+chapter[i].name+"</div>";
            text +="<button onclick='MyCoursController.createArticle("+chapter[i].id+","+chapter[i].cours+")'>+</button></div>";
            if(chapter[i].articles!="" && chapter[i].articles!=null)
            {
                for (let j=0; j<chapter[i].articles.length;j++)
                {
                    text +="<div class='article' >"+chapter[i].articles[j].name;
                    text +="<button onclick='MyCoursController.goToRedactSimple("+chapter[i].articles[j].id+")'>Редактор</button>";
                    text +="<button onclick='MyCoursController.goToRedact("+chapter[i].articles[j].id+")'>Редактор Pro</button>";
                    text +="<button onclick='MyCoursController.goToOptions("+chapter[i].articles[j].id+","+chapter[i].articles[j].cours+")'>Свойства</button></div>";
                }

            }

        }

        document.getElementById("main").innerHTML=text;
    }
    static optionForm(article_json)
    {
        let article = JSON.parse(article_json);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='seo_form'>"
        text +=" <input type='hidden' name='article_id' value='"+article.id+"'>";
        text +="<div><div class='name_seo_form'>Название:</div> <input name='name_article' value='"+article.name+"'></div>";
        text +="<div><div class='name_seo_form'>Ключевые слова:</div> <textarea name='keyword'>"+article.keyword+"</textarea></div>";
        text +="<div><div class='name_seo_form'>Описание: </div><textarea name='description'>"+article.description+"</textarea></div>";
        text +="<div><img width='200px' src='https://lern.tiwy.ru/"+article.img+"'></div>";
        text +="<div><input name='option_file' type='file'></div>";

        text +="<button onclick='MyCoursController.setOption()'>Сохранить</button>";
        text +="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static getDataOption()
    {
        let option ={
            id:document.getElementsByName("article_id")[0].value,
            name:document.getElementsByName("name_article")[0].value,
            keyword:document.getElementsByName("keyword")[0].value,
            description:document.getElementsByName("description")[0].value,
            file:document.getElementsByName("option_file")[0].files[0]
        };
        return option;
    }

}
