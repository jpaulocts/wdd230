const baseURL =  "https://jpaulocts.github.io/wdd230/";
const linksURL = "https://jpaulocts.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.jason();
    console.log(data);
    
}


getLinks();