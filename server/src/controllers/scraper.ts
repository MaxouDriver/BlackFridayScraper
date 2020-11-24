import {Router, Request, Response} from 'express';
import axios from "axios";
const fs = require('mz/fs');
const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;


export class ScraperController {

  async scrapSteam (url: string, htmlTarget:string) {

    const { data } = await axios.get(url);

    console.log(htmlTarget)

    const document = parse5.parse(data);
    const xhtml = xmlser.serializeToString(document);
    const doc = new dom().parseFromString(xhtml);
    const result = xpath.evaluate(
      htmlTarget,            // xpathExpression
      doc,                        // contextNode
      null,                       // namespaceResolver
      xpath.XPathResult.ANY_TYPE, // resultType
      null                        // result
  )
   
  //console.log("Node: " + nodes[0].toString())

  var node = result.iterateNext();
  console.log(node)
while (node) {
    console.log(node.localName + ": " + node.firstChild.data);
    console.log("Node: " + node.toString());
 
    node = result.iterateNext();
}

  return result;
};

    private async fethHtml (url: string) {
        try {
          const { data } = await axios.get(url);
          return data;
        } catch {
          console.error(
            `ERROR: An error occurred while trying to fetch the URL: ${url}`
          );
        }
      };
      
      // const extractDeal = selector => {
      //   const title = selector
      //     .find(".responsive_search_name_combined")
      //     .find("div[class='col search_name ellipsis'] > span[class='title']")
      //     .text()
      //     .trim();
      
      //   const releaseDate = selector
      //     .find(".responsive_search_name_combined")
      //     .find("div[class='col search_released responsive_secondrow']")
      //     .text()
      //     .trim();
      
      //   const link = selector.attr("href").trim();
      
      //   const priceSelector = selector
      //     .find(
      //       "div[class='col search_price_discount_combined responsive_secondrow']"
      //     )
      //     .find("div[class='col search_price discounted responsive_secondrow']");
      
      //   const originalPrice = priceSelector
      //     .find("span > strike")
      //     .text()
      //     .trim();
      
      //   const pricesHtml = priceSelector.html().trim();
      //   const matched = pricesHtml.match(/(<br>(.+\s[0-9].+.\d+))/);
      
      //   const discountedPrice = matched[matched.length - 1];
      
      //   return {
      //     title,
      //     releaseDate,
      //     originalPrice,
      //     discountedPrice,
      //     link
      //   };
      // };
}
