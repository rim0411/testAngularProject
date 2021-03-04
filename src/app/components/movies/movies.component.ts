import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  displayedColumns: string[] = ['date', 'movie', 'summary'];
  dataSource: MatTableDataSource<any>;
  critical: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchForm: FormGroup;

  constructor(private service: MoviesService,    private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      critical: new FormControl('', Validators.compose([Validators.required])),
   
    });
    this.getMovies();

  }
  getMovies() {
    this.service.getmovies().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.results)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      const sortState: Sort = { active: 'date', direction: 'desc' };
    })
  }
  searchformOvie(critical) {
    this.service.filterMovies(critical).subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data.results)
    })
  }

}
