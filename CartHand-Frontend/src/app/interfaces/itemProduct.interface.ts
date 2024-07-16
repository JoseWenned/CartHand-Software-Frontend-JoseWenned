export interface IItemProduct {

    id: string,
    name: string,
    description: string,
    category: string,
    supplier: string,
    price: string,
    stock: number,
    dateOfValidated: Date,
    barcode: string,
    unitOfMeasuarement: string

};

export type IItemProductCreate = Omit<IItemProduct, "id" >;