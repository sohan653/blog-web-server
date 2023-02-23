const MyBlogService=async(Request,DataModel)=>{
    try {
       const email= Request.headers['email'];
       const data=await DataModel.find({ email: email})
       return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}
    }
}

module.exports=MyBlogService;