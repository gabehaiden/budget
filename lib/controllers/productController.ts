import { Request, Response } from 'express';
import { STATUS } from '../enums/status';
import { Product } from '../model/Product';
import { ProductBody } from '../model/request/ProductBody';
import * as service from '../service/productService';
import { ErrorHTTP } from '../types/ErrorHTTP';

export const createProduct = async (req: Request, res: Response) => {
  const newProduct = ProductBody.safeParse(req.body)

  if(!newProduct.success) {
    return res.status(400).send({ error: STATUS.BAD_REQUEST})
  }

  try {
    await service.insertProduct(newProduct.data)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const getProductById = async (req: Request, res: Response<Product | ErrorHTTP>) => {
  const id = req.params.id

  try {
    const product: Product = await service.findProductById(id)
    res.send(product)
  } catch (error) { 
    res.status(500).send({ error: STATUS.SERVER_ERROR})
  }
}