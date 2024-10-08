import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponentComponent } from './buttons-component.component';

describe('ButtonsComponentComponent', () => {
  let component: ButtonsComponentComponent;
  let fixture: ComponentFixture<ButtonsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
