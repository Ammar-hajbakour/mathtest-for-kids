import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldeliToplamaComponent } from './eldeli-toplama.component';

describe('EldeliToplamaComponent', () => {
  let component: EldeliToplamaComponent;
  let fixture: ComponentFixture<EldeliToplamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldeliToplamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EldeliToplamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
