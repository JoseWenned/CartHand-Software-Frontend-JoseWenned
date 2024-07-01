import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ScannerBarcodeService {

  private barcodeSource = new BehaviorSubject<string>("");

  currentBarcode = this.barcodeSource.asObservable();

  constructor(){};

  changeBarcode( barcode: string ){

    this.barcodeSource.next( barcode );

  };
  
};