const BlogModel = require("../../models/blog/blog")
const AllBlogsService = require("../../services/blog/allBlogs")
const BlogDetailsService = require("../../services/blog/blogDetails")
const MyBlogService = require("../../services/blog/myBlog")
const CreateService = require("../../services/common/createService")
const DeleteService = require("../../services/common/deleteService")
const ListService = require("../../services/common/listService")
const UpdateService = require("../../services/common/updateService")


exports.createBlog=async (req, res) => {
    let Result=await CreateService(req,BlogModel)
    res.status(200).json(Result)
}


exports.upadateBlog=async (req, res) => {
    let Result=await UpdateService(req,BlogModel)
    res.status(200).json(Result)
}


exports.listBlog=async (req, res) => {
    let Result=await ListService(req,BlogModel)
    res.status(200).json(Result)
}

exports.deleteBlog=async (req, res) => {
    let Result=await DeleteService(req,BlogModel)
    res.status(200).json(Result)
}

exports.myBlog=async (req, res) => {
    let Result=await MyBlogService(req,BlogModel);
    res.status(200).json(Result)
}
exports.myBlogDetails=async (req, res) => {
    let Result=await BlogDetailsService(req,BlogModel);
    res.status(200).json(Result)
}

exports.AllBlogs=async (req, res) => {
    let Result=await AllBlogsService(req,BlogModel);
    res.status(200).json(Result)
}