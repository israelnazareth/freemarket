export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  return dataJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  return dataJSON;
}
