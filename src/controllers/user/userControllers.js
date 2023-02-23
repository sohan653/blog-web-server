

const OTPSModel = require("../../models/users/OTP")
const UsersModel = require("../../models/users/user")
const UserCreateService = require("../../services/user/userCreateService")
const UserDetailsService = require("../../services/user/userDetailsService")
const UserLoginService = require("../../services/user/userLoginService")
const UserResetPassService = require("../../services/user/userResetPassService")
const UserUpdateService = require("../../services/user/userUpdateService")
const UserVerifyEmailService = require("../../services/user/userVerifyEmailService")
const UserVerifyOtpService = require("../../services/user/userVerifyOtpService")



exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req,UsersModel)
    res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req,UsersModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate=async (req, res) => {
    let Result=await UserUpdateService(req,UsersModel)
    res.status(200).json(Result)
}

exports.ProfileDetails=async (req, res) => {
    let Result=await UserDetailsService(req,UsersModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyEmail=async (req,res)=>{
    let Result=await UserVerifyEmailService(req,UsersModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyOTP=async (req,res)=>{
    let Result=await UserVerifyOtpService(req,OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass=async (req,res)=>{
    let Result=await UserResetPassService(req,UsersModel)
    res.status(200).json(Result)
}