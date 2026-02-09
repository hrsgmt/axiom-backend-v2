const posts = [];

export function createPost(userId, content) {
  const post = {
    id: "p_" + Date.now(),
    userId,
    content,
    createdAt: Date.now()
  };
  posts.push(post);
  return post;
}

export function listPosts(userId) {
  return posts.filter(p => p.userId === userId);
}
