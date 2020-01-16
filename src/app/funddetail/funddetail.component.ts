import { Component, OnInit } from "@angular/core";
import { SearchResp } from "src/model/search/SearchResp";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FundHouse } from "src/model/holding/FundHouse";
import { Fund } from "src/model/holding/Fund";
import { Transaction } from "src/model/transaction/transaction";
import { AppController } from "../services/app.controller.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-funddetail",
  templateUrl: "./funddetail.component.html",
  styleUrls: ["./funddetail.component.css"]
})
export class FunddetailComponent implements OnInit {
  resp: SearchResp;
  dataList: Array<Fund> = new Array<Fund>();
  fundhouses: Array<FundHouse> = new Array<FundHouse>();
  filterFundHouse: Array<FundHouse> = new Array<FundHouse>();
  //TODO All fund houses by filter
  companys: Array<FundHouse> = new Array<FundHouse>();
  types: Array<Fund> = new Array<Fund>();
  fundhouse: string;
  fundtypes: Array<Fund>;
  filtertypes: Array<Fund>;

  funds: Array<Fund> = new Array<Fund>();
  fundnames: Array<Fund> = new Array<Fund>();

  fundaccountNo = "200000001"; // todo
  customerNo = "10000001"; // todo
  modalFund: any = "";
  transaction: Transaction;
  FundOriginalPrice: number = 30.3;
  quantity: 333333;
  consentFlag: boolean;

  constructor(
    private http: HttpClient,
    private appController: AppController,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSearchResp();
  }

  setConsentFlag(e) {
    console.log();
  }

  submitBuyQuantity() {
    let dom: any = document.getElementById("quantity");
    this.quantity = dom.value;
    console.log(this.quantity);
  }

  submitFund(submittedFund) {
    console.log("click submit fund...");
    console.log("submittedFund==>", submittedFund);
    if (submittedFund == null) {
      alert("请重新选择基金");
    } else {
      //console.log("submit==>", submittedFund);
      //console.log("submit==>", this.quantity);
      this.modalFund = submittedFund;
      this.transaction = new Transaction();
      this.transaction.accountNo = this.fundaccountNo;
      this.transaction.customerNo = this.customerNo;
      this.transaction.fund = this.modalFund;
      this.transaction.lastModifiedTime = new Date().toLocaleDateString();
      this.transaction.orderReferenceNumber = 0;
      this.transaction.originalPrice = this.FundOriginalPrice;
      this.transaction.quantity = this.quantity;
    }
  }

  confirmBugFund() {
    console.log("Transaction==>", this.transaction);
    // this.http.post('http://localhost:8880/private/v1/investments/mutualFunds/buy', this.transaction).subscribe((res: any) => {
    //   console.log("confirm-res==>", res);
    //   if (res.responseCode == 0) {
    //     console.log('buy done...');
    //     //this.showList();
    //   }
    // });

    this.appController
      .post("app_module", "mutualFundBuy", this.transaction)
      .subscribe(
        res => {
          console.log("confirm-res==>", res);
          if (res.responseCode == 0) {
            console.log("buy done...");
            //this.showList();
            this.router.navigateByUrl("/holdings");
            console.log("router...");
          }
        },
        error => {
          console.log("Get mock resp buy.");
          this.getMockRespBuy();
          console.log("buy error....");
        }
      );
  }

  getMockRespSearch() {
    this.http
      .get("http://localhost:4200/assets/resp/search.json")
      .subscribe((res: any) => {
        this.dataList = res.data;
        this.dataList.forEach(element => {
          if (this.companys.length == 0) {
            this.companys.push(element.fundHouse);
            this.funds.push(element);
          }
          let flag = false;
          for (let i = 0; i < this.companys.length; i++) {
            if (this.companys[i].code !== element.fundHouse.code) {
              flag = true;
            } else {
              flag = false;
            }
          }
          if (flag) {
            this.companys.push(element.fundHouse);
            this.funds.push(element);
          }
        });
      });
  }

  getMockRespBuy() {
    this.http
      .get("http://localhost:4200/assets/resp/buy.json")
      .subscribe((res: any) => {
        console.log("rep", res);
        if (res.responseCode == 0) {
          this.router.navigateByUrl("/holdings");
        }
      });
  }

  getSearchResp() {
    console.log("companys==>", this.companys);
    const header = new HttpHeaders({
      timeout: `${8000}`
    });
    this.appController
      .get("app_module", "mutualFundSearch", null, header)
      .subscribe(
        res => {
          this.dataList = res.data;
          console.log("search==>", res.data);
          //const companys = [];
          this.dataList.forEach(element => {
            if (this.companys.length == 0) {
              this.companys.push(element.fundHouse);
              this.funds.push(element);
            }
            let flag = false;
            for (let i = 0; i < this.companys.length; i++) {
              if (this.companys[i].code !== element.fundHouse.code) {
                flag = true;
              } else {
                flag = false;
              }
            }
            if (flag) {
              this.companys.push(element.fundHouse);
              this.funds.push(element);
            }
          });
        },
        error => {
          console.log("Get mock resp search.");
          this.getMockRespSearch();
          console.log("search error...");
        }
      );
  }
  changeType(fundcode) {
    console.log("change type==>", fundcode);
    let fundhousel = this.fundhouse;
    this.types = [];
    this.filtertypes = [];
    this.dataList.forEach(element => {
      if (element.fundHouse.code === fundcode) {
        this.types.push(element);
      }
    });
    console.log("types==>", this.types);
    let flag = false;
    this.filtertypes.push(this.types[0]);
    for (var i = 0; i < this.types.length; i++) {
      for (var j = 0; j < this.filtertypes.length; j++) {
        if (this.types[i].fundType != this.filtertypes[j].fundType) {
          flag = true;
        } else {
          flag = false;
        }
      }
      if (flag) {
        this.filtertypes.push(this.types[i]);
      }
    }
    console.log("filter types==>", this.filtertypes);
    // this.fundtypes = new Array<Fund>();
    // this.filterType(this.filtertypes);
  }

  filterType(data: Array<Fund>) {
    this.fundtypes.push(data[0]);
    let flagtype = false;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < this.fundtypes.length; j++) {
        if (data[i].fundType == this.fundtypes[j].fundType) {
          flagtype = false;
        } else {
          flagtype = true;
        }
      }
      if (flagtype) {
        this.fundtypes.push(data[i]);
      }
    }
  }

  displayFund(data: Fund) {
    this.fundnames = new Array<Fund>();
    for (var j = 0; j < this.dataList.length; j++) {
      if (
        data.fundType == this.dataList[j].fundType &&
        data.fundHouse.name == this.dataList[j].fundHouse.name
      ) {
        this.fundnames.push(this.dataList[j]);
      }
    }
    //console.log("fundname==>", this.fundnames);
  }

  selectFund(code: string) {
    console.log("code==>", code);
    let fund = null;
    for (var j = 0; j < this.dataList.length; j++) {
      if (code == this.dataList[j].code) {
        fund = this.dataList[j];
        break;
      }
    }
    console.log("fund==>", fund);
    this.displayFund(fund);
  }
}
