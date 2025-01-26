import { useState } from "react";

const premades = [
    {title: "blog1", body: "text1", author: "Mario Da Mario", id: 1},
    {title: "blog2", body: "text2", author: "Luigi Da Luigi", id: 2},
    {title: "blog3", body: "text3", author: "Wario Da Eggman", id: 3},
    {title: "blog4", body: "text4", author: "Sarth", id: 4}
];


const Lister = () => {

    const [blogs, setBlogs] = useState(premades);

    return(
        <div className="lister">
            <p> Lister </p>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2> 
                    <p>Author: {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Lister;