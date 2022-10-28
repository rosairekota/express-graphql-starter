const users = [
  {id:1, name:"kota",age:10, connected: true}
]
for (let i = 0; i < 100; i++) {
  users.push({id:i+1, name:"kota",age:10+i, connected: true})
  
}
const resolvers ={
  Query:{
    users:()=>{
        return users
    },
    user:(age =0)=>{
      return users.find((item)=>item.age===+age)
  }
  },

  Mutation:{
     createUser: (parent, user)=>{
      const newUser = user
      users.push(user);
      return newUser
     },

     updateUser: (parent, user)=>{
       const usersFiltered = users.filter((item)=>item.id!==+user.id)
      const newUser = {...user}
      usersFiltered.push(newUser);
      return usersFiltered
     },
     
     deleteUser: (parent, id)=>{
      const usersFiltered = users.filter((item)=>item.id!==+id)
      return usersFiltered
     }
  }
}
module.exports = {
    resolvers
}