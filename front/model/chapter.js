class Chapter
{
    static message;
    static add(chapter)
    {
        let chapter_json = JSON.stringify(chapter);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://lern.tiwy.ru/back/responze/chapter.php?action=add", false);
        let formData = new FormData();
        formData.append("chapter", chapter_json);

        xhttp.send(formData);
        Chapter.message = xhttp.responseText;
    }

}