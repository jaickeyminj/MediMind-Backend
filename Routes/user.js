const express = require("express");
const router = express.Router();


const {patientSignup, patientLogin } = require("../Controllers/patientAuth");

//const upload = require("../middlewares/multer");

router.post("/patient/login",patientLogin);  
router.post("/patient/signup", patientSignup);
// router.post("/shop", userGetShopCProducts);
// router.get("/validateTokenUser", validateTokenUser);


// router.post("/vendor/signup",upload.single("image"), vendorSignup);
// router.post("/vendor/addcategoryproduct",vendorCategory);
// router.post("/vendor/add-product", upload.single("image"), vendorAddProduct);  //given the category name


module.exports = router;
