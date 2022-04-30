class RepeatView {
    static onLoad(lesson_json)
    {
        let lesson = JSON.parse(lesson_json);
        let text = document.getElementById("main").innerHTML;
        text +="<div class=\"hamburger-menu\">";
        text +="<input id=\"menu__toggle\" type=\"checkbox\" />";
        text +="<label class=\"menu__btn\" for=\"menu__toggle\">";
        text +="<span></span>";
        text +="</label>";
        text+="<div class='repeat_menu'>";
        for (let i=0; i<lesson.length;i++) {


            let datetime=lesson[i].lastDate.split(' ');
            let date = datetime[0].split('-');
            let lastdate=date[2]+"."+date[1]+"."+date[0];

            text+="<div onclick='RepeatController.goToArticle("+lesson[i].article_id+","+lesson[i].article.cours+")' class='repeat_menu_punkt'>";
            text +="<div class='repeat_menu_punkt_name' >"+lesson[i].article.name+"</div>";
            text +="<img src='https://lern.tiwy.ru/"+lesson[i].article.img+"'>";
            text +="<div>Повторений: "+lesson[i].count+"</div>";
            text +="<div>Последнее: "+lesson[i].days.toFixed(0)+"дн. назад</div></div>";
        }
        text+="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static article(json_article)
    {
        let article = JSON.parse(json_article);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='menu_lern'>";
            text +="<div class='menu_lern_punkt' >Статья</div>";
            text +="<div class='menu_lern_punkt' onclick='RepeatController.goToCard("+article.id+","+article.cours+")' >Карточки</div>";
            text +="<div class='menu_lern_punkt'>Тесты</div>";
        text +="</div>";
        text += "<div id='view' class='view'>Просмотр</div>";
        document.getElementById("main").innerHTML=text;
        let view =  document.getElementById("view");

        ShowCoursView.input(article.text);
    }
    static cards(json_article,json_card)
    {
        let article = JSON.parse(json_article);
        let card = JSON.parse(json_card);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='menu_lern'>";
        text +="<div class='menu_lern_punkt' onclick='RepeatController.goToArticle("+article.id+","+article.cours+")'>Статья</div>";
        text +="<div class='menu_lern_punkt' onclick='RepeatController.goToCard("+article.id+","+article.cours+")' >Карточки</div>";
        text +="<div class='menu_lern_punkt'>Тесты</div>";
        text +="</div>";

        text += "<div id='view' class='view'>";
        for (let i=0; i<card.length;i++)
        {
            text += "<div id='view' class='card'>"+card[i].name+"</div>";
        }
        text +="</div>";
        document.getElementById("main").innerHTML=text;
        let view =  document.getElementById("view");

        //ShowCoursView.input(article.text);
    }
    static showCours(cours_js)
    {
        let cours = JSON.parse(cours_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='cours_list_cab'>";
        for (let i=0; i<cours.length;i++) {
            text +="<div class='cours_cab' onclick='RepeatController.goToArticle("+null+","+cours[i].id+")'><img src='https://lern.tiwy.ru/"+cours[i].img+"'>"+cours[i].name;
            text +="</div>";
        }
        text +="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static lern(id,json_lesson)
    {

        let text = document.getElementById("main").innerHTML;
        text +="<div>Информация по изучению данной темы</div>";
        text +="<button onclick='RepeatController.addLesson("+id+")'>Повторение</button>";
        let lesson=JSON.parse(json_lesson);
        if(lesson.lastDate!=null && lesson.lastDate!="")
        {
            let datetime=lesson.lastDate.split(' ');
            let date = datetime[0].split('-');
            let lastdate=date[2]+"."+date[1]+"."+date[0];
            text +="<div>Количество повторов "+lesson.count+"</div>";
            text +="<div>Последнее: "+lesson.days.toFixed(0)+" дн. назад</div></div>";
            text +="<div>Все повторы</div>"
            for(let i=0;i<lesson.allDate.length;i++)
            {
                text +="<div>"+lesson.allDate[i]+"</div>";

            }
        }
        text +="<input type='hidden' name='article' value='"+id+"'>";
        text +="<div>Добавить карточку</div>";
        text +="<div>Термин</div>";
        text +="<div><input name='name'></div>";
        text +="<div>Определение</div>";
        text +="<div><textarea name='text'>Определение</textarea></div>";
        text +="<div><button onclick='RepeatController.addCard()'>Добавить</button></div>";
        document.getElementById("main").innerHTML=text;
    }
    static getDataCard()
    {
        let card ={
            name:document.getElementsByName("name")[0].value,
            text:document.getElementsByName("text")[0].value,
            article: document.getElementsByName("article")[0].value,
            user:User.id
        };
        return card;
    }
    static makeCard()
    {

        let text = document.getElementById("main").innerHTML;
        text +="<div>Добавить карточку</div>";
        text +="<div>Термин</div>";
        text +="<div><input name='name'></div>";
        text +="<div>Определение</div>";
        text +="<div><textarea>Определение</textarea></div>";
        text +="<div><button>Добавить</button></div>";
        document.getElementById("main").innerHTML=text;
    }
}