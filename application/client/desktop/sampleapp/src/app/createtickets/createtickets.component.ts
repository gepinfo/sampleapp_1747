import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
    }
}