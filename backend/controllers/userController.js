import User from "../models/userModel.js"
export const getUsersForSidebar = async (req, res) => {
    try{
       const loggedInUserId = req.user._id;

       const filterUsers = await User.find({_id : { $ne: loggedInUserId}}).select("-password");

       res.status(200).json(filterUsers);
    }catch(error){
        console.log("Error in getUsersForSidebar: ",error.message);
        res.status(500).json({message: "Internal server error"});
    }
};