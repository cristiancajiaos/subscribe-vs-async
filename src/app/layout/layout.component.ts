import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ObjectService } from './object.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  objects: Array<any>;
  objectsWithAsyncPipe: Observable<any>;

  objectSuscription: Subscription;

  constructor(
    private objectService: ObjectService
  ) { }

  ngOnInit(): void {
    this.getObjects();
    this.objectsWithAsyncPipe = this.objectService.getAllObjects();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.objectSuscription.unsubscribe();
  }

  getObjects() {
    this.objectSuscription = this.objectService.getAllObjects().subscribe(data => {
      console.table(data);
      this.objects = data;
    });
  }
}
