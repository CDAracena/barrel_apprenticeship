let articleArray = [{
img: 'photography/www.knobcreek.com-1550031134660845.jpg',
date: 'NOVEMBER 10',
headline: 'This Creek Runs Full, Making Every Glass Count',
link: 'Read More'
}, {
  img: 'photography/www.knobcreek.com-1564585437648699.jpg',
  date: 'NOVEMBER 1',
  headline: "Celebrating Knob Creek's 25th Anniversary",
  link: 'Watch Video'
}, {
  img: 'photography/www.knobcreek.com-1550246487292757.jpg',
  date: 'OCTOBER 30',
  headline: 'The Single Barrel Experience',
  link: 'Read More'
}, {
  img: 'photography/www.knobcreek.com-1550224289791139.jpg',
  date: 'OCTOBER 20',
  headline: 'Make No Small Plans. Drink No Small Bourbon',
  link: 'Watch Video'
}, {
  img: 'photography/www.knobcreek.com-1550293000153014.jpg',
  date: 'OCTOBER 10',
  headline: "There's No Faking Flavor: It Has To Be Earned",
  link: 'Read More'
}, {
  img: 'photography/www.knobcreek.com-1550664938574687.jpg',
  date: 'OCTOBER 05',
  headline: 'Learn about Pre-Prohibition Style Whiskey',
  link: 'View Gallery'
}, {
  img: 'photography/www.knobcreek.com-1550653084056276.jpg',
  date: 'SEPTEMBER 30',
  headline: 'About Our Master Distiller Booker Noe',
  link: 'Read More',
}, {
  img:'photography/www.knobcreek.com-1550660375610157.jpg',
  date: 'SEPTEMBER 18',
  headline: 'About Our Master Distiller Booker Noe',
  link: 'Read More'
}, {
  img: 'photography/www.knobcreek.com-1550319714280280.jpg',
  date: 'SEPTEMBER 10',
  headline: 'Unmistakable Richness and Signature Sweetness',
  link: 'View Gallery'
}]

let articleMainContainer = document.querySelector('.articles-container');


for (let i = 0; i < articleArray.length; i++){
  let articleColumn = document.createElement('DIV');
  articleColumn.classList.add('article-column');
  articleMainContainer.appendChild(articleColumn)

  let imgHolder = document.createElement('DIV');
  imgHolder.classList.add('img-Holder');
  let img = document.createElement('IMG');
  img.classList.add('article-imgs');
  img.src = articleArray[i].img
  articleColumn.appendChild(imgHolder)
  imgHolder.appendChild(img)

  let bottomSection = document.createElement("DIV");
  bottomSection.classList.add("bottom-article-section");
  articleColumn.appendChild(bottomSection);
  let dateRow = document.createElement('SPAN');
  dateRow.classList.add('article-date');
  dateRow.innerText = articleArray[i].date;

  bottomSection.appendChild(dateRow);

  let headlineDiv = document.createElement("DIV");
   bottomSection.appendChild(headlineDiv);
   let headlineText = document.createElement("SPAN");
   headlineText.classList.add('mid-header')
   headlineText.innerText = articleArray[i].headline;

   headlineDiv.appendChild(headlineText);

   let links = document.createElement('a');
   links.innerText = articleArray[i].link
   bottomSection.appendChild(links);

}
