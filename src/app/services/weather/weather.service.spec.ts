import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { WeatherComponent } from './weather.service';

describe('WeatherComponent', () => {
  let componentCli: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    componentCli = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(componentCli).toBeTruthy();
  });
});


describe('WeatherService', () => {
  let service: WeatherComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
