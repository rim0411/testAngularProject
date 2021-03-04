import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<DetailsComponent>) { }
  ngOnInit() {

 
  }
 
  Fermer(){
    this.dialogRef.close();
   }
   Print(){
     window.print()
   }

}
