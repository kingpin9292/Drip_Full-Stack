import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
//placing orders using COD Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      paymnet: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cardData: {} });

    res.json({ success: true, msg: "Order placed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, msg: error.message });
  }
};

//placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {};

//placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {};

//All orders data for Admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);

    res.json({ success: false, msg: error.message });
  }
};

//update order status from admin panel
const updateStatus = async (req, res) => {};

//User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, msg: error.message });
  }
};

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, updateStatus, userOrders };
