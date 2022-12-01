import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroTabsComponent } from './superhero-tabs.component';

describe('SuperheroTabsComponent', () => {
  let component: SuperheroTabsComponent;
  let fixture: ComponentFixture<SuperheroTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
