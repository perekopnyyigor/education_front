class Cours
{
    static message;
    static add(cours,file)
    {
        let cours_json = JSON.stringify(cours);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/cours.php?action=add", false);
        let formData = new FormData();
        formData.append("cours", cours_json);
        formData.append("file[]", file);
        xhttp.send(formData);
        Cours.message = xhttp.responseText;
    }
    static delete(id)
    {

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/cours.php?action=delete&id="+id, false);


        xhttp.send();
        Cours.message = xhttp.responseText;
    }
    static findChapter(id)
    {

        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/cours.php?action=chapters", false);
        let formData = new FormData();
        formData.append("cours_id", id);
        xhttp.send(formData);
        Cours.message = xhttp.responseText;
        localStorage.setItem ("cours", Cours.message);
    }
    static getCours()
    {
        return localStorage.getItem("cours");
    }
    static findCours()
    {

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/cours.php?action=find_cours", false);
        xhttp.send();
        Cours.message = xhttp.responseText;

    }
    static findOneCours(id)
    {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/cours.php?action=find_one_cours&id="+id, false);
        xhttp.send();
        Cours.message = xhttp.responseText;
    }
    static saveOption(option,file)
    {

        let option_json = JSON.stringify(option);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://tiwy.ru/back/responze/cours.php?action=save_option", false);
        let formData = new FormData();
        formData.append("option", option_json);
        formData.append("file[]", file);
        xhttp.send(formData);
        Cours.message = xhttp.responseText;

    }
    /*
    static findChapter(cours_id)
    {

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tiwy.ru/back/responze/cours.php?action=articles&cours_id="+cours_id, false);
        xhttp.send();
        Chapter.message = xhttp.responseText;
    }*/
}