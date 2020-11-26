import axios from "axios";
import { getRepository } from 'typeorm';
import { Site } from '../entities/site';
const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;

export class ScraperController {
  async scrapSites () {
    const sites = await getRepository(Site).find()

    sites.map(async site => {
      // Fetch html page
      const { data, status } = await axios.get(site.url);

      if (status !== 200) return

      // Scrape page to find htmlTarget (xPath)
      const document = parse5.parse(data);
      const xhtml = xmlser.serializeToString(document);
      const doc = new dom().parseFromString(xhtml);
      const result = xpath.evaluate(
        site.htmlTarget,            // xpathExpression
        doc,                        // contextNode
        null,                       // namespaceResolver
        xpath.XPathResult.ANY_TYPE, // resultType
        null                        // result
      )
      
      if (result.nodes.length !== 1) return

      const priceLabel = result.nodes[0].firstChild.data.trim();
      const isInLivre = priceLabel.indexOf("£") !== -1
    
      const rawPrice = parseInt(priceLabel.replace("£",'').replace("€",''));
      const price = isInLivre ? rawPrice * 1.12 : rawPrice

      //If the price changed then update the value in the database
      if (price !== site.value) await getRepository(Site).save({
        ...site,
        value: price
      })
    })
};
}
