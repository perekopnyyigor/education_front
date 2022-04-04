class Redactor {

    static onLoad(json_article)
    {

        let article = JSON.parse(json_article);
        let text = document.getElementById("main").innerHTML;
        text += "<div ><button onclick='RedactorController.back("+article.cours+")'>Назад</button></div>";
        text += "<div ><button onclick='RedactorController.save("+article.id+")'>Сохранить</button></div>";
        text += "<div ><input name='file' type='file'  onchange='RedactorController.addImg("+article.id+")'></div>";

        text += "<div id='instruments' class='instruments'></div>";
        text += "<textarea id='redact' class='redact'></textarea>";
        text += "<div id='view' class='view'>Просмотр</div>";
        document.getElementById("main").innerHTML=text;

        let redact =  document.getElementById("redact");
        let view =  document.getElementById("view");





        let  mass=Redactor.inctrument_mass();
        Redactor.inctrument(mass,"HTML");

        let mark=Redactor.mark_mass();
        Redactor.inctrument(mark,"Маркеры");

        let math=Redactor.math_mass();
        Redactor.inctrument(math,"Математика",true);

        redact.value=article.text;
        view.innerHTML = Redactor.parseMd(redact.value);
        Redactor.input();
    }
    static getImgData()
    {
        return document.getElementsByName("file")[0].files[0];
    }
    static getText()
    {
        return  document.getElementById("redact").value;
    }
    static input()
    {

        let redact = document.getElementById("redact");
        let view = document.getElementById("view");
        redact.oninput=change;
        change();
        function change() {
            view.innerHTML = Redactor.parseMd(redact.value);

            // находим элемент, в который будем рендерить формулу
            let formula = document.getElementsByTagName("formula");

// вызываем метод библиотеки для отображения формулы

            for (let i = 0; i < formula.length; i++)
                katex.render(formula[i].innerHTML, formula[i]);

            let chem = document.getElementsByClassName("chem");

            for (let i = 0; i < chem.length; i++) {
                var elem2 = chem[i];
                var ex2 = ChemSys.compile(chem[i].innerHTML);
                chem[i].innerHTML = "";
                ChemSys.draw(elem2, ex2);
            }

            var chem_str = document.getElementsByClassName("chem_str");

            for (let i = 0; i < chem_str.length; i++) {
                var elem2 = chem_str[i];
                var ex2 = ChemSys.compile(chem_str[i].innerHTML);
                chem_str[i].innerHTML = ex2.html();

            }
            hljs.highlightAll();
        }
    }

    static inctrument_mass()
    {
        let html_massiv =[];
        html_massiv[0]={name:"Параграф", value:"<p></p>"};
        html_massiv[1]={name:"Таблица",value:"<table>"+"\\r\\n\\t"+"<tr><th>..</th> <th>..</th></tr>"+"\\r\\n\\t"+"<tr><td>..</td> <td>..</td></tr>"+"\\r\\n"+"</table>"};
        html_massiv[2]={name:"Список нумерованный",value:"<ol>"+"\\r\\n\\t"+"<li>..</li> "+"\\r\\n\\t"+"<li>..</li> "+"\\r\\n\\t"+"<li>..</li>"+"\\r\\n"+"</ol>"};
        html_massiv[3]={name:"Список маркированный",value:"<ul>"+"\\r\\n\\t"+"<li>..</li> "+"\\r\\n\\t"+"<li>..</li> "+"\\r\\n\\t"+"<li>..</li>"+"\\r\\n"+"</ul>"};
        html_massiv.push({name:"Заголовок 1", value:"<h1></h1>"});
        html_massiv.push({name:"Заголовок 2", value:"<h2></h2>"});
        html_massiv.push({name:"Заголовок 3", value:"<h3></h3>"});
        html_massiv.push({name:"Степень", value:"<sup></sup>"});
        html_massiv.push({name:"Индекс", value:"<sub></sub>"});
        html_massiv.push({name:"Карта", value:"<div class="+"\\\""+"card red"+"\\\""+">"+"\\r\\n\\t"+"<h2></h2>"+"\\r\\n\\t"+"</div>"});
        return html_massiv;
    }
    static mark_mass()
    {
        let html_massiv =[];
        html_massiv[0]={name:"Заголовок 1 #", value:"#"};
        html_massiv.push({name:"Заголовок 2 ##", value:"##"});
        html_massiv.push({name:"Список *", value:"*"});
        return html_massiv;
    }
    static math_mass()
    {
        let html_massiv =[];

        html_massiv[0]={name:"Формула", value:"<formula></formula>"};
        html_massiv.push({name:"Корень", value:"\\\\sqrt{}",vision:"<span class=\"formul\" > \\sqrt{x} </span>"});
        html_massiv.push({name:"Дробь", value:"\\\\cfrac{}{}",vision:"<span class=\"formul\" > \\cfrac{x}{y} </span>"});

        return html_massiv;
    }
    static inctrument(mass, name, vision=false)
    {
        let text="";

        text+="<details><summary>"+name+"</summary>";
        text+="<ul>";
        for (let i=0; i<mass.length;i++)
        {
            text+="<li onclick='Redactor.insert(\""+mass[i].value+"\")'><label>"+mass[i].name+"</label>";
            if(vision)
                text+=mass[i].vision;

                text+="</li>";

        }
        text+="</ul>";
        text+="</details>";

        document.getElementById("instruments").innerHTML+=text;
        if(vision)
        {
            let formul = document.getElementsByClassName("formul");
// вызываем метод библиотеки для отображения формулы
            for (let i = 0; i < formul.length; i++)
                katex.render(formul[i].innerHTML, formul[i]);
        }
    }
    static insert(value)
    {
        let redact = document.getElementById("redact");
        let view = document.getElementById("view");
        let position = redact.selectionStart;
        let text = redact.value;
        let first = text.slice(0,position);
        let second = text.slice(position);


        redact.value=first+value+second;
        view.innerHTML=Redactor.parseMd(redact.value);
        Redactor.input();
    }

    static parseMd(md){

        //ul
        md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
        md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
        md = md.replace(/^\*(.+)/gm, '<li>$1</li>');

        //ol
        md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
        md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
        md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');

        //blockquote
        md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');

        //h
        md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
        md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
        md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
        md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
        md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
        md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');

        //alt h
        md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
        md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');

        //images
        md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');

        //links
        md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');

        //font styles
        //md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
        //md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
        md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');

        //pre
        md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
        md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');

        //code
        //md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

       //p
        md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
            return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
        });
``
        //strip p from pre
        //md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
       // md = md.replace('<formula>', '<div class="formula">');
        //md = md.replace('</formula>', '</div>');


        return md;

    }

}