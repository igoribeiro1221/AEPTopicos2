import { productService } from "../products/product.service"

export class stockService {
    async stock() {
        const products = await new productService().list()
        const stock: any = []
        products.map((i) => {
                stock.push({
                    "name": i.name,
                    "quantity": i.quantity,
                    "price": i.price,
                    "stockValue": i.price * i.quantity
                })
        })
        return stock
    }

    async stockTotal() {
        const productStock = await this.stock()
        let initialValue = 0
        const valorStoque = productStock.reduce((acc, value) => acc + value.stockValue, initialValue)
        return valorStoque
    }
}