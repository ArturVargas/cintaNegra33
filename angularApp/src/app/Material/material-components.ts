import { NgModule } from "@angular/core";
import { 
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
    
} from '@angular/material';


@NgModule({
      imports: [
        MatDatepickerModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule
      ],
      exports: [
        MatDatepickerModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule
      ]
})

export class MaterialComponents {}