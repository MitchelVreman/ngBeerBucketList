import { Component, OnInit } from '@angular/core';

import { NavBar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-beer-taste',
  styleUrls: ['beer-taste.component.scss'],
  templateUrl: './beer-taste.component.html'
})
export class BeerTasteComponent {

  formDefinition: any = {
    title: "Bierproef formulier",
    layouts: [
      {
        formFields: [
          {
            "Content": "Visueel",
            "ControlName": "Content"
          },
          {
            "Label": "Kleur bier",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Helderheid",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Schuim (kleur, structuur, hoeveelheid, opmerkingen)",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Content": "Geur",
            "ControlName": "Content"
          },
          {
            "Label": "Geur(en)",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Content": "Smaak",
            "ControlName": "Content"
          },
          {
            "Label": "Zoet nasmaak (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Zoet smaakverloop (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Zuur nasmaak (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Zuur smaakverloop (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Bitter nasmaak (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Bitter smaakverloop (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Label": "Andere smaken",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Content": "Mondgevoel",
            "ControlName": "Content"
          },
          {
            "Label": "CO2",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Doordrinkbaarheid",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Mondgevoel",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Schatting alc %",
            "ControlName": "Textbox",
            "Value": ""
          },
          {
            "Label": "Body (0-5)",
            "ControlName": "Slider",
            "Value": ""
          },
          {
            "Content": "Persoonlijk oordeel",
            "ControlName": "Content"
          },
          {
            "Label": "Cijfer",
            "ControlName": "Textbox",
            "Value": ""
          }

        ]
      }
    ]
  }

}
