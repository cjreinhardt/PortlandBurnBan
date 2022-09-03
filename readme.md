# Is there a burn ban in Portland, Oregon right now?

This was a quick project that I used as an excuse to get familiar with [Netlfiy serverless functions](https://www.netlify.com/products/functions/). It scrapes [this page from Multnomah County](https://www.multco.us/health/staying-healthy/wood-burning-restrictions)  using Cheerio on request, and displays 'Yes' if it sees the phrase 'mandatory burn ban' and 'No' if it doesn't. That's it!  

Here's what you'll need if you want to get this running locally:

Prerequisities:
- [Node & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

1. Clone this repository
2. Open the root directory of the cloned repository in a terminal.
3. Run 'npm install axios'.
4. Run 'npm install cheerio'.
5. Run 'netlfiy dev' to start your local server.
6. That's it!  

If you want to deploy it to Netlify commit your changes to a new repository and [connect it to Netlfiy](https://docs.netlify.com/configure-builds/repo-permissions-linking/), should work without much fuss!