import { Injectable } from "@angular/core";
import { IItemProduct, IItemProductCreate } from "../interfaces/itemProduct.interface";

@Injectable({
    providedIn: "root"
})
export class listItensProductService {

    private listItensProducts: IItemProduct[] = [];

    getAllItensProduct(){
        return this.listItensProducts;
    };

    addItensProducts( formData: IItemProductCreate ){

        const newItenProduct = { ...formData, id: crypto.randomUUID() };
        this.listItensProducts.push( newItenProduct );

    };
    
}