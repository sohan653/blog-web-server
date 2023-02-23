const BlogDetailsService=async(Request,DataModel)=>{
    try {
      const id=Request.params.id
       const data=await DataModel.findOne({ _id: id})
       return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}
    }
}

module.exports=BlogDetailsService;