import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodePenalService } from 'src/app/service/code-penal.service';
import axios from 'axios';
import { concat, empty, range } from 'rxjs';

@Component({
  selector: 'app-cde-penal',
  templateUrl: './cde-penal.page.html',
  styleUrls: ['./cde-penal.page.scss'],
})
export class CdePenalPage  {
  cdpApiUrl='';
  cdpData={
    libelle:"" ,
    alineas: "",
  };

  donnees: any = []
  aline: any = []
  A = [0]

  constructor(public http:HttpClient) {
    this.readAPI("https://sheltered-headland-30754.herokuapp.com/codepenal/article").subscribe((data:any)=>{
      console.log(data);
      //var j = data.data.length
      for(var i in data.data){
        this.A.push(parseInt(i));
        this.donnees[i]=data.data[i].libelle;
        //console.log(i, 'taille: ', data.data[i].alineas.length);
        //this.aline[i]=data.data[i].alineas;
        if(data.data[i].alineas.length==0){
          this.aline[i]=[" "]
          console.log(i, 'conduit à un alinea vide');
        }
        else{
          for(var j in data.data[i].alineas){
            //this.aline[i][j]=data.data[i].alineas[j].libelle;
            //this.aline[i].push(data.data[i].alineas[j].libelle);
            //this.aline[i].push(data.data[i].alineas[j].libelle);
            //this.aline[i]=data.data[i].alineas[j].libelle
            //console.log(i, ' ligne: ', data.data[i].alineas[j].libelle);
            this.aline[i]=data.data[i].alineas[j].libelle;
          }
          console.log(i, 'ligne: ', this.aline[i]);
        }
      }
      
      console.log('A: ',this.A);
      console.log('Alineas: ', this.aline);
      this.A.shift()
      console.log('new A: ',this.A);
      console.log('données: ',this.donnees);
      this.cdpData.libelle=data['libelle']
      this.cdpData.alineas= data['alineas'];

    })

  }
  readAPI(url: string){
    return this.http.get(url);
  }

}

