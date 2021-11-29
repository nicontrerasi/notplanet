import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalentamientoGlobalPage } from './calentamiento-global.page';

describe('CalentamientoGlobalPage', () => {
  let component: CalentamientoGlobalPage;
  let fixture: ComponentFixture<CalentamientoGlobalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalentamientoGlobalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalentamientoGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
