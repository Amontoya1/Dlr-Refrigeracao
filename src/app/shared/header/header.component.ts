import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'dlr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer')
  sidenav: MatSidenav | any;
  public isMobile: boolean = false;
  // isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  public routes: string = 'reparation';
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      )
      .subscribe((n: boolean) => {
        this.isMobile = n;
      });
  }

  public onCallToActionReparation() {
    this.router.navigate(['./reparacao']);
  }

  public onCallToActionManutencao() {
    this.router.navigate(['./manutencao']);
  }
  public onCallToActionHome() {
    this.router.navigate(['./home']);
  }

  public onCallToActionContact() {
    this.router.navigate(['./contact']);
  }
}
