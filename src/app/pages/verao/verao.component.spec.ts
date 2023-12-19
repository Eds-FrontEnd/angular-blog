import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeraoComponent } from './verao.component';

describe('VeraoComponent', () => {
  let component: VeraoComponent;
  let fixture: ComponentFixture<VeraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
