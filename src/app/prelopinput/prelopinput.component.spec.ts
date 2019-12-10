import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelopinputComponent } from './prelopinput.component';

describe('PrelopinputComponent', () => {
  let component: PrelopinputComponent;
  let fixture: ComponentFixture<PrelopinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelopinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelopinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
