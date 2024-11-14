import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check if user is signed in by verifying the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('userInfo');
    if (!token) {
      // Redirect to sign-in page if not signed in
      navigate('/signin');
    } else {
      fetchBlogs(token); // Fetch the blogs if the user is signed in
    }
  }, [navigate]);

  // Function to fetch blogs from the backend
  const fetchBlogs = async (token: string) => {
    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch('${BACKEND_URL}/api/blogs/user-blogs', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`, // Pass JWT token in Authorization header
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        setBlogs(data.posts); // Assuming the API returns the blogs in `data.posts`
      } else {
        setError(data.message || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError('An error occurred while fetching blogs.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-blogs-container">
      <h1 className="text-2xl font-bold mb-6">My Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        <div className="blogs-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card border-b py-4 mb-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p>{blog.content}</p>
              <p className="text-sm text-gray-500">Published on: {blog.publishDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
