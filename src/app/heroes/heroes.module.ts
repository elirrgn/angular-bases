import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { HeroListComponent } from "./list/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent
    ],
    exports: [
        HeroComponent,
        HeroListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}