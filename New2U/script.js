const API_KEY = "9bc65fb1-450f-4794-b74d-c32b7e9b0e1e";
const API_url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', fetchNews("India"));

async function fetchNews(query) {
    try {
        const fetchedData = await fetch(`${API_url}${query}&apiKey=${API_KEY}`);
        const bundleData = await fetchedData.json();
        console.log(bundleData);
    } catch {
        console.log("some error")
    }
}