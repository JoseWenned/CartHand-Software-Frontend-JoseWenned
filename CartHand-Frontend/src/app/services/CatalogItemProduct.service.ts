import { Injectable } from "@angular/core";
import { TItemProduct, TItemProductCreate } from "../interfaces/itemProduct.interface";

@Injectable( { providedIn: "root" } )
export class CatalogItemProduct{

  private ListItemProduct: TItemProduct[] = [];

  getAllListItem(){

    return this.ListItemProduct;

  };

  addItemProduct( formData: TItemProductCreate ){

    const newProduct = { ...formData, id: crypto.randomUUID() };

    this.ListItemProduct.push( newProduct );

  };

  removeItemProduct( removingId: string ){

    const indexProduct = this.ListItemProduct.findIndex( allProduct => allProduct.id === removingId );

    this.ListItemProduct.splice( indexProduct, 1 );

  };

}