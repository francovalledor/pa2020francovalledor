import { fetchJSON } from "../utils/utils";

const API_URL = "https://api.mercadolibre.com/";

export class MELI {
  static async searchProduct(title, filters = {}) {
    let endPoint = `sites/MLA/search?q=${title}`;

    if (filters && filters.hasOwnProperty("sort")) {
      endPoint = endPoint + `&sort=${filters.sort}`;
    }

    if (filters && filters.hasOwnProperty("itemNew")) {
      if (filters.itemNew === true) {
        endPoint = endPoint + `&ITEM_CONDITION=${2230284}`;
      } else {
        endPoint = endPoint + `&ITEM_CONDITION=${2230581}`;
      }
    }

    if (filters && filters.hasOwnProperty("paging")) {
      if (filters.paging.hasOwnProperty("limit")) {
        if (filters.paging.limit) {
          endPoint += `&limit=${filters.paging.limit}`;
        }
      }

      if (filters.paging.hasOwnProperty("offset")) {
        if (filters.paging.offset) {
          endPoint += `&offset=${filters.paging.offset}`;
        }
      }
    }

    const response = await fetchJSON(API_URL + endPoint);

    let productos = [];
    let paging = response.paging || {};

    try {
      response.results.forEach((result) =>
        productos.push(new Producto(result))
      );
    } catch {}

    return [productos, paging];
  }

  static async getCategoryName(categoryId) {
    const endPoint = `/categories/${categoryId}`;
    const response = await fetchJSON(API_URL + endPoint);
    return response.name;
  }
}

class Producto {
  constructor(meliResult) {
    this.title = meliResult.title;
    this.price = meliResult.price;
    this.thumbnail = meliResult.thumbnail;
    this.condition = meliResult.condition;
    this.id = meliResult.id;
    this.categoryId = meliResult.category_id;
    this.stock = meliResult.available_quantity;
    this.permalink = meliResult.permalink;
    // this.category = MELI.getCategoryName(this.categoryId);
  }
}
