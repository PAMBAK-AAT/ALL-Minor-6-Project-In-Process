
const API_KEY = "fad9900a9cf64605af880251ddf557f4";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

async function fetchNews(){
    try{
        const res = await fetch(url);
        const data = await res.json();
        bindData(data.articles);
    }
    catch(err){
        console.log("Error in fetching the news",err);
        return [];
    }
}

window.addEventListener('load',async ()=>{
    fetchNews();
})

function bindData(articles){
    const cardContainer = document.getElementById('card-container');
    const templatenews = document.getElementById('template-news');

    articles.forEach((article)=>{
        if(!article.urlToImage) return ;
        const cardClone = templatenews.content.cloneNode(true);
        fillDataInCard(article);
        cardContainer.appendChild(cardClone);
    })
}

function fillDataInCard(article){
    const newsImage = document.querySelector('.news-image');
    const newsTitle = document.querySelector('news-title');
    const newsSource = document.querySelector('.newsSource');
    const newsDesc = document.querySelector('news-desc');

    newsImage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    newsSource.innerHTML = article.publishedAt;

}