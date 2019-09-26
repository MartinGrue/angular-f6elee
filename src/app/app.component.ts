import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  rows=[
  {
    "BATCH_CODE": null,
    "FLAP_CODE": null,
    "FLAP_COMP_QTY": 0,
    "ITEM_CATEGORY": "",
    "ITEM_DESCRIPTION": "385/65R22.5 160K EnduRace Rfront(EU)-E",
    "ITEM_ID": "RLBJ0LERF3AKB",
    "MIN_PRIORITY": "",
    "SUM_QTY": 0,
    "TTE": 0,
    "TUBE_CODE": null,
    "TUBE_COMP_QTY": 0,
    "VALVE_CODE": null,
    "VALVE_COMP_QTY": 0,
    "VALVE_DESC": null,
    "VOLUME": 0,
    "WEIGHT": 73,
    "flapBatch": null,
    "isScannable": "N",
    "lineNumber": 1,
    "qty": 20,
    "totalFlapQty": 0,
    "totalTubeQty": 0,
    "totalValueQty": 0,
    "tubeBatch": null
  },
  {
    "BATCH_CODE": null,
    "FLAP_CODE": null,
    "FLAP_COMP_QTY": 0,
    "ITEM_CATEGORY": "",
    "ITEM_DESCRIPTION": "10.00R20 16PR AMA326PEMA-220 DTAM(TTF)K",
    "ITEM_ID": "RLBJ0LERF3AKB",
    "MIN_PRIORITY": "",
    "SUM_QTY": 0,
    "TTE": 0,
    "TUBE_CODE": null,
    "TUBE_COMP_QTY": 0,
    "VALVE_CODE": null,
    "VALVE_COMP_QTY": 0,
    "VALVE_DESC": null,
    "VOLUME": 0,
    "WEIGHT": 73,
    "flapBatch": null,
    "isScannable": "N",
    "lineNumber": 1,
    "qty": 20,
    "totalFlapQty": 0,
    "totalTubeQty": 0,
    "totalValueQty": 0,
    "tubeBatch": null
  }
]
 split(data,rowIndex) {
     // Copy the data
    let rowData = { ...data };

    // Dnt use 69 line code 
    // let rowData = data;

    // With updation of values 
    rowData.BATCH_CODE = '';
    rowData.qty = 0;
    this.rows.splice(rowIndex, 0, rowData);
    this.rows = [...this.rows]
  }
}
