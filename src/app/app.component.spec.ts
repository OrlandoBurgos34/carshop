import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent] // Cambia aquí de 'declarations' a 'imports'
    }).compileComponents();

    // Creamos una instancia del componente
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should log message on calling miPrimeraFuncion', () => {
    spyOn(console, 'log');
    component.miPrimeraFuncion();
    expect(console.log).toHaveBeenCalledWith("¡Hola desde mi primera función en Angular!");
  });

  it('should increment the count when calling increment', () => {
    component.count = 0;
    component.increment();
    expect(component.count).toEqual(1);
  });

  it('should decrement the count when calling decrement', () => {
    component.count = 1;
    component.decrement();
    expect(component.count).toEqual(0);
  });

  it('should not decrement the count below zero', () => {
    component.count = 0;
    component.decrement();
    expect(component.count).toEqual(0);
  });
});
