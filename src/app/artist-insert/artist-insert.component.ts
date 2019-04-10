import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "../services/user-information.service";
import { Router } from "@angular/router";
import { Artist, Category } from "../model/object";
import { ArtistsService } from '../services/artists.service';

@Component({
  selector: "app-artist-insert",
  templateUrl: "./artist-insert.component.html",
  styleUrls: ["./artist-insert.component.css"]
})
export class ArtistInsertComponent implements OnInit {
  myArtist: Artist;
  myCategories: Array<Category>;
  myCategorySelected: Category;
  registerError: String;

  constructor(
    private userInfo: UserInformationService,
    private router: Router,
    private artistService: ArtistsService
  ) {
    this.myArtist = new Artist();
    this.myCategorySelected = null;
    this.myCategories = new Array();
   
    artistService.getAllCategories().subscribe(element =>{
      this.myCategories = element;
    });
  }

  ngOnInit() {}

  addArtist() {
    var good = true;
    this.registerError = "No se ha podido crear el artista:\n";
    //console.log(this.myCategorySelected);
    
    if (!this.validateName(this.myArtist.name)) {
      this.registerError += "- Nombre inválido\n";
      this.myArtist.name = "";
      good = false;
    }
    if (!this.validateDescription(this.myArtist.description)) {
      this.registerError += "- Descripción inválida\n";
      this.myArtist.description="";
      good = false;
    }
    if (!this.validateCategory(this.myCategorySelected)) {
      this.registerError += "- Seleccione categoría válida\n";
      good = false;
    }
    if(this.myArtist.image == null || this.myArtist.image.length == 0){
      this.registerError += "- URL Vacío\n";
      good = false;
    }

    if (good) {
      console.log(this.myCategorySelected);
      
      this.myArtist.categories = this.myCategorySelected;
      this.artistService.insertArtist(this.myArtist);
      this.myArtist = new Artist();
      this.myCategorySelected = null;
    } else {
      alert(this.registerError);
    }
  }

  private validateName(name: String): boolean {
    if(name == null) return false;
    return name.length != 0;
  }

  private validateDescription(desc: String): boolean {
    if(desc == null) return false;
    return desc.length != 0;
  }

  private validateCategory(cat: Category): boolean {
    return cat != null;
  }

  goBack() {
    this.router.navigateByUrl("/artists");
  }
}
