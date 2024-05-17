import * as cheerio from 'cheerio';
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

for(let i = 2927; i>2917; i--){
    let response = await fetch(`https://xkcd.com/${i}/`);
    response = await response.text();
    //console.log(response);
    
    const $ = cheerio.load(response);
    let img = $('#comic>img');
    console.log(img.attr('src'));
    console.log(img.attr('alt'));
    console.log(img.attr('title'));
    await delay(3000);
}