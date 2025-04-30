import userModel from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const registerUser = async (req, res) =>{
    try {
        const {email,name,password} = req.body
        if(!name || !email || !password){
            return res.json({
                success: false,
                message: "Fill all Details!!"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,email,password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({
            success:true,
            message:"User Created Successfully",
            token,
            user:{name:user.name}
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:error.message
        })
    }
}

export const loginUser = async(req,res) =>{
    try {
        const {email,password} = req.body;
    const user = await userModel.findOne({email})
        if(!user) {
            return res.json({
                success:false,
                message:"User doesn't Exist!!"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.json({
                success:true,
                message:"Password Matched",
                token,
                user:{name:user.name}
            })
        }else{
            return res.json({
                success:false,
                message:"Invalid Password"
            })
        }

    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:"Try Another Password"
        })
    }
}

export const userCredit = async(req, res) =>{
    try {
       const {userId} = req.body; 
       const user = await userModel.findById(userId);
       return res.json({
            success:true,
            credits:user.creditBalance,
            user:{name:user.name}
        })
       
    } catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
    }
}