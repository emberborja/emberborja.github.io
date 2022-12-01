import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroGridComponent } from './superhero-grid.component';

describe('SuperheroGridComponent', () => {
  let component: SuperheroGridComponent;
  let fixture: ComponentFixture<SuperheroGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
