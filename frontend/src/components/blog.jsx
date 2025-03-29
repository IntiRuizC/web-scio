import React from "react";
import "../styles/blog.css";

const Blog = () => {
    const posts = [
        { title: "Colaboración científica global", date: "12/febrero/2025", time: "5 min" },
        { title: "Colaboración científica global", date: "12/febrero/2025", time: "5 min" },
        { title: "Colaboración científica global", date: "12/febrero/2025", time: "5 min" },
        { title: "Colaboración científica global", date: "12/febrero/2025", time: "5 min" }
    ];

    return (
        <div className="blog-container">
            <h2>BLOG</h2>

            <div className="category-filters">
                <div className="category-item">Visualización de Datos</div>
                <div className="category-item">Programación</div>
                <div className="category-item">Cienciometría</div>
            </div>

            <div className="filter-options">
                <span>año • palabra • </span>
                <span className="clear-filter">limpiar filtros</span>
            </div>

            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div key={index} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>
                        <p>{post.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
