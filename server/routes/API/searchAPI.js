const express = require("express");
const router = express.Router();
const ScrapeData = require("../../models/ScrapeData");
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

async function scrapeEbay(searchItem) {
  const page = await configureBrowser(
    `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${searchItem}&_sacat=0`
  );

  await page.waitForTimeout(2000);
  const ebayScrapeData = await page.evaluate(() => {
    const titles = Array.from(
      document.querySelectorAll('h3[class="s-item__title"]')
    ).map((title) => title.innerText);
    const images = Array.from(
      document.querySelectorAll('img[class="s-item__image-img"]')
    ).map((img) => img.src);

    const prices = Array.from(
      document.querySelectorAll('span[class="s-item__price"]')
    ).map((price) => price.innerText);

    const links = Array.from(
      document.querySelectorAll('a[class="s-item__link"]')
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
  return ebayScrapeData;
}

router.get("/:item", async (req, res) => {
  try {
    const searchItem = req.params.item;
    const cacheResults = await ScrapeData.find({ searchKey: req.params.item });
    if (cacheResults.length > 0) {
      const amazon =
        cacheResults[cacheResults.findIndex((res) => res.from === "amazon")]
          .data;
      const ebay =
        cacheResults[cacheResults.findIndex((res) => res.from === "ebay")].data;
      const aliExpress =
        cacheResults[cacheResults.findIndex((res) => res.from === "aliExpress")]
          .data;

      return res.json({ amazon, ebay, aliExpress });
    } else {
      const data = await Promise.all([
        await scrapeAliexpress(searchItem),
        await scrapeAmazon(searchItem),
        await scrapeEbay(searchItem),
      ]);
      const amazonScrape = new ScrapeData({
        searchKey: req.params.item,
        from: "amazon",
        data: data[1].dataArray,
      });
      await amazonScrape.save();

      const aliScrape = new ScrapeData({
        searchKey: req.params.item,
        from: "aliExpress",
        data: data[0].dataArray,
      });
      const ebayScrape = new ScrapeData({
        searchKey: req.params.item,
        from: "ebay",
        data: data[2].dataArray,
      });
      await Promise.all([
        await amazonScrape.save(),
        await aliScrape.save(),
        await ebayScrape.save(),
      ]);
      return res.json({
        amazon: data[1].dataArray,
        aliExpress: data[0].dataArray,
        ebay: data[2].dataArray,
      });
    }
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
