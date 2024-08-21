import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss'
})
export class PrivatePageComponent {


  apiService=inject(ApiService);

  response:any='';
  makeHttpRequest() {

    this.apiService.postData().subscribe(resp=>{
      this.response = JSON.stringify(resp);
      console.log(resp);
    })
    /*
    this.apiService.getData().subscribe(data => {
      this.response = JSON.stringify(data);
      console.log(data);
    }); */
   }



}
