import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/classes/utilisateur';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

users:Utilisateur[];
constructor(private userService:UserService) { }

ngOnInit(): void {
  this.read();
}
read()
{
  this.userService.read_Users().subscribe(data => {

    this.users = data.map(e => {
      return {
       id: e.payload.doc.id,

       nom: e.payload.doc.data()["nom"],
       tel: e.payload.doc.data()["tel"],
       grade: e.payload.doc.data()["grade"],
       login: e.payload.doc.data()["login"],
       mdp: e.payload.doc.data()["mdp"],
       adresse: e.payload.doc.data()["adresse"],



      };
    });
    console.log(this.users);

  });


}
delete(id)
{
  
}

}