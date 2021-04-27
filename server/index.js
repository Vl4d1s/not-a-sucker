const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const puppeteer = require("puppeteer");

async function configureBrowser(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

app.get("/", async (req, res) => {
  try {
    const page = await configureBrowser("https://www.amazon.com/");
    await page.type("#twotabsearchtextbox", "hyundai veloster");
    await page.click("#nav-search-submit-button");

    await page.waitForTimeout(1000);
    const data = await page.evaluate(() => {
      const titles = Array.from(
        document.querySelectorAll(
          'span[class="a-size-medium a-color-base a-text-normal"]'
        )
      ).map((title) => title.innerText);

      const images = Array.from(
        document.querySelectorAll('img[class="s-image"]')
      ).map((img) => img.src);

      const prices = Array.from(
        document.querySelectorAll('span[class="a-price-whole"]')
      ).map((price) => price.innerText);

      const fractionPrice = Array.from(
        document.querySelectorAll('span[class="a-price-fraction"]')
      ).map((fracPrice) => fracPrice.innerText);
      let dataArray = [];
      for (let i = 0; i < titles.length; i++) {
        dataArray.push({
          title: titles[i],
          image: images[i],
          price: `${prices[i]}.${fractionPrice[i]}`,
        });
      }
      return {
        dataArray,
      };
    });
    res.json({ data });
    //  await page.close();
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    console.log(`server is runnig on port ${port}`);
  }
});

// data:{
//   amazonData:{
//     [ { title:'',img:'',price:'',link:''}]
//   },
//   aliExpressData:{

//   },
//   ebayData:{

//   }
// }
