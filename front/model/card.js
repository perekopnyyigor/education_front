class Card {
    static message;
    static add(card)
    {
        let card_json = JSON.stringify(card);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://lern.tiwy.ru/back/responze/card.php?action=add", false);
        let formData = new FormData();
        formData.append("card", card_json);

        xhttp.send(formData);
        Card.message = xhttp.responseText;
    }
    static findCard(article,user)
    {
        let cards ={
            article:article,
            user:user
        }
        let cards_json = JSON.stringify(cards);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://lern.tiwy.ru/back/responze/card.php?action=find", false);
        let formData = new FormData();
        formData.append("cards", cards_json);

        xhttp.send(formData);
        Card.message = xhttp.responseText;
    }
}