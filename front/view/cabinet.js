class CabinetView {

    static onload()
    {
        var script = document.createElement('script');

        script.src = 'NicEdit/nicEdit.js';
        script.async = false;
        document.head.appendChild(script);

        User.ini();

        let text = document.getElementById("main").innerHTML;
        if(User.name!=null &&  User.name!="")
            text+=CabinetView.menu();
        else
            text+=CabinetView.enter();




        bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });
        document.getElementById("main").innerHTML=text;
    }
    static reg()
    {
        let text = document.getElementById("main").innerHTML;
        text+="<div class='form'>";
        text+="<input name='name' placeholder='Имя'>";
        text+="<input name='email' type='email' placeholder='email'>";
        text+="<input name='pass1' type='password' placeholder='пароль'>";
        text+="<input name='pass2' type='password' placeholder='пароль'>";
        text+="<button onclick='CabinetController.reg_action()'>Зарегистрироваться</button>";
        text+="</div>";
        document.getElementById("main").innerHTML=text;
    }
    static enter()
    {
        let text = "";
        text+="<div class='form'>";
        text+="<input name='name' placeholder='Имя'>";
        text+="<input name='pass1' type='password' placeholder='пароль'>";
        text+="<button onclick='CabinetController.enter()'>Вход</button>";
        text+="<button onclick='CabinetController.reg()'>Зарегистрироваться</button>";
        text+="</div>";
        return text;
    }
    static regGetData()
    {
        let user ={
            name:document.getElementsByName("name")[0].value,
            email:document.getElementsByName("email")[0].value,
            pass1: document.getElementsByName("pass1")[0].value,
            pass2:document.getElementsByName("pass2")[0].value,
        };
        return user;
    }
    static enterGetData()
    {
        let user ={
            name:document.getElementsByName("name")[0].value,
            pass1: document.getElementsByName("pass1")[0].value,
        };
        return user;
    }
    static menu()
    {

        let text="";
        text+="<div class='cabinet_menu'>";
        text+="<div onclick='SubscrCoursController.onLoad()' class='cabinet_menu_punkt'>Курсы</div>";
        text+="<div onclick='RepeatController.onLoad()' class='cabinet_menu_punkt'>Для повторения</div>";
        text+="<div onclick='MyCoursController.onload()' class='cabinet_menu_punkt'>Мои курсы</div>";

        text+="</div>"

        return text;
    }
}