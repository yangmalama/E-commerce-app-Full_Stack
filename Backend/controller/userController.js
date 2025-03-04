import { User } from "../schema/userSchema.js"

// create user
//register
export const registerUser = async (req, res)=> {}

// login
export const loginUser = async (req, res)=> {}



//get all
export const getAllUser = async (req, res)=> {
  try {
    const allUser =  await User.find()
    return res.status(200).json({
      message: "All users fetched sucessfully!!",
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
export const getUserById = async (req, res)=> {
  try {
    const singleUser = await User.findById()
    return res.status(200).json({
      message: "Sinlge user fetched sucessfully!!",
      data: singleUser
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in fetching user",
      error: error
    });
  }
}

//update user by id
export const updateUserById= async (req, res)=> {
  try {
    const updateUser = await User.findByIdAndUpdate()
    return res.status(200).json({
      message:"User update sucessfull!!",
      data: updateUser
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in updating user",
      error: error
    });
  }
}

//delete user by id
export const deleteUserById = async (req, res)=> {
  try {
    const deleteUser = await User.findByIdAndDelete()
    return res.status(200).json({
      message: "User deleted sucessfully!!",
      data: deleteUser
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in deleting user",
      error: error
    });
  }
}



