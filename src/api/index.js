import axios from "axios";

const baseUrl='http://localhost:3000'

export  function getBanner(type=0) {
  /*  if (!type){
        type=0
    }*/
    /*type=type?type:0*/
    /*type=type||0*/
/*    return axios.get(baseUrl+'/banner?type='+type)*/
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

export function getMusicList(limit=10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

export function getPlayListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)

}