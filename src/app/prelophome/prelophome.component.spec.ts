import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelophomeComponent } from './prelophome.component';

describe('PrelopComponent', () => {
  let component: PrelophomeComponent;
  let fixture: ComponentFixture<PrelophomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrelophomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelophomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
