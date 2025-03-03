// Create user

import { User } from "../schema/userSchema.js"


//register
export const registerUser = async (req, res)=> {}

// login
export const loginUser = async (req, res)=> {}



//get all
export const getAllUser = async (req, res)=> {
  try {
    const allUser =  await User.find()
    return res.status(200).json({
      message: "All users fetched sucessfully",
      data: allUser
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in fetching user",
      error: error
    });
  }
}

//get user by id
export const getUserById = async (req, res)=> {}

//update user by id
export const updateUserById= async (req, res)=> {}

//delete user by id
export const deleteUserById = async (req, res)=> {}



