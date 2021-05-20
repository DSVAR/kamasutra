import * as axios from "axios";

let intance=axios.create({
   withCredentials: true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers:{"API-KEY":"3349e557-411b-4f45-9a18-211d92e0f427"}
})


export const  UserApi={
   authentication(){
      return intance.get(`auth/me`).then(response=>{return response.data})
   },
   getUser(userId){
      return ProfileApi.getProfile(userId)
   },
   getUsers(curentPage=1,pageSize=5) {
      return intance.get(`users?page=${curentPage}&count=${pageSize}`).then(response=>{return response.data})
   },
   unfollow(userId){
        return intance.delete(`follow/${userId}`).then(response=>{return response.data})
   },
   follow(userId){
      return intance.post(`follow/${userId}`).then(response=>{return response.data})
   }
}

export const  ProfileApi={
  
   getProfile(userId){
      return intance.get(`profile/${userId}`).then(response=>{return response.data})
   },
   getStatus(userId){    
      return intance.get(`profile/status/${userId}`).then(response=>{return response.data})
   } ,
   updateStatus(status){
      return intance.put('profile/status',{status:status}).then(response=>{return response.data})
   }
}
