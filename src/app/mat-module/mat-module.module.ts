import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  exports: [MatMenuModule, MatIconModule, MatButtonModule, MatBadgeModule],
})
export class MatModuleModule {}
