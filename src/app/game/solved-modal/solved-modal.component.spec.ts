import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvedModalComponent } from './solved-modal.component';

describe('SolvedModalComponent', () => {
  let component: SolvedModalComponent;
  let fixture: ComponentFixture<SolvedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
