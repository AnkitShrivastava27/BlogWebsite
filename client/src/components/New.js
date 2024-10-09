import React, { useState, useEffect } from "react";
import "./New.css";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const New = () => {
  const username = Cookies.get('username');
  const fullname = Cookies.get('fullname');
  const API_BASE_URL = process.env.BACKENDLINK;
  const navigate = useNavigate();
  const [genre, setGenre] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const author = fullname;
  const uid = username;
  const pid = uuidv4();
  const createdAt = new Date().toISOString();

  useEffect(() => {
    if (!username) {
      navigate('/login');
    }
  }, [username, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}"api/newposts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pid, uid, genre, postTitle, postContent, author, createdAt })
      });

      if (response.ok) {
        alert("Posted successfully!");
        setGenre('');
        setPostTitle('');
        setPostContent('');
        navigate(`/profile`);
      } else {
        console.error("Failed to post blog");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <select className="select-genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="" disabled hidden>Select genre...</option>
          <option value="Scifi">Scifi</option>
          <option value="Science&Technology">Science & Technology</option>
          <option value="Political">Political</option>
          <option value="Sport">Sport</option>
        </select>
        <br />
        <input
          className="input-title"
          type="text"
          placeholder="Title of the Blog"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <textarea
          className="input-post"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          rows={4}
          placeholder="Write from here..."
        />
        <br />
        <input className="submit-button" type="submit" value="Post" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default New;
