import * as cheerio from 'cheerio';
import fs from 'node:fs';
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

if(!fs.existsSync('./cache')){
    fs.mkdirSync('./cache');
}

for(let i = 2927; i>2917; i--){
    let response;
    if(!fs.existsSync(`./cache/${i}.html`)){
        await delay(3000);
        response = await fetch(`https://xkcd.com/${i}/`);
        response = await response.text();
        fs.writeFileSync(`./cache/${i}.html`, response);
        console.log('LIVE REQUEST');
    } else {
        response = fs.readFileSync(`./cache/${i}.html`);
    }
    //console.log(response);
    
    const $ = cheerio.load(response);
    let img = $('#comic>img');
    console.log(img.attr('src'));
    console.log(img.attr('alt'));
    console.log(img.attr('title'));
    console.log(img.attr('srcset'));
    
}