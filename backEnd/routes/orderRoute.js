import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  updateStatus,
  userOrders,
  verifyStripe,
  verifyRazorpay,
  trackSingleOrder,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import userAuth from "../middleware/auth.js";

const orderRouter = express.Router();
//Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/stripe", userAuth, placeOrderStripe);
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);

//User feature
orderRouter.post("/userorders", authUser, userOrders);

//verify payment
orderRouter.post("/verifystripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);
////////////
orderRouter.post("/track/:orderId", authUser, trackSingleOrder);
export default orderRouter;
