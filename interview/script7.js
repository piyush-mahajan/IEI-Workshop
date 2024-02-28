const showPosts = async () => {
  const response = await fetch("");
  const posts = await response.json();
  console.log(posts);
};
showPosts();
