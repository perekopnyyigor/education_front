class User {
    static message;
    static obj;
    static name;
    static email;
    static id;
    static add(user)
    {
        let user_json = JSON.stringify(user);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=reg", false);
        let formData = new FormData();
        formData.append("user", user_json);
        xhttp.send(formData);
        User.message = xhttp.responseText;
    }
    static enter(user)
    {
        let user_json = JSON.stringify(user);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=enter", false);
        let formData = new FormData();
        formData.append("user", user_json);
        xhttp.send(formData);
        User.message = xhttp.responseText;

        if (User.message!="" && User.message!=null){
            User.obj = JSON.parse(User.message);
            localStorage.setItem("id",User.obj.id);
            localStorage.setItem("name",User.obj.name);
            localStorage.setItem("email",User.obj.email);

        }
        else
            alert("Неправильный логин или пароль");


    }
    static ini() {

        User.name=localStorage.getItem("name");
        User.email=localStorage.getItem("email");
        User.id=localStorage.getItem("id");
    }
    static findMyCours()
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=my_cours", false);
        let formData = new FormData();
        formData.append("user", User.id);
        xhttp.send(formData);
        User.message = xhttp.responseText;

    }
    static subscrib(cours_id)
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=subscrib", false);
        let formData = new FormData();
        formData.append("user", User.id);
        formData.append("cours", cours_id);
        xhttp.send(formData);
        User.message = xhttp.responseText;
    }
    static findSubscrib()
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/user.php?action=findSubscrib&user="+User.id, false);

        xhttp.send();
        User.message = xhttp.responseText;
    }
    static addLesson(article_id)
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=add_lesson", false);
        let formData = new FormData();
        formData.append("user", User.id);
        formData.append("article", article_id);
        xhttp.send(formData);
        User.message = xhttp.responseText;
    }
    static getLesson(article_id)
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=get_lesson_data", false);
        let formData = new FormData();
        formData.append("user", User.id);
        formData.append("article", article_id);
        xhttp.send(formData);
        User.message = xhttp.responseText;
    }
    static getRepeat(id="")
    {
        User.ini();
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/user.php?action=get_repeat", false);
        let formData = new FormData();
        formData.append("user", User.id);
        formData.append("cours", id);
        xhttp.send(formData);
        User.message = xhttp.responseText;
    }




}