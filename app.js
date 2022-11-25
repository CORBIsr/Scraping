const request = require("request-promise")
const cheerio = require("cheerio");

request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const datarow = $(".HeaderRow");
        const output = datarow.find("th").text();
        $(".DataRow").each((i, data) => {
            const item = $(data).text();
            const riga = item.split("\n")
            //console.log(righe)
            //scrivi(riga);
            scrivi();
            document.getElementById("tabella").innerHTML += ("<tr>\n<td>" + item + "</td>\n<td>" + item2 + "</td>\n</tr>")
            console.log("Data: " + riga[1] + "  Prezzo: " + riga[3]);
        })
    }

});
function scrivi(){
    console.log("ss")
    //document.getElementById("tabella").innerHTML += ("<tr>\n<td>" + riga[1] + "</td>\n<td>" + riga[3] + "</td>\n</tr>")
}