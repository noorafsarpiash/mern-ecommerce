const addProduct = (req, res) => {
  try {
    const {
      _type,
      name,
      price,
      discountedPercentage,
      category,
      brand,
      badge,
      isAvailable,
      offer,
      description,
      tags,
    } = req.body;
    console.log("Received Body Data:", req.body);
    console.log("Received Files Data:", req.files);
  } catch (error) {
    console.log("Error".error);

    res.json({ success: false, message: error.message });
  }
};
const removeProduct = (req, res) => {};
const listProduct = (req, res) => {
  res.send("Get all products");
};
const singleProduct = (req, res) => {};

export { addProduct, removeProduct, listProduct, singleProduct };
