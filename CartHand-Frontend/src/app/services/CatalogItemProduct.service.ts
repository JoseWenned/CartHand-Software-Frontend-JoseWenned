import { Injectable } from "@angular/core";

@Injectable( { providedIn: "root" } )
export class CatalogItemProduct{

    ListProduct = [

        {
    
          name: "Bolacha", 
          price: 2.85,
          dateOfValidated: "01/08/2025",
          unitOfMeasurement: "300g"
      
        },
    
        {
    
          name: "Arroz", 
          price: 4.25,
          dateOfValidated: "17/10/2025",
          unitOfMeasurement: "1kg"
      
        },
    
        {
    
          name: "Coca Cola", 
          price: 7.50,
          dateOfValidated: "06/08/2024",
          unitOfMeasurement: "1L"
      
        }
    
    ];

}