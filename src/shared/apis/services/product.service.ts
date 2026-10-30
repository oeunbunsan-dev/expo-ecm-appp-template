import { apiInstance } from "../core";

class ProductService {
      getAllProducts = async () => {
            const res = await apiInstance.get("/products");
            return res.data;
      };

      getAllFeaturedProducts = async () => {
            const res = await apiInstance.get("/products/featured");
            return res.data;
      };
};

export const productService = new ProductService();