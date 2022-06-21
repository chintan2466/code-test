var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "data.json", true);
// xmlhttp.open("GET", "https://github.com/robertholtom/code-test/blob/master/json/code-test.json", true);

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const myObj = JSON.parse(this.responseText);
        const newsObj = myObj.articles;

        document.getElementById("FillJsonData").innerHTML = `
        ${newsObj.map(newsTemplate).join("")}
        `;
    }
};

xmlhttp.send();


function newsTemplate(news) {
    return `
    <div class="container">
        <div  class="maincolumn columnleft">
            <a href="${news.link}" class="divCategory" title="${news.primarySectionRouteName}">${news.primarySectionRouteName}</a>
            <p class="divHeadline">${news.headline}</p>
            <p class="divStandfirst">${news.standfirst}</p>
        </div>
        
        <div class="maincolumn columnright">
            <img src="${news.thumbnail.src}" alt="${news.thumbnail.title}" title="${news.thumbnail.title}">
        </div>
    </div>
    `;
}