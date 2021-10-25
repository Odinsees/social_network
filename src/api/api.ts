import axios from "axios";

/*type LocationType = {
    country: string
    city: string
}*/
type PhotosType = {
    small:string
    large:string
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
    totalCount: 15310
    error: string
}
export type FollowUserResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}





export const getUsers = (currentPage:number, pageSize:number) => {
    return (
        axios.get<UserResponseType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
            , {
                withCredentials: true,
                headers: {'API-KEY': '1734c197-25c0-4bdd-9d52-5f9220f3c903'}
            })

    )
}
