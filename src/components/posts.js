import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../Services/postService';
import PostForm from './postForm';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getPosts().then((response) => {
            setPosts(response.data);
        })
        .catch((error) => {    
            console.error("Error fetching posts:", error);
            setError("Couldn't fetch the posts. Please try again.");
        })
        .finally(() => setLoading(false));
    }, []);

    const handleDelete = (post) => { 
        setError('');
        if (post.isLocal) {
            setPosts(posts.filter((p) => p.id !== post.id));
        } else {
            deletePost(post.id).then(() => {
                setPosts(posts.filter((p) => p.id !== post.id));
            })
            .catch((error) => {    
                console.error("Error deleting posts:", error);
                setError("Couldn't delete the post. Please try again.");
            });
        }
    };

    const startEditing = (post) => {
        setEditingPost(post);
    };
    return (<div className="layout">
        <aside className="layout__side">
            <PostForm posts={posts} setPosts={setPosts} editingPost={editingPost} setEditingPost={setEditingPost} />
        </aside>
        <section className="layout__content" aria-labelledby="posts-heading">
            <div className="toolbar">
                <h2 id="posts-heading" className="toolbar__title">
                    All Posts <span className="badge" aria-label={`${posts.length} posts`}>{posts.length}</span>
                </h2>
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
            {loading ? (
                <p className="empty">Loading posts...</p>
            ) : !error && posts.length === 0 && (
                <div className="empty">
                    <p className="empty__title">No posts yet</p>
                    <p className="empty__text">Use the form to write your first post.</p>
                </div>
            )}
            <ul className="grid">
                {posts.map((post) => (
                    <li key={post.id}>
                        <article className="card" aria-labelledby={`post-title-${post.id}`}>
                            <header className="card__meta">
                                <span className="avatar" title={post.userId ? `User ${post.userId}` : "Me" } aria-hidden="true">{post.userId ? `U${post.userId}` : "Me"}</span>
                                <span className="card__id">#{post.id}</span>
                            </header>
                            <h3 id={`post-title-${post.id}`} className="card__title">{post.title}</h3>
                            <p className="card__body">{post.body}</p>
                            <footer className="card__actions">
                                <button type="button" className="btn btn--ghost btn--sm" aria-label={`Edit post: ${post.title}`} onClick={() => startEditing(post)}>Edit</button>
                                <button type="button" className="btn btn--danger btn--sm" aria-label={`Delete post: ${post.title}`} onClick={() => handleDelete(post)}>Delete</button>
                            </footer>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    </div>);
}