import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivecomponentComponent } from './receivecomponent.component';

describe('ReceivecomponentComponent', () => {
  let component: ReceivecomponentComponent;
  let fixture: ComponentFixture<ReceivecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
