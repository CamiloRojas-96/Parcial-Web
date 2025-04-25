import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CafeListComponent } from './cafe-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('CafeListComponent', () => {
let component: CafeListComponent;
let fixture: ComponentFixture<CafeListComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        CafeListComponent, 
        HttpClientTestingModule, 
    ],
    schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
});

beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

    it('Crea 3 nuevos cafes', () => {

    component.cafes = [
    { id: 1, nombre: 'Café 1', tipo: 'Origen', region: 'Región 1' },
    { id: 2, nombre: 'Café 2', tipo: 'Blend', region: 'Región 2' },
    { id: 3, nombre: 'Café 3', tipo: 'Origen', region: 'Región 3' },
    ];

    // Detecta cambios en el componente
    fixture.detectChanges();

    // Busca las filas de la tabla
    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));

    // Verifica que hay exactamente 3 filas
    expect(tableRows.length).toBe(3);

    // Verifica que el encabezado existe
    const tableHeader = fixture.debugElement.queryAll(By.css('thead tr'));
    expect(tableHeader.length).toBe(1);
});
});