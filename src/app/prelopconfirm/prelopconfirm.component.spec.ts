import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelopconfirmComponent } from './prelopconfirm.component';

describe('PrelopconfirmComponent', () => {
  let component: PrelopconfirmComponent;
  let fixture: ComponentFixture<PrelopconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelopconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelopconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
