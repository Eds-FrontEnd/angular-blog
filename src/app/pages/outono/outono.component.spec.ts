import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutonoComponent } from './outono.component';

describe('OutonoComponent', () => {
  let component: OutonoComponent;
  let fixture: ComponentFixture<OutonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
