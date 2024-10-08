import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoComponentComponent } from './foro-component.component';

describe('ForoComponentComponent', () => {
  let component: ForoComponentComponent;
  let fixture: ComponentFixture<ForoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
