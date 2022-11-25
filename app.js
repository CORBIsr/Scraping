const request = require("request-promise")
const cheerio = require("cheerio");

request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $(".DataRow").each((i, data) => {
            const item = $(data).text();
            const riga = item.split("\n")
            //console.log(righe)
            //scrivi(riga);

            console.log("Data: " + riga[1] + "  Prezzo: " + riga[3]);
        })
    }

});
