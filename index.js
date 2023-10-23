// To connect with your mongoDB database
import mongoose from "mongoose";

import Blog from './model/Blog.js';


const uri = "mongodb+srv://noker3009:fplKWAqwFPfu74Vh@nfcs.ubiet8w.mongodb.net?retryWrites=true&w=majority";

mongoose.connect(uri);
 

// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  // Insert the article in our MongoDB database
  await article.save();

  // Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);