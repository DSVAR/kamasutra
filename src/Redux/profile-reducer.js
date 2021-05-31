import * as axios from "axios";
import {ProfileApi, UserApi} from "../api/api";

const AddPost = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    post:
        [{
            ID: 0,
            Text: 'kuk',
            Name: 'Ddavar',
            Img: 'https://avatars.mds.yandex.net/get-zen_doc/985972/pub_5d63ef4cf73d9d00adeba678_5d63f06bf73d9d00adeba67e/scale_1200'
        },
            {ID: 1, Text: 'kuk1', Name: 'Ratatata', Img: 'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'}],
    textNew: 'Dva',
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {


        case AddPost: {

            let postNew = {
                ID: 3,
                Text: action.text,
                Name: "Ratatata",
                Img: 'https://i.ytimg.com/vi/iVFmoi6N9B0/maxresdefault.jpg'
            };
            return {
                ...state,
                post: [...state.post, postNew]
            }

        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                post: state.post.filter
                (p => p.ID !== action.postId)
            }
        }

        default:
            return state;
    }


}


export const setStatus = (status) => ({type: SET_STATUS, status})

export const addPostActionCreator = (text) => ({type: AddPost, text})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUser = (userId) => async (dispatch) => {
    let response = await UserApi.getUser(userId)

    dispatch(setUsersProfile(response));


}


export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileApi.getStatus(userId)

    dispatch(setStatus(response));

}

export const updateStatusProfile = (status) => async (dispatch) => {
    let response = await ProfileApi.updateStatus(status)

    if (response.resultCode === 0)
        dispatch(setStatus(status));
}
export default profileReducer;