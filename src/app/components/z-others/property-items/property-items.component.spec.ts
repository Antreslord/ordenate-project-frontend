import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyItemsComponent } from './property-items.component';

describe('PropertyItemsComponent', () => {
  let component: PropertyItemsComponent;
  let fixture: ComponentFixture<PropertyItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyItemsComponent]
    });
    fixture = TestBed.createComponent(PropertyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
