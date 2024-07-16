export interface IItemProduct {

    id: string,
    name: string,
    description: string,
    brand: string
    category: string,
    supplier: string,
    price: string,
    stock: number,
    dateOfValidated: Date,
    barcode: string,
    unitOfMeasuarement: string,
    image: File | null

};

export type IItemProductCreate = Omit<IItemProduct, "id" >;