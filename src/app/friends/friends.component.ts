import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
   friend = "";
  friends:string[] = [];
  
  add(){
   
    this.friends.push(this.friend)

    this.friend = "";

  }
  remove(i:number){
    // alert("you are sure")
    if(confirm("are you sure")){
      this.friends.splice(i,1);

    }
    
  }

}
  



