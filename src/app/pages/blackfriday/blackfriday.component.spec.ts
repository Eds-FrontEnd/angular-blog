import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackfridayComponent } from './blackfriday.component';

describe('BlackfridayComponent', () => {
  let component: BlackfridayComponent;
  let fixture: ComponentFixture<BlackfridayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackfridayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackfridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
