import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAComponent } from './product-a.component';

describe('ProductAComponent', () => {
  let component: ProductAComponent;
  let fixture: ComponentFixture<ProductAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
