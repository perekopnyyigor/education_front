class Url {
    static getUrl()
    {

        var paramsString = document.location.search;
        var searchParams = new URLSearchParams(paramsString);
        let result={
             type:searchParams.get("type"),
            id:searchParams.get("id")
        }
        return result;

    }
}