const API_URL = 'https://dummyjson.com/products';

// fetching stock details from the api
export const fetchStocks = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return [];
  }
};
