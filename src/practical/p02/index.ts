const fetchUsers = async(): promise<User2[]> => {
  const posts = fetch ('https://jsonplaceholder.typicode.com/posts')
  const comments  = fetch('https://jsonplaceholder.typicode.com/comments')
  const data : User2[] = await (await posts).json();
}
export function getPostsByUser() {}
