export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  return dataJSON;
}

export async function getProductsFromCategory(categoryId) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  return dataJSON;
}

export async function getProductsFromQuery(query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  return dataJSON;
}
