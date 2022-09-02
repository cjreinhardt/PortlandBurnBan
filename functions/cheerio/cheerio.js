const request = require('axios')
const cheerio = require('cheerio')

exports.handler = async (event, context) => {
  const url = 'https://www.multco.us/health/staying-healthy/wood-burning-restrictions'
  try {
    const { data } = await request(url)
    const $ = cheerio.load(data)
    /* queryDOM */
    const updatedTime = $('meta[property="og:updated_time"]').attr('content');
    const burnText = $("#node-37292").text();
    let burnBan = "";
    const burnPhrase = "mandatory burn ban";

    if (burnText.includes(burnPhrase)) {
          burnBan = "true";
    } else {
          burnBan = "false";
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        updatedTime: updatedTime,
        burnBan: burnBan,
        burnText: burnText,
        source: url
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error
      })
    }
  }
}
