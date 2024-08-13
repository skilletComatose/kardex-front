import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarddComponent } from './product-cardd.component';

describe('ProductCarddComponent', () => {
  let component: ProductCarddComponent;
  let fixture: ComponentFixture<ProductCarddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCarddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCarddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
