import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { FooterModule } from './footer/footer.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MainComponent } from './main.component';
import { SharedModule} from '../ui-core/shared.module';
import { ContentModule} from '../components/content.module';
import {SearchBarModule} from '../ui-core/search-bar/search-bar.module';
import {ShortcutsModule} from '../ui-core/shortcuts/shortcuts.module';
import {SidebarModule} from '../ui-core/sidebar/sidebar.module';



@NgModule({
    declarations: [
        MainComponent,
    ],
    imports     : [
        RouterModule,
        MatSidenavModule,
        SharedModule,
        SearchBarModule,
        ShortcutsModule,
        SidebarModule,
        ContentModule,
        FooterModule,
        ToolbarModule,
    ],
    exports     : [
        MainComponent
    ]
})
export class MainModule
{
}
