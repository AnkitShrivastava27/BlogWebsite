import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import Cookies from 'js-cookie';
import moment from 'moment';

const Scific = () => {
  const usernameFromCookie = Cookies.get('username');
  const [posts, setPosts] = useState([]);
  const [likesData, setLikesData] = useState({});
  const Author = usernameFromCookie;
  const genere = "Scifi";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://wrightist.vercel.app/api/getpost/${genere}`);
      const data = await response.json();

      // Sort posts by createdAt in descending order
      const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(sortedData);

      // Fetch likes for all posts
      sortedData.forEach(post => {
        fetchLikes(post.pid);
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchLikes = async (postid) => {
    try {
      const response = await fetch(`https://wrightist.vercel.app/api/GetLikes/${postid}`);
      const data = await response.json();
      setLikesData(prevLikesData => ({
        ...prevLikesData,
        [postid]: data
      }));
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  const handleLikes = async (e, pid) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://wrightist.vercel.app/api/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ postid: pid, author: Author })
      });

      if (response.ok) {
        console.log("Post liked successfully!");
        // Update the likes for the post
        fetchLikes(pid);
      } else {
        const result = await response.json();
        console.error("Failed to like:", result.error);
      }
    } catch (error) {
      console.error("Error in liking:", error);
    }
  };

  return (
    <Container className="main mt-4">
      <Row>
        {posts.map(({ pid, postTitle, author, postContent, createdAt }) => (
          <Col md={6} lg={4} className="mb-4" key={pid}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title as="h3">{postTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
                <Card.Subtitle className="mb-3 text-muted">
                  Posted on: {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </Card.Subtitle>
                <hr />
                <Card.Text>{postContent}</Card.Text>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{likesData[pid]?.NbrLikes || 0} Likes</strong>
                  <button
                    className="like-button btn btn-outline-primary"
                    onClick={(e) => handleLikes(e, pid)}
                    disabled={likesData[pid]?.alllikes?.some(like => like.author === usernameFromCookie)}
                  >
                    {likesData[pid]?.alllikes?.some(like => like.author === usernameFromCookie) ? '❤️' : '🤍'}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Scific;
