var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "data.json", true);
// xmlhttp.open("GET", "https://github.com/robertholtom/code-test/blob/master/json/code-test.json", true);

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var mainObj = myObj.articles;

        mainObj.forEach((resData, index) => {

            // Main div container
            var div1 = document.createElement("div");
            div1.setAttribute("id", "div1" + index);
            div1.setAttribute("class", "container");

            // Left div
            var div2 = document.createElement("div");
            div2.setAttribute("id", "div2" + index);
            div2.setAttribute("class", "maincolumn columnleft");

            // Right div
            var div3 = document.createElement("div");
            div3.setAttribute("id", "div3" + index);
            div3.setAttribute("class", "maincolumn columnright");

            document.getElementById('FillJsonData').appendChild(div1);
            document.getElementById("div1" + index).appendChild(div2);
            document.getElementById("div1" + index).appendChild(div3);

            // Add image in right div
            var elem = document.createElement("img");
            elem.setAttribute("src", resData.thumbnail.src);
            // elem.setAttribute("height", resData.thumbnail.height);
            // elem.setAttribute("width", resData.thumbnail.width);
            elem.setAttribute("alt", resData.thumbnail.title);
            elem.setAttribute("title", resData.thumbnail.title);
            document.getElementById("div3" + index).appendChild(elem);

            // Add category in left div
            var elemAnchortag = document.createElement("a");
            var linkText = document.createTextNode(resData.primarySectionRouteName);
            elemAnchortag.appendChild(linkText);
            elemAnchortag.setAttribute("href", resData.link);
            elemAnchortag.setAttribute("class", "divCategory");
            elemAnchortag.setAttribute("title", resData.primarySectionRouteName);
            document.getElementById("div2" + index).appendChild(elemAnchortag);

            // Add Headline in left div
            var divHeadline = document.createElement("p");
            divHeadline.setAttribute("id", "divHeadline" + index);
            divHeadline.setAttribute("class", "divHeadline");
            divHeadline.innerHTML = resData.headline;
            document.getElementById("div2" + index).appendChild(divHeadline);

            // Add Standfirst in left div
            var divStandfirst = document.createElement("p");
            divStandfirst.setAttribute("id", "divStandfirst" + index);
            divStandfirst.setAttribute("class", "divStandfirst");
            divStandfirst.innerHTML = resData.standfirst;
            document.getElementById("div2" + index).appendChild(divStandfirst);


        });
    }
};

xmlhttp.send();