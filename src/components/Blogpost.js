import React from 'react';

const Blogpost = ({ post }) => {
    return (
        <div className="card blog">
            <a href={post.link} target="_blank" className="link">

                <h4>{post.title}</h4>

            </a>

        </div>
    );
}

export default Blogpost;