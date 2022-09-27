import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialPageComponent } from './angular-material-page.component';

describe('AngularMaterialPageComponent', () => {
  let component: AngularMaterialPageComponent;
  let fixture: ComponentFixture<AngularMaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
