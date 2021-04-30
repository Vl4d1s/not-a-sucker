const express = require("express");
const router = express.Router();

const puppeteer = require("puppeteer");

async function configureBrowser(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

router.get("/:item", async (req, res) => {
  try {
    const page = await configureBrowser("https://www.amazon.com/");
    await page.type("#twotabsearchtextbox", req.params.item);
    await page.click("#nav-search-submit-button");

    await page.waitForTimeout(1000);
    const data = await page.evaluate(() => {
      const titles = Array.from(
        document.querySelectorAll(
          'span[class="a-size-medium a-color-base a-text-normal"]'
        )
      ).map((title) => title.innerText);

      const subtitles = Array.from(
        document.querySelectorAll(
          'span[class="a-size-base-plus a-color-base a-text-normal"'
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

      const links = Array.from(
        document.querySelectorAll('a[class="a-link-normal a-text-normal"]')
      ).map((link) => link.href);

      let dataArray = [];
      for (let i = 0; i < 5; i++) {
        dataArray.push({
          title: titles[i] ? titles[i] : subtitles[i],
          image: images[i],
          price: `${prices[i]}.${fractionPrice[i]}`,
          link: links[i],
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

// data:{
//   amazonData:{
//     [ { title:'',img:'',price:'',link:''}]
//   },
//   aliExpressData:{

//   },
//   ebayData:{

//   }
// }
module.exports = router;
