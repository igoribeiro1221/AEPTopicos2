import { ProductType } from './types/product.type';
import ProductModel from './product.schema'
import { readFile, writeFile } from 'fs/promises';

export class productService {
    
    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const listedproducts = await ProductModel.find()

        return listedproducts
    }

    async find(id) {
        const findedproducts = await ProductModel.findById

        return findedproducts
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await ProductModel.findByIdAndUpdate({_id: id},{
            name: dataToUpdate.name,
            quantity: dataToUpdate.quantity,
            price: dataToUpdate.price
        }, {new:true})
        return updatedProduct
    }

    async delete(id) {
        await ProductModel.findByIdAndDelete({_id: id})
        return 
        
    }

    async randomProducts() {
        const products = await this.list()
        const randomProduct: any = []
        while (randomProduct.length < 4) {
            const randomIndex = Math.floor(Math.random() * products.length)
            randomProduct.push(products[randomIndex])
            products.splice(randomIndex, 1)
        }
        return randomProduct
    }

    async findAndSave() {
        const products = await this.list();
        writeFile('products.json', JSON.stringify(products, null, 2))
        return "produtos salvo em arquivo"
    }

    async readProducts() {
        const products = await readFile('products.json', "utf-8" )
        return JSON.parse(products)
    }
}