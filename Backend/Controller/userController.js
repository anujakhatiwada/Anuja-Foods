import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users= await User.find()
    res.status(200).json({msg:"All users found", users})
  }

    catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {

    try{
        const user= await User.findById({_id:req.params.id})
        if (!user){
            res.status(404).json({msg:"User not found"})
        }
        res.status (200).json({msg:"User found successfully.",user})
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteUserById = async (req, res) => {

    try{
        const user= await User.findByIdAndDelete({_id:req.params.id})
        if (!user){
            res.status(404).json({msg:"User not found"})
        }
        res.status (200).json({msg:"User deleted successfully.",user})
    }
    catch (error) {
        console.log(error)
    }
}

export const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({ msg: "User created successfully", user });
    } catch (error) {
        console.log(error.message);
    }       
};

export const updateUser = async (req, res) => {
    try{
        const user= await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!user){
            res.status(404).json({msg:"User not found in db."})
        }
        res.status(200).json({msg:"User updated successfully.", user})
    }
    catch (error) {
        console.log(error)
    }
}
