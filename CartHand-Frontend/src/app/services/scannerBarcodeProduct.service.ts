import { Injectable } from '@angular/core';
import Quagga from 'quagga';

@Injectable()
export class ScannerProductComponent {

    ngOnit(): void{
      this.startScanner();
    };
  
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
  
      }, 
      
      (err: any) => {
  
        if (err) {
            console.log(err);
            return
        }
  
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        
      });
  
      Quagga.onDetected((data: any) => {
  
        console.log( "Barcode detected:", data );
  
        document.querySelector("#barcode")
  
      });
  
    };
  
};