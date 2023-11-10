const baseURL =  "https://jpaulocts.github.io/wdd230/";
const linksURL = "https://jpaulocts.github.io/wdd230/data/links.json";
const learnLink = document.querySelector(".learn-link");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
    
}


getLinks();


const displayLinks = (lessons) => {

    lessons.forEach((lesson) => {

        
        let li = document.createElement("li");
        
        let c = 1

        lesson.links.forEach((link)=>{
            


            if (c == 1 ) {

                let a = document.createElement("a");

                a.textContent = `${link.title}`;

                a.setAttribute("href", link.url);
                a.setAttribute("target", "_blank");

                li.appendChild(a);

            }

            else if (c > 1) {

                let a = document.createElement("a");

                a.textContent = ` | ${link.title}`;

                a.setAttribute("href", link.url);
                a.setAttribute("target", "_blank");

                li.appendChild(a);
            }

            c++
        })


        learnLink.appendChild(li);

    })


}