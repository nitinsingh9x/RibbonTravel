import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenatoryConfirmationComponent } from './itenatory-confirmation.component';

describe('ItenatoryConfirmationComponent', () => {
  let component: ItenatoryConfirmationComponent;
  let fixture: ComponentFixture<ItenatoryConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItenatoryConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenatoryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
