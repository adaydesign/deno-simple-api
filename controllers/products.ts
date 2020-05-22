import { v4 } from 'http://deno.land/std/uuid/mod.ts'
import { Product } from '../types.ts'

let products: Product[] = [
    {
        id: "1",
        name: "คอมพิวเตอร์",
        description: "คอมพิวเตอร์โน็ตบุ๊ค 8 Core 4.4 GHz 8 GB DDR4",
        price: 15000.00,
        priceUnit: "บาท"
    },
    {
        id: "2",
        name: "คอมพิวเตอร์ Z2",
        description: "คอมพิวเตอร์โน็ตบุ๊ค รุ่น Z2 8 Core 6 GHz 8 GB DDR4",
        price: 25000.00,
        priceUnit: "บาท"
    },
    {
        id: "3",
        name: "คอมพิวเตอร์ Z2 Max",
        description: "คอมพิวเตอร์โน็ตบุ๊ค รุ่น Z2 Max 16 Core 12.6 GHz 16 GB DDR4",
        price: 49900.00,
        priceUnit: "บาท"
    }
]

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    }
}

// @desc    Get a products
// @route   GET /api/v1/products/:id
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {

    const product: Product | undefined = products.find(p => p.id === params.id)

    if (product) {
        response.status = 200
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }

}

// @desc    add new products
// @route   POST /api/v1/products/
const addProduct = async ({ request, response }: { request: any, response: any }) => {

    const body = await request.body()
    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'no data'
        }
    } else {
        const product: Product = body.value
        product.id = v4.generate()
        products.push(product)

        response.status = 201
        response.body = {
            success: true,
            data: product
        }
    }

}

// @desc    Update a products
// @route   PUT /api/v1/products/:id
const updateProduct = async ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {

    const product: Product | undefined = products.find(p => p.id === params.id)
    // console.log(product)
    if (product) {
        const body = await request.body()

        const updateProduct: { name?: string, description?: string, price?: number, priceUnit?: string } = body.value
        console.log(updateProduct)
        products = products.map(p => p.id === params.id ? { ...p, ...updateProduct } : p)

        const updatedProduct: Product | undefined = products.find(p => p.id === params.id)
    
        response.status = 200
        response.body = {
            success: true,
            data: updatedProduct
        }

    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
}

// @desc    Delete a products
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({ params,response }: { params:{id:string},response: any }) => {

    products = products.filter(p => p.id !== params.id)
    response.body = {
        success: true,
        msg: 'product removed'
    }
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }