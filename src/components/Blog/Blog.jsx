import React from "react";

const Blog = ({ blog }) => {

    console.log(blog)
    return (
        <div className="card border border-gray-400">
            <div>
                <img className="image-full rounded" src={blog.cover} alt="" />
                <div className="flex justify-between p-3 items-center">
                    <p>{blog.posted_date} </p>
                    <button>Bookmark</button>
                </div>
                <div className="flex justify-between p-3 items-center">
                    <div>
                        <img className="w-7 mt-2" src={blog.author_img} alt="Author" />
                        <p> <i>by</i> {blog.author} </p>
                    </div>
                    <p>Reading Time</p>
                </div>
            </div>
            <div className="card-body">
                <h1 className="card-title"> {blog.title} </h1>
                <button className="btn">Mark as Read</button>
                <div>Tags: {
                    blog.hashtags.map((hashtag) => <span key={hashtag}> #{hashtag} </span>)
                }
                </div>
            </div>
        </div>
    )
}


export default Blog;