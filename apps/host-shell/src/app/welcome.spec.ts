import { TestBed } from '@angular/core/testing';
import { Welcome } from './welcome';

describe('Welcome', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Welcome);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the correct pageTitle', () => {
    const fixture = TestBed.createComponent(Welcome);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Welcome to Host Shell'
    );
  });

  it('should render the developer name', () => {
    const fixture = TestBed.createComponent(Welcome);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Sigma Wadbude'
    );
  });
});
