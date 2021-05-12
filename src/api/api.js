import * as axios from "axios";

let intance=axios.create({
   withCredentials: true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers:{"API-KEY":"3349e557-411b-4f45-9a18-211d92e0f427"}
})


export const  UserApi={
   getUsers(curentPage=1,pageSize=5) {
      return intance.get(`users?page=${curentPage}&count=${pageSize}`).then(response=>{return response.data})
   },
   unfollow(userId){
      debugger;
      return intance.delete(`follow/${userId}`).then(response=>{return response.data})
   },
   follow(userId){
      return intance.post(`follow/${userId}`).then(response=>{return response.data})
   }
}
