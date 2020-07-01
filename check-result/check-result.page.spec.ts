import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckResultPage } from './check-result.page';

describe('CheckResultPage', () => {
  let component: CheckResultPage;
  let fixture: ComponentFixture<CheckResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
