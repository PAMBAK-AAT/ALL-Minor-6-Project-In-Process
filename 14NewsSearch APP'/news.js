const API_KEY = "fad9900a9cf64605af880251ddf557f4";
// const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener('load', async () => fetchNews());

// By this function our page will reload when we click on it's image , then we go in it;s home page...
function reload(){
    window.location.reload();
}

async function fetchNews() {
    try{
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        bindData(data.articles);
    }
    catch(err){
        console.log("Error in fetching news...");
        return [];
    }
}


function bindData(articles){
    // Now jitne articles honge hamein utne card banane hain aur usko card-container mein append karte jaana hai

    const cardContainer = document.getElementById('card-container');
    const newsTemplate = document.getElementById('template-news');

    cardContainer.innerHTML = "";// So that when we reload the page old pages does not merge in new pages...
    articles.forEach((article)=>{
        if(!article.urlToImage) return;// It means if image does not come in our news then we will not show it on our page...
        const cardClone = newsTemplate.content.cloneNode(true);// By this we make the clone of our card
        fillDataInCard(cardClone , article);// This is the function that fill data in our card from article that is written by api...
        cardContainer.appendChild(cardClone);
    })

    function fillDataInCard(cardClone , article){
        const newsImage = document.querySelector('.news-image');
        const newsTitle = document.querySelector('.news-title');
        const newsSource = document.querySelector('.newsSource');
        const newsDesc = document.querySelector('.news-desc');

        newsImage.src = article.urlToImage;
        newsTitle.innerHTML = article.title;
        newsDesc.innerHTML = article.description;

        // The date we are getting here will be in different form , so we will convert it into in our time zone
        // In this article , date key is: 'publishedAt'
        const date = new Date(article.publishedAt).toLocaleString("en-US",{
            timeZone:"Asia/Jakarta"
        })

        newsSource.innerHTML = `${article.source.name} • ${date}`;

    }
}

// Code to provide news if we click on any buttton that is mention in nav-bar
const currSelectedNav = null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    // if(currSelectedNav != NULL)
    currSelectedNav?.classList.remove('active');
    currSelectedNav = navItem;
    currSelectedNav.classList.add('active');
}

const searchButton = document.getElementById('searchButton');
const searchText = document.getElementById('searchText');

searchButton.addEventListener('click' , ()=>{
    const query = searchText.value;
    if(!query) return;
    fetchNews();
    currSelectedNav?.classList.remove('active');
    currSelectedNav = null;
})

