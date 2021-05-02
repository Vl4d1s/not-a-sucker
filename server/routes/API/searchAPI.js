const express = require("express");
const router = express.Router();

const puppeteer = require("puppeteer");

// const getArrayFromSelector = (selector) =>
//   Array.from(document.querySelectorAll(selector));

async function configureBrowser(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

const scrapeAmazon = async (searchItem) => {
  const page = await configureBrowser(
    `https://www.amazon.com/s?k=${searchItem}&ref=nb_sb_noss_2`
  );
  // await page.type("#twotabsearchtextbox", searchItem);
  // await page.click("#nav-search-submit-button");

  await page.waitForTimeout(2000);
  const amazonScrapeData = await page.evaluate(() => {
    Array.from(
      document.querySelectorAll(
        'span[class="a-size-medium a-color-base a-text-normal"]'
      )
    );
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
  await page.close();
  return amazonScrapeData;
};

async function scrapeAliexpress(searchItem) {
  const page = await configureBrowser(
    `https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20210502134835&SearchText=${searchItem}`
  );

  await page.waitForSelector('[ae_object_value="best_match"]');
  await page.click('[ae_object_value="best_match"]');
  await page.waitForTimeout(2000);
  const aliexpressScrapeData = await page.evaluate(() => {
    const titles = Array.from(
      document.querySelectorAll('a[class="item-title"]')
    ).map((title) => title.title);
    const images = Array.from(
      document.querySelectorAll('img[class="item-img"]')
    ).map((img) => img.src);

    const prices = Array.from(
      document.querySelectorAll('span[class="price-current"]')
    ).map((price) => price.innerText);

    const links = Array.from(
      document.querySelectorAll('a[class="item-title"]')
    ).map((link) => link.href);

    let dataArray = [];
    for (let i = 0; i < 5; i++) {
      dataArray.push({
        title: titles[i],
        image: images[i],
        price: prices[i],
        link: links[i],
      });
    }
    return {
      dataArray,
    };
  });
  await page.close();
  return aliexpressScrapeData;
}

router.get("/:item", async (req, res) => {
  try {
    const searchItem = req.params.item;
    const data = await Promise.all([
      await scrapeAliexpress(searchItem),
      await scrapeAmazon(searchItem),
    ]);
    res.json({ data });
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
