import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendcomponentComponent } from './sendcomponent.component';

describe('SendcomponentComponent', () => {
  let component: SendcomponentComponent;
  let fixture: ComponentFixture<SendcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
