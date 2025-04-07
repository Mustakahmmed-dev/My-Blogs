import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    // console.log(blogs)
    return (

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {
                blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    )
}

export default Blogs;