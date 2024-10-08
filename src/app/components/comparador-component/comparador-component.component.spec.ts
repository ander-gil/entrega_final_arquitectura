import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorComponentComponent } from './comparador-component.component';

describe('ComparadorComponentComponent', () => {
  let component: ComparadorComponentComponent;
  let fixture: ComponentFixture<ComparadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparadorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
