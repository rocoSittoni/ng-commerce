import { Injectable } from '@angular/core';

interface Product {
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockedProductDataService {

  private mockedData: Array<Product> = [
    {
        price: 5500,
        description: "some headsets with good bass and noise cancelling",
        category: "technology",
        imageUrl: "asdasdasd",
        id: "dfg56dfgs6dfg5g7",
    },
    {
        price: 1233,
        description: "some headsets with good bass and noise cancelling",
        category: "technology",
        imageUrl: "asdasda",
        id: "dfg56dfgs6dfg5g7",
    },
    {
      price: 4563,
      description: "some headsets with good bass and noise cancelling",
      category: "technology",
      imageUrl: "asdasda",
      id: "dfg56dfgs6dfg5g7",
    },
    {
      price: 7854,
      description: "some headsets with good bass and noise cancelling",
      category: "technology",
      imageUrl: "asdasda",
      id: "dfg56dfgs6dfg5g7",
    },
    {
      price: 2453,
      description: "some headsets with good bass and noise cancelling",
      category: "technology",
      imageUrl: "asdasda",
      id: "dfg56dfgs6dfg5g7",
    },
    {
      price: 2135,
      description: "some headsets with good bass and noise cancelling",
      category: "technology",
      imageUrl: "asdasda",
      id: "dfg56dfgs6dfg5g7",
    },
    {
      price: 23425,
      description: "some headsets with good bass and noise cancelling",
      category: "technology",
      imageUrl: "asdasda",
      id: "dfg56dfgs6dfg5g7",
    },
  ];

  public get $mockedData(): Array<Product> {
      return this.mockedData;
  }

  public set $mockedData(value: Array<Product>) {
      this.mockedData = value;
  }

  private selectedProduct : any;

  public get $selectedProduct(): any {
      return this.selectedProduct;
  }

  public set $selectedProduct(value: any) {
      this.selectedProduct = value;
  }

}
