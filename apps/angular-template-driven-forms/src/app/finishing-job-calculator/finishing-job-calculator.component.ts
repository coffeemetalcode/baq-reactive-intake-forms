import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-finishing-job-calculator',
  templateUrl: './finishing-job-calculator.component.html',
  styleUrls: ['./finishing-job-calculator.component.scss']
})
export class FinishingJobCalculatorComponent implements OnInit {
  formValue = {
    length: 0,
    width: 0,
    batting: 'provided',
    backing: {
      provided: 'provided',
      pieced: '1'
    }
  }

  TAX_RATE: number = 0.06;
  STITCH_RATE: number = 0.025;
  BLEND_RATE: number = 12.5;
  COTTON_RATE: number = 14;
  SEAM_RATE: number = 12;
  area?: number;
  areaPrice?: number;
  battingChoice?: any;
  battingPrice?: number;
  backingPrice?: number;
  salesTax?: number;
  jobPrice?: number;

  constructor() {}
  
  handleNextStep(quiltJobForm: NgForm) {

  }

  calculateJob() {
    let tempPrice: number;
    let minPrice = 50;
    console.log(this.formValue);
    this.area = this.formValue.length * this.formValue.width;
    tempPrice = this.STITCH_RATE * this.area;
    this.areaPrice = tempPrice > 50 ? tempPrice: minPrice;
    this.battingPrice = this.getBattingPrice(this.formValue.batting, this.getYards(this.formValue.length))
    this.backingPrice = this.getSeamPrice(this.formValue.backing.pieced);
    this.salesTax = this.battingPrice ? this.battingPrice * this.TAX_RATE : 0;
    this.jobPrice = this.areaPrice + this.battingPrice + this.backingPrice + this.salesTax;
  }

  getBattingPrice(choice: string, yards: number) {
    console.log('batting yards', yards);
    let price;
    switch (choice) {
      case 'provided':
        price = 0;
        break;
      case 'cotton-poly':
        price = yards * this.BLEND_RATE;
        break;
      case 'cotton':
        price = yards * this.COTTON_RATE;
        break;
      default:
        price = 0;
    }
    return price;
  }

  // make this calculate in increments of 1/8 yard
  getYards(length: number) {
    return (length / 36);
  }

  getSeamPrice(choice: string) {
    let price;
    switch (choice) {
      case '0':
        price = 0;
        break;
      case '1':
        price = 1 * this.SEAM_RATE;
        break;
      case '2':
        price = 2 * this.SEAM_RATE;
        break;
      default:
        price = 0;
    }
    return price;
  }

  ngOnInit(): void { }
  
}
