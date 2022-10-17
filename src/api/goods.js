import axios from '~/axios'
import { queryParams } from "~/composables/util"

export function getGoodsList(page,query = {}){
    let r = queryParams(query)
    return axios.get(`/admin/goods/${page}${r}`)
}

// 批量上架/下架
export function updateGoodsStatus(ids,status){
    return axios.post(`/admin/goods/changestatus`,{
        ids,
        status
    })
}


export function createGoods(data){
    return axios.post(`/admin/goods`,data)
}

export function updateGoods(id,data){
    return axios.post(`/admin/goods/${id}`,data)
}

export function deleteGoods(ids){
    return axios.post(`/admin/goods/delete_all`,{
        ids
    })
}

export function restoreGoods(ids){
    return axios.post(`/admin/goods/restore`,{
        ids
    })
}

export function destroyGoods(ids){
    return axios.post(`/admin/goods/destroy`,{
        ids
    })
}


export function readGoods(id){
    return axios.get(`/admin/goods/read/${id}`)
}

export function setGoodsBanner(id,data){
    return axios.post(`/admin/goods/banners/${id}`,data)
}

export function updateGoodsSkus(id,data){
    return axios.post(`/admin/goods/updateskus/${id}`,data)
}


export function createGoodsSkusCard(data){
    return axios.post(`/admin/goods_skus_card`,data)
}


export function updateGoodsSkusCard(id,data){
    return axios.post(`/admin/goods_skus_card/${id}`,data)
}

export function deleteGoodsSkusCard(id){
    return axios.post(`/admin/goods_skus_card/${id}/delete`)
}

export function sortGoodsSkusCard(data){
    return axios.post(`/admin/goods_skus_card/sort`,data)
}

export function createGoodsSkusCardValue(data){
    return axios.post(`/admin/goods_skus_card_value`,data)
}

export function updateGoodsSkusCardValue(id,data){
    return axios.post(`/admin/goods_skus_card_value/${id}`,data)
}

export function deleteGoodsSkusCardValue(id){
    return axios.post(`/admin/goods_skus_card_value/${id}/delete`)
}

export function chooseAndSetGoodsSkusCard(id,data){
    return axios.post(`/admin/goods_skus_card/${id}/set`,data)
}