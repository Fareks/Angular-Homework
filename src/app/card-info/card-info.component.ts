import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.params)
  }
  
  id : string | null = this.router.snapshot.paramMap.get('id');
}
