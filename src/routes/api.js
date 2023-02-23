const express = require('express');
const { createBlog, upadateBlog, deleteBlog, myBlog, myBlogDetails, listBlog, AllBlogs } = require('../controllers/blog/blogControllers');
const { Registration, Login, ProfileUpdate, ProfileDetails, RecoverVerifyEmail, RecoverVerifyOTP, RecoverResetPass } = require('../controllers/user/userControllers');
const AuthVerifyMiddleware = require('../middewares/AuthVerifyMiddleware');

const router=express.Router();


// user profilr
router.post("/Registration",Registration);
router.post("/Login",Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,ProfileDetails);
router.get("/RecoverVerifyEmail/:email",RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",RecoverVerifyOTP);
router.post("/RecoverResetPass",RecoverResetPass);


// blog 

router.post('/CreateBlog',AuthVerifyMiddleware,createBlog);
router.post('/UpdateBlog/:id',AuthVerifyMiddleware,upadateBlog);
router.get('/ListBlog',AuthVerifyMiddleware,listBlog);
router.get('/AllBlogs',AllBlogs);
router.get('/MyBlog',AuthVerifyMiddleware,myBlog);
router.get('/MyBlog/:id',AuthVerifyMiddleware,myBlogDetails);
router.delete('/DeleteBlog/:id',AuthVerifyMiddleware,deleteBlog);
module.exports=router;