// src/controllers/posts.controller.js

// ==============================
// Controller: Get All Posts
// Handles: GET /api/v1/posts
// ==============================
const getAllPosts = (req, res) => {
  // In real projects, this data would usually come from a database.
  // For now, we are using dummy/static data.
  const posts = [
    { id: 1, title: 'Controller Post 1' },
    { id: 2, title: 'Controller Post 2' }
  ];

  // Send a professional API response
  // 200 = Success
  // success: true tells frontend the request worked
  // data: {} wraps the actual response
  res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};


// =====================================
// Controller: Get Post By ID
// Handles: GET /api/v1/posts/:id
// =====================================
const getPostById = (req, res) => {
  // Express automatically stores URL parameters in req.params
  // Example: /posts/5 → req.params.id = 5
  const postId = req.params.id;

  // Normally we would search a database here using postId.
  // For now, we just return the ID to confirm it works.
  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};


// =====================================
// Exporting Controllers
// This allows other files (like routes)
// to use these functions.
// =====================================
module.exports = {
  getAllPosts,
  getPostById,
};