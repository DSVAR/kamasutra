const Follow = 'Follow';
const Unfollow= 'Unfollow';
const SET_USERS='SET_USERS';

let initialState={
    users:[
        // [{ID: '0',fallowerd:false, Name: 'Ddavar',Locatinon:{city:'moscow',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '1', fallowerd:false,Name: 'Sasha',Locatinon:{city:'moscow',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '2',fallowerd:false, Name: 'Dima',Locatinon:{city:'moscow',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '3',fallowerd:true, Name: 'Vika',Locatinon:{city:'moscow',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '4',fallowerd:false, Name: 'Artyr',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '5',fallowerd:false, Name: 'Gert',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '6',fallowerd:true, Name: 'Der',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '7',fallowerd:false, Name: 'Fin',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '8',fallowerd:true, Name: 'Din',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
        // {ID: '9',fallowerd:false, Name: 'Sam',Locatinon:{city:'Kazan',county:'Russia'},status:'im batman',Img:'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'},
    ]}

 const userReducer=(state=initialState,action)=>{
    switch (action.type)
    {        
       case Follow:{
            
        return{
            ...state, users:state.users.map(u=>{
            if(u.id== action.userId){
                return{...u, followed:true}
            }
            return u })}
       }
       case Unfollow:{
        return{
            ...state, users:state.users.map(u=>{
            if(u.id== action.userId){
                return{...u, followed:false}
                
            }
            return u })}

       }
       case SET_USERS:{
           return{...state, users:[...state.users,...action.users]}
       }
        default:   return state;
    }
   

 }


export const followAC = (userId) => ({
    type: Follow,
    userId
    
})
export const unFollowAC = (userId) => ({
    type: Unfollow,
    userId
    
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
   
    
})
export default userReducer;