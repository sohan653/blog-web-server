const AllBlogsService=async(Request,DataModel)=>{
    try {
        console.log('aschi')
       const data=await DataModel.find({})
       console.log(data)
       return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}
    }
}

module.exports=AllBlogsService;