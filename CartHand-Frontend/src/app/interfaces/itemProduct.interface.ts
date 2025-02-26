export interface TItemProduct {

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

export type TItemProductCreate = Omit<TItemProduct, "id" >;