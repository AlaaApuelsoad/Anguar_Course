import { Component } from "@angular/core";

@Component({
  selector: 'app-header', //which element in screen should be replaced by this component--> html tag to use this component
  standalone:true, 
  imports:[],
  // template:'<h1>Hello world<h1>', --> not a correct way to define a templte
  templateUrl:'./header.component.html', //path to external HTML file
  styleUrl:'./header.component.css' //inline css
})
export class HeaderComponent{}  
