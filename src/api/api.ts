import axios from "axios";
import {ProfileType} from "../redux/profileReducer";

/*type LocationType = {
    country: string
    city: string
}*/
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
    /*location: LocationType*/
}
export type UserResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}
export type FollowUserResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}

type AuthResponseDataType = {
    id: number
    login: string
    email: string
}
export type AuthResponseType = {
    data: AuthResponseDataType
    messages: [],
    fieldsErrors: [],
    resultCode: number
}

export type UserStatusResponseType = string | null
export type updateUserStatusResponse = {

}

type LoginResponseType = {
    data: {userId: number}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1734c197-25c0-4bdd-9d52-5f9220f3c903'}
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<UserResponseType>(
                `users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    getUser(userID: number) {
        return (
            instance.get<ProfileType>(`profile/` + userID)
                .then(response => response.data)
        )
    },
    unFollowUser(userID: number) {
        return (
            instance.delete<FollowUserResponseType>(
                `follow/${userID}`)
                .then(response => response.data)
        )
    },

    followUser(userID: number) {
        return (
            instance.post<FollowUserResponseType>(`follow/${userID}`)
                .then(response => response.data)
        )
    },
}

export const profileAPI = {
    getUserForProfileRender(userId: number) {
        return (
            instance.get<ProfileType>(`profile/` + userId)
                .then(response => response.data)
        )
    },
    getUserStatusForProfileRender(userId: number) {
        return instance.get<UserStatusResponseType>(`profile/status/` + userId)
    },
    updateStatus(newStatusText: string) {
        return (
            instance.put<updateUserStatusResponse>(`profile/status/`, {status: newStatusText})
        )
    }
}


export const authAPI = {
    checkedAuth() {
        return (instance.get<AuthResponseType>(`auth/me`))
    },
    login(login:string, password:string, rememberMe:boolean){
        return instance.post<LoginResponseType>(`auth/login`,{
            email:login,
            password:password,
            rememberMe:rememberMe,
        })
    },
    logout(){
        return instance.delete<any>((`auth/login`))
            .then((response:any) => response)
    }
}



