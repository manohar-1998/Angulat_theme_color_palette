import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  selectedText: any;
  initialText: any;
  actualText: any;
  xCoordinates: any;
  yCoordinates: any;
  tableData: any = {
    key: '',
    value:'',
    xaxis:'',
    yaxis:''
  };

  constructor() {
   }

  ngOnInit(): void {

  }

  getSelectedText() {

    // window.getSelection
    if (window.getSelection) {
      document.getElementById("data")?.getBoundingClientRect()
      this.initialText = window.getSelection();
      this.actualText = this.initialText?.toString();
      // sel.getRangeAt(0).cloneRange();
      let range = this.initialText.getRangeAt(0).cloneRange();
      range.collapse(this.initialText);
      let rects = range.getClientRects();
      let rect = rects[0];
      // console.log("Range=",range)
      if (rects.length <= 0) return null;
      // this.tabledata.field = this.actualtext;
      this.tableData.xaxis = rect.x;
      this.tableData.yaxis = rect.y;
      // return coord
      
      // console.log("x=",rect.x,"y=",rect.y,this.tabledata)
      return this.tableData;
      
    }
    else return;
  }
  getSelectedTextKey(){
    if (window.getSelection) {
      document.getElementById("data")?.getBoundingClientRect()
      this.initialText = window.getSelection();
      this.actualText = this.initialText?.toString();
      this.tableData.key = this.actualText;
    }
  }
  getSelectedTextValue(){
    if (window.getSelection) {
      document.getElementById("data")?.getBoundingClientRect()
      this.initialText = window.getSelection();
      this.actualText = this.initialText?.toString();
      this.tableData.value = this.actualText;
    }
  }

}
