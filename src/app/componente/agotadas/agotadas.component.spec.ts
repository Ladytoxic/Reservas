import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotadasComponent } from './agotadas.component';

describe('AgotadasComponent', () => {
  let component: AgotadasComponent;
  let fixture: ComponentFixture<AgotadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgotadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgotadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
