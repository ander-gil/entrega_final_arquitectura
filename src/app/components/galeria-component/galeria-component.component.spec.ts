import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaComponentComponent } from './galeria-component.component';

describe('GaleriaComponentComponent', () => {
  let component: GaleriaComponentComponent;
  let fixture: ComponentFixture<GaleriaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
