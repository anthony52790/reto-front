"use server"

import { api } from "../config"
import { Pagination, Product } from "../types/global"

export const getListProducts = async (): Promise<Product[]> => {
  return api.get(`/products`)
}

export const getProductsPaginate = async (page: number, perPage: number, searchParams?: string): Promise<Pagination> => {
  return api.get(`/products/?_page=${page}&_per_page=${perPage}&${searchParams}`)
}

export const getProductById = async (id: string): Promise<Product[]> => {
  return api.get(`/products/?productId=${id}`)
}

export const getProductByHandle = async (handle: string): Promise<Product[]> => {
  return api.get(`/products/?linkText=${handle}`)
}

export const searchProduct = async (name: string): Promise<Product[]> => {
  return api.get(`/products`)
    .then((products) =>
      (products as Product[])
        .filter(product => product.productName.toLowerCase().includes(name.toLowerCase()))
    )
}