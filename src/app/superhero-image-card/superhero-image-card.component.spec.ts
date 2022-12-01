import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroImageCardComponent } from './superhero-image-card.component';

describe('SuperheroImageCardComponent', () => {
  let component: SuperheroImageCardComponent;
  let fixture: ComponentFixture<SuperheroImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroImageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
