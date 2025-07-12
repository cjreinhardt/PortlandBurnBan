const request = require('axios')
const cheerio = require('cheerio')

exports.handler = async (event, context) => {
  const url = 'https://www.multco.us/health/staying-healthy/wood-burning-restrictions'
  try {
    const { data } = await request(url)
    const $ = cheerio.load(data)
    /* queryDOM */
    const updatedTime = $('meta[property="og:updated_time"]').attr('content');
    const burnText = $("#block-multnomah-gov-theme-global-layout-mainpagecontent").text();
    let burnBan = "";
    const burnPhrase = "Burn Ban Active";
    const yellowPhrase = "voluntary wood burning restriction"
    const curtailPhrase = "wood burning curtailment"
    let banType = "";

    if (burnText.includes(burnPhrase) || burnText.includes(yellowPhrase) || burnText.includes(curtailPhrase)) {
          burnBan = "true";
    } else {
          burnBan = "false";
    }

    if (burnText.includes(burnPhrase) || burnText.includes(curtailPhrase)) {
      burnType = "red";
    } else if (burnText.includes(yellowPhrase)){
      burnType = "yellow";
    } else {
      burnType = "none";
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        updatedTime: updatedTime,
        burnBan: burnBan,
        burnType: burnType,
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
