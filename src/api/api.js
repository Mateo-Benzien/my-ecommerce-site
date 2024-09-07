// src/api/api.js

export async function fetchProducts(page = 1, limit = 20) {
    try {
      const response = await fetch(`https://next-ecommerce-api.vercel.app/products?_page=${page}&_limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export async function fetchProductById(id) {
    try {
      const response = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  