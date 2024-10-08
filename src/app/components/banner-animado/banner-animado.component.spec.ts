import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAnimadoComponent } from './banner-animado.component';

describe('BannerAnimadoComponent', () => {
  let component: BannerAnimadoComponent;
  let fixture: ComponentFixture<BannerAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAnimadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
