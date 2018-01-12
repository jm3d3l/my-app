import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public dialog: MatDialog) { }
 
  login()
  {
    let dialogRef = this.dialog.open(LoginComponent, {
        disableClose : false,
    });
  }
  ngOnInit() {
  }

}
