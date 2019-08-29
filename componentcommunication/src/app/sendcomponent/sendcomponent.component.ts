import { Component, OnInit } from '@angular/core';
import { CompcommunicationService} from '../services/compcommunication.service';
@Component({
  selector: 'app-sendcomponent',
  templateUrl: './sendcomponent.component.html',
  styleUrls: ['./sendcomponent.component.css']
})
export class SendcomponentComponent implements OnInit {
  name: any ;
  constructor( private commservice: CompcommunicationService) { }
  sendname(): void {
    //this.commservice.sendName(this.name);
    console.log(this.name);

  }

  ngOnInit() {
  }

}
