import { Component, OnDestroy, OnInit } from '@angular/core';
import Quagga from 'quagga'; 
import { ScannerBarcodeService } from '../../services/scannerBarcodeProduct.service';


@Component({
  selector: 'app-scanner-cam-barcode',
  standalone: true,
  imports: [],
  templateUrl: './scanner-cam-barcode.component.html',
  styleUrl: './scanner-cam-barcode.component.scss'
})
export class ScannerCamBarcodeComponent {

  constructor(private barcodeService: ScannerBarcodeService) { }

  startScanner() {

    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        constraints: {
          facingMode: "enviroment"
        },
        target: document.querySelector('#scanner-container') 
      },
      decoder : {
        readers : [
          "code_128_reader",
          "ean_reader",
          "ean_8_reader",
          "upc_reader",
          "upc_e_reader"
        ]
      }
    },( err: any ) => {
        if (err) {
            console.log( err );
            return
        }
        console.log( "Initialization finished. Ready to start" );
        Quagga.start();
    });

    Quagga.onDetected(( data: any ) => {

      if( data ){
        console.log( "Barcode detected:", data );
        this.barcodeService.changeBarcode( data.codeResult.code );
        this.stopScannerBarcode();
      }      

    });

  };

  // Function stop read scanner barcode
  stopScannerBarcode(){


  };

  // Button open scanner 
  onButtonAddProduct(){

    this.startScanner();

  };

  // Button closed scanner
  onButtonClosedScanner(){

    const closedDiv = document.querySelector("#scanner-container")

    if(closedDiv){

      closedDiv.innerHTML = ""

    }

    this.stopScannerBarcode();

  };

};

