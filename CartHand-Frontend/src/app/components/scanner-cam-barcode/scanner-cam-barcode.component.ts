import { Component } from '@angular/core';
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

  private lastScannedCode: string | null = null;

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
        readers : [{
          format: "ean_reader",
          config: {
            supplemements: [
              "ean_13_reader"
            ]
          }
        }]
      }
    },( err: any ) => {
        if (err) {
            console.log( err );
            return
        }
        console.log( "Initialization finished. Ready to start" );
        Quagga.start();
    });

    Quagga.onDetected((data: any) => {

      const scannedCode = data.codeResult.code;

      if (scannedCode !== this.lastScannedCode) {

        console.log("Barcode detected:", data);
        this.barcodeService.changeBarcode(scannedCode);
        this.lastScannedCode = scannedCode;

      } else {

        console.log("Stop scanner");
        Quagga.stop();

      };

    });

  };

  // Button open scanner 
  openScanner(){

    this.startScanner();

  };

  // Button closed scanner
  closedScanner(){

    const closedScannerDiv = document.querySelector("#scanner-container")

    if(closedScannerDiv){

      closedScannerDiv.innerHTML = ""

    }

  };

};

