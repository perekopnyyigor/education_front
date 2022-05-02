class MainView {
    static head()
    {
        let text = "";

        text += "<div class='name'>tiwy - сайт для создания курсов и конспектов </div>";
        text +="<ul  class='main_menu'>";
        text +="<li  class='main_punkt'><a href='https://tiwy.ru/'>Главная</a></li>";
        text +="<li  class='main_punkt' onclick='MainController.cabinet()'>Кабинет</li></ul>";
        document.getElementById("main").innerHTML=text;
    }
    static seo(article_js)
    {
        let article = JSON.parse(article_js);
        let text = document.getElementsByTagName("head")[0].innerHTML;
        text += '<title itemprop="headline">'+article.name+'</title>';
        text += '<meta itemprop="description" name="description" content="'+article.description+'">';
        text += '<meta itemprop="keywords" name="keywords" content="'+article.keyword+'">';


        text += '<meta property="og:type"               content="article" />';
        text += '<meta property="og:title"              content="'+article.name+'" />';
        text += '<meta property="og:description"        content="'+article.description+'" />';
        text += '<meta property="og:image"              content="'+article.keyword+'" />';

        document.getElementsByTagName("head")[0].innerHTML=text;
    }

    static cours(cours_js)
    {
        let cours = JSON.parse(cours_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='cours_list'>";
        text +="<div class='main_name'>Курсы</div>";


        for (let i=0; i<cours.length;i++) {


            text +="<a href='https://tiwy.ru/?type=cours&id="+cours[i].id+"'>";
            text +="<div class='cours'>";
            text +="<div class='cours_name'>"+cours[i].name+"</div>";
            text +=  "<img src='https://tiwy.ru/"+cours[i].img+"'></div></a>";
        }

        document.getElementById("main").innerHTML=text;
    }
    static articles(article_js)
    {
        let article = JSON.parse(article_js);
        let text = document.getElementById("main").innerHTML;
        text +="<div class='cours_list'>";
        text +="<div class='main_name'>Статьи</div>";


        for (let i=0; i<article.length;i++) {
            text +="<a href='https://tiwy.ru/back/responze/article.php?action=article_seo&id="+article[i].id+"'>";

            text +="<div class='cours'>";
            text +="<div class='cours_name'>"+article[i].name+"</div>";
            if(article[i].img!=null)
                text +="<img src='https://tiwy.ru/"+article[i].img+"'>";
            if(article[i].description!=null)
                text +="<div class='cours_description'>"+ article[i].description+"</div>";
            text +="</div></a>";
        }

        document.getElementById("main").innerHTML=text;
    }
}
//8705