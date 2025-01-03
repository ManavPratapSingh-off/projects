const API_KEY = "e35d271c2f1e47d48a0a46b6c06fcec2";
const API_url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', fetchNews("India"));

async function fetchNews(query) {
    try {
        const fetchedData = await fetch(`${API_url}${query}&apiKey=${API_KEY}`);
        const bundleData = await fetchedData.json();
        formTemplates(bundleData);
        
    } catch {
        console.log("some error")
    }
}

function formTemplates (data) {
    const mainArea = document.getElementById("main-area");
    const template = document.getElementById("template");
    mainArea.innerHTML = "";
    data.articles.forEach(article => {
        if (!article.urlToImage) return;
        let content = template.content.cloneNode(true);
        fillData(content, article);
        mainArea.appendChild(content);
    });
}

function fillData (content, article) {
    let img = content.querySelector("#news-card-img");
    let title = content.querySelector("#news-card-title");
    let source = content.querySelector("#news-card-src");
    let desc = content. querySelector("#news-card-news");

    img.src = article.urlToImage;
    title.innerHTML = article.title;
    source.innerHTML = article.source.name;
    desc.innerHTML = article.description;
    
}

const linksArray = document.querySelectorAll("li");

