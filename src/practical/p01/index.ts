interface User1 {
    userId : number,
    id: number,
    title: string,
    body: string
  } 
  const fetchUsers = async (): Promise<User1[]> => {
const User = fetch ('https://jsonplaceholder.typicode.com/posts')
const data : User1[] = await (await User).json(); 

return data ;
}

export function getEdgePosts() {
  
}
getEdgePosts()
console.log ()