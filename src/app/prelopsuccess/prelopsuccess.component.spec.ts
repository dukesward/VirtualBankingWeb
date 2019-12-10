import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelopsuccessComponent } from './prelopsuccess.component';

describe('PrelopsuccessComponent', () => {
  let component: PrelopsuccessComponent;
  let fixture: ComponentFixture<PrelopsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelopsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelopsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
