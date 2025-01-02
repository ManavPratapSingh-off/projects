const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const API_url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', fetchNews("India"));

async function fetchNews(query) {
    const fetchedData = await fetch(`${API_url}${query}&apiKey=${API_KEY}`);
    const bundleData = fetchedData.json();
    console.log(bundleData);
}