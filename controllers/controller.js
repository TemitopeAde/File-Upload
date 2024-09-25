const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Bad request" });
    }

    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error });
  }
};

const getAllProducts = async (req, res) => {
    try {
        const products = Product.find({})

        if (!products || products.length===0) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg : "Not found"})
        }

        res.status(StatusCodes.OK).json({ products})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error})
    }
}

module.exports = {createProduct, getAllProducts};
