import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwItemComponent } from './viw-item.component';

describe('ViwItemComponent', () => {
  let component: ViwItemComponent;
  let fixture: ComponentFixture<ViwItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViwItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
