import {IDimensionsModel} from "./IDimensionsModel";
import {IReviewsModel} from "./IReviewsModel";

export interface IPproductModels {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    sku: string,
    weight: number,
    dimensions: IDimensionsModel,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: IReviewsModel[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    },
    images: string[],
    thumbnail: string

}