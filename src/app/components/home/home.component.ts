import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
books:any;
  constructor(private bookService:BooksService, private router:Router,private dialog:MatDialog) { }

  ngOnInit() {
    this.getBooks()
  }
getBooks(){
  this.bookService.getBooks().subscribe(books=>{
    console.log(books.results.books)
    this.books=books.results.books
  })
}

viewDetails(book) {

    const dialogConfig = new MatDialogConfig;
    dialogConfig.maxHeight = "60vh"
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
     dialogConfig.hasBackdrop = false;
    dialogConfig.height = "300px";
    dialogConfig.data={book:book}
    const diag = this.dialog.open(DetailsComponent, dialogConfig);

    diag.afterClosed().subscribe(item => {
      this.ngOnInit();

    })
  }
}
