import { User } from "../schema/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// create user
//register
export const registerUser = async (req, res) => {
  try {
    // validation of email check if user already exist
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(409).json({
        message: "The user already exists or user name already taken",
      });
    }
    // Hashing password before registeration
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);

    const newRegisterUser = await new User({
      ...req.body,
      password: hashedPassword,
    }).save();
    return res.status(201).json({
      message: "User registered sucessfully",
      data: newRegisterUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in creating/registering  user",
      error: error,
    });
  }
};

// login
export const loginUser = async (req, res) => {
  try {
    // check if the user  exists or not
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      return res.status(409).json({
        message: "The user doesnot exists. Please register",
      });
    }
    // if user exists compare the password
    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Password not matched",
      });
    }

    // if password matched generate the token
    const myToken = jwt.sign(
      { email: userExist.email },
      "this is private_key",
      {
        expiresIn: "24h",
      }
    );
    console.log(myToken);
    return res.status(201).json({
      message: "User logged in sucessfully",
      token: myToken,
      user: userExist,
    });
  } catch (error) {
    return res.status(500).json({
      message: " error in user login",
      error: error,
    });
  }
};

//get all
export const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    return res.status(200).json({
      message: "All users fetched sucessfully!!",
      data: allUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in fetching user",
      error: error,
    });
  }
};

//get user by id
export const getUserById = async (req, res) => {
  try {
    const singleUser = await User.findById();
    return res.status(200).json({
      message: "Sinlge user fetched sucessfully!!",
      data: singleUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in fetching user",
      error: error,
    });
  }
};

//update user by id
export const updateUserById = async (req, res) => {
  try {
    // if password is given for update
    if (registerUser.body.password) {
      const newHashedPassword = await bcrypt.hash(
        req.body.password,
        saltRounds
      );
      const updateedUser = await User.findOneAndUpdate(
        req.body.email,
        { ...req.body, password: newHashedPassword },
        { new: true }
      );
      return res.status(200).json({
        message: "User updated password",
        data: updateUser,
        error: error,
      });
    }

    const updateUser = await User.findByIdAndUpdate();
    return res.status(200).json({
      message: "User update sucessfull!!",
      data: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in updating user",
      error: error,
    });
  }
};

//delete user by id
export const deleteUserById = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete();
    return res.status(200).json({
      message: "User deleted sucessfully!!",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in deleting user",
      error: error,
    });
  }
};
