import { Component, OnInit } from '@angular/core';
import { CafeService } from '../../services/cafe.service';
import { Cafe } from '../../models/cafe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(
      (cafes) => {
        this.cafes = cafes;
      },
      (error) => {
        console.error('Error al obtener los cafés:', error);
      }
    );
  }
}