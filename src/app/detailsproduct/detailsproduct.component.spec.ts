import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproductComponent } from './detailsproduct.component';

describe('DetailsproductComponent', () => {
  let component: DetailsproductComponent;
  let fixture: ComponentFixture<DetailsproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
