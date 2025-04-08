import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handledBookmark, handleReadingTime}) => {
    
    // console.log(blog)
    return (
        <div className="card border border-gray-400">
            <div>
                <img className="image-full rounded" src={blog.cover} alt="" />
                <div className="flex justify-between p-3 items-center">
                    <p>{blog.posted_date} </p>
                    <button onClick={() => handledBookmark(blog)}><FaRegBookmark /></button>
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
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sapiente assumenda doloribus dicta, dolores exercitationem. Necessitatibus eius praesentium natus nesciunt. </p>
                <button onClick={() => handleReadingTime(blog.id, blog.reading_time)} className="btn">Mark as Read</button>

                <div>Tags: {
                    blog.hashtags.map((hashtag) => <span key={hashtag}> #{hashtag} </span>)
                }
                </div>
            </div>
        </div>
    )
}


export default Blog;