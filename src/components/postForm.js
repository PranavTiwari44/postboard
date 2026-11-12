import React, { useState, useEffect } from 'react';
import { createPost, updatePost } from '../Services/postService';

export default function PostForm({posts, setPosts, editingPost, setEditingPost}) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        } else {
            setTitle('');
            setBody('');
        }
    }, [editingPost]);

    const editPost = () => {
        updatePost(editingPost.id, {title, body}).then((response) => {
            const updatedPosts = posts.map((post) =>
                post.id === editingPost.id ? response.data : post
            );
            setPosts(updatedPosts);
        })
        .catch((error) => {    
            console.error("Error updating post:", error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if(editingPost) {
            editPost();
        } else {
            handleAddPost();
        }

        setTitle('');
        setBody('');
        setEditingPost(null);
    };

    const handleAddPost = () => {
         createPost({title, body}).then((response) => {
            setPosts([...posts, response.data]);
        })
        .catch((error) => {    
            console.error("Error fetching posts:", error);
        });
    }

    return (<form className="panel" onSubmit = {handleSubmit} aria-labelledby="post-form-title">
        <h2 id="post-form-title" className="panel__title">{editingPost ? 'Edit Post' : 'Create a New Post'}</h2>
        <p className="panel__subtitle">
            {editingPost ? 'Make your changes and save them.' : 'Share something with the board.'}
        </p>
        <label htmlFor="post-title" className="field__label">Title</label>
        <input
            id="post-title"
            name="title"
            className="input"
            type="text"
            placeholder="Give your post a title"
            autoComplete="off"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="post-body" className="field__label">Body</label>
        <textarea
            id="post-body"
            name="body"
            className="input input--textarea"
            placeholder="What's on your mind?"
            rows={6}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
        />
        <div className="panel__actions">
            <button className="btn btn--primary" type="submit" >{editingPost ? 'Update Post' : 'Add Post'}</button>
        </div>
    </form>);
}