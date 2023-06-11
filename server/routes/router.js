const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req,res)=>{
//     console.log("Connect")
// })

// Register a User Details

router.post("/register", async (req, res) => {
  const { fullname, address, phone, item, itemqty, totalprice, ref, note } =
    req.body;

  if (
    !fullname ||
    !address ||
    !phone ||
    !item ||
    !itemqty ||
    !totalprice ||
    !ref ||
    !note
  ) {
    res.status(422).json("Please fill the data");
  }

  try {
    const preuser = await users.findOne({ phone: phone });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("This user is already present");
    } else {
      const adduser = new users({
        fullname,
        address,
        phone,
        item,
        itemqty,
        totalprice,
        ref,
        note
      });

      await adduser.save();

      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// get userdata

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get induvidual User

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userInduvidual = await users.findById({ _id: id });
    console.log(userInduvidual);
    res.status(201).json(userInduvidual);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
