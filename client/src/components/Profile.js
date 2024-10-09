import React, { useState, useEffect, useCallback } from "react";
import Pp from '../images/profile.png';
import { Card, Container, Dropdown } from "react-bootstrap";
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logout from "./Logout";

const Profile = () => {
  const API_BASE_URL = process.env.BACKENDLINK;
  const [ud, setUd] = useState({});
  const [mypost, setMyPost] = useState([]);
  const navigate = useNavigate();
  const usernameFromCookie = Cookies.get('username');
  const fullname = ud.fullname;
  Cookies.set('fullname', fullname, { expires: 1 / 24 });

  const fetchPost = useCallback(() => {
    fetch(`${API_BASE_URL}api/mypost/${usernameFromCookie}`)
      .then((resp) => resp.json())
      .then((resp) => setMyPost(resp))
      .catch((e) => {
        console.log(e);
      });
  }, [usernameFromCookie]);

  const fetchUser = useCallback(() => {
    fetch(`${API_BASE_URL}api/users/${usernameFromCookie}`)
      .then((resp) => resp.json())
      .then((userData) => setUd(userData))
      .catch((e) => {
        console.log(e);
      });
  }, [usernameFromCookie]);

  useEffect(() => {
    if (!usernameFromCookie) {
      navigate('/login');
    } else {
      fetchPost();
      fetchUser();
    }
  }, [usernameFromCookie, navigate, fetchPost, fetchUser]);

  // State and effect for like count
  const [likeCounts, setLikeCounts] = useState({});

  useEffect(() => {
    mypost.forEach((post) => {
      fetchLikesForPost(post.pid).then((count) => {
        setLikeCounts((prevCounts) => ({
          ...prevCounts,
          [post.pid]: count,
        }));
      });
    });
  }, [mypost]);

  const fetchLikesForPost = useCallback((postId) => {
    return fetch(`${API_BASE_URL}api/GetLikes/${postId}`)
      .then((resp) => resp.json())
      .then((data) => data.NbrLikes)
      .catch((error) => {
        console.error("Error fetching likes:", error);
        return 0; // Return 0 if there's an error
      });
  }, []);

  const handleDeletePost = useCallback((postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`${API_BASE_URL}api/deletepost/${postId}`, {
        method: 'DELETE',
      })
        .then((resp) => {
          if (resp.ok) {
            setMyPost((prevPosts) => prevPosts.filter(post => post.pid !== postId));
          } else {
            console.error("Failed to delete post");
          }
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    }
  }, []);

  return (

    <Container className="super">
     
      <div className="profile">
        <Card style={{ width: '80rem' }} className="main">
          <Card.Body>
            <img src={Pp} alt="profile" className="profilepic img-fluid" />
            <Card.Title className="title text-center">{usernameFromCookie}</Card.Title>
            <Card.Subtitle className="text-center">{ud.fullname}</Card.Subtitle>
          </Card.Body>
          <Logout />
        </Card>

        <h1 className="text-center mt-4 mb-3">Your Blogs</h1>
        <ul className="list-unstyled">
          {mypost.map((curr) => {
            const { pid, postTitle, author, postContent } = curr;
            const likeCount = likeCounts[pid] || 0;

            return (
              <Card key={pid} className="mb-4">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title className="mb-3">{postTitle}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleDeletePost(pid)}>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <hr />
                  <Card.Text>{postContent}</Card.Text>
                  <hr />
                  <p className="text-muted">Likes: {likeCount}</p>
                </Card.Body>
              </Card>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
