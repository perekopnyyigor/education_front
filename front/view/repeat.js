class RepeatView {
    static onLoad(lesson_json)
    {
        let lesson = JSON.parse(lesson_json);
        let text = document.getElementById("main").innerHTML;
        text+="<div class='repeat_menu'>";
        for (let i=0; i<lesson.length;i++) {


            let datetime=lesson[i].lastDate.split(' ');
            let date = datetime[0].split('-');
            let lastdate=date[2]+"."+date[1]+"."+date[0];

            text+="<div onclick='RepeatController.goToArticle("+lesson[i].article_id+")' class='repeat_menu_punkt'>";
            text +="<div class='repeat_menu_punkt_name' >"+lesson[i].article.name+"</div>";
            text +="<img src='https://lern.tiwy.ru/"+lesson[i].article.img+"'>";
            text +="<div>Повторений: "+lesson[i].count+"</div>";
            text +="<div>Последнее: "+lesson[i].days.toFixed(0)+"дн. назад</div></div>";
        }
        text+="</div>";
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

        document.getElementById("main").innerHTML=text;
    }
}