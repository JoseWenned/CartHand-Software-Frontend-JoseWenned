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
export class ScannerCamBarcodeComponent implements OnInit, OnDestroy {

  constructor(private barcodeService: ScannerBarcodeService) { }

  ngOnInit(): void {
    this.startScanner();
  }

  ngOnDestroy(): void {
    Quagga.stop();
  }

  startScanner() {

    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
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
    }, function(err: any) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected((data: any) => {

      console.log("Barcode detected:", data);
      this.barcodeService.changeBarcode(data.codeResult.code);

    });

  };

};

