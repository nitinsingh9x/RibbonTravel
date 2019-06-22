import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCarPageComponent } from './share-car-page.component';

describe('ShareCarPageComponent', () => {
  let component: ShareCarPageComponent;
  let fixture: ComponentFixture<ShareCarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
