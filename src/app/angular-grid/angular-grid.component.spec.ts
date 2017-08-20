import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGridComponent } from './angular-grid.component';

describe('AngularGridComponent', () => {
  let component: AngularGridComponent;
  let fixture: ComponentFixture<AngularGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
