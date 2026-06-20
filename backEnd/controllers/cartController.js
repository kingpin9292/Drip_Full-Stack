import userModel from "../models/userModel.js";
const addToCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById({ userId });
    let cardData = userData.cardData;
    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cardData });
    res.json({ success: true, msg: "Added to cart" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, msg: error.message });
  }
};
const updateCart = async () => {};
const getUserCart = async () => {};

export default { addToCart, updateCart, getUserCart };
