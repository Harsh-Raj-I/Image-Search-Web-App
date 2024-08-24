let searchcont = document.querySelector(".sbox");
let scont = document.querySelector(".query");
let searchbutton = document.querySelector(".submit");
let maincont = document.querySelector(".main");

let viewmore=document.querySelector(".responsive-button");
let page = 1;

let accesskey = "AphIeRg7ZZ0lvTNh-m-GDRAV4oXZnKcMlcwgU2H_0qI";
async function getimage(query) {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accesskey}&per_page=12`;
  let response = await fetch(url);
  let data = await response.json();

  return data;
}



searchbutton.addEventListener("click", () => {
  maincont.innerHTML = "";
  page=1;

  let searchcontent = searchcont.value;
  getimage(searchcontent).then((res) => {
    const data = res.results;
    console.log(data);
    console.log(typeof data);

    data.map((item) => {
      let imagee = document.createElement("img");
      imagee.src = item.urls.regular;
      maincont.appendChild(imagee);
    });
  });

  

  viewmore.style. visibility="visible";
});

scont.addEventListener("submit", (event) => {
  maincont.innerHTML = "";
  page=1;
  event.preventDefault();
  let searchcontent = searchcont.value;
  getimage(searchcontent).then((res) => {
    const data = res.results;
    console.log(data);
    console.log(typeof data);

    data.map((item) => {
      let imagee = document.createElement("img");
      imagee.src = item.urls.regular;
      maincont.appendChild(imagee);
    });
  });

  viewmore.style. visibility="visible";
});


viewmore.addEventListener("click",()=>
{
    page++;
    let searchcontent = searchcont.value;
  getimage(searchcontent).then((res) => {
    const data = res.results;
    console.log(data);
    console.log(typeof data);

    data.map((item) => {
      let imagee = document.createElement("img");
      imagee.src = item.urls.regular;
      maincont.appendChild(imagee);
    });
  });
})