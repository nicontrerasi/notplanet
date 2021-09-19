import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtHidroelectricaPage } from './art-hidroelectrica.page';

describe('ArtHidroelectricaPage', () => {
  let component: ArtHidroelectricaPage;
  let fixture: ComponentFixture<ArtHidroelectricaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtHidroelectricaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtHidroelectricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
