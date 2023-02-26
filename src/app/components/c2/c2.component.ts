import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  
  isUpdatedFormActive: boolean = false;

  checkUpdateFormIsActiveForExitComponent(){
    if(!this.isUpdatedFormActive)
      return true;

    let result = confirm("Güncelleme işlemi yaparken sayfadan çıkmak istediniz, devam etmek istiyor musunuz?");

    return result;
  }
}
