import Product from "../models/Products.js";
import ProductSubImage from "../models/ProductSubImage.js";

const handleError = (res, error, statusCode = 500) => {
  console.error("Error:", error);
  res.status(statusCode).json({ error: "Internal Server Error" });
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: ProductSubImage,
          as: "subImgs",
          attributes: ["imageUrl"],
        },
      ],
    });

    res.json(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductDetails = async (req, res) => {
  const { productId } = req.params;

  try {
    const productDetails = await Product.findOne({ where: { id: productId } });
    if (productDetails) {
      res.status(200).json(productDetails);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const createProduct = async (req, res) => {
  const { title, description, categorie, price, stock, mainImage, brand, rating, ratingCount, sale, saleEndDate, subImage } = req.body;

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      stock,
      mainImage,
      brand,
      rating,
      categorie,
      ratingCount,
      sale,
      saleEndDate: saleEndDate == "null" ? null : saleEndDate,
    });

    if (subImage && subImage.length > 0) {
      const imageRecords = subImage.map((imageUrl) => ({ imageUrl, productId: newProduct.id }));
      await ProductSubImage.bulkCreate(imageRecords);
    }

    res.status(201).json({ msg: "Product created successfully", product: newProduct });
  } catch (error) {
    handleError(res, error);
  }
};
