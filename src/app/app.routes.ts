import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { ProduntMainComponent } from './page/produnt-main/produnt-main.component';
import { NgModule } from '@angular/core';
import { RevenueManagementDynamicPricingComponent } from './page/products/channel-manager/revenue-management-dynamic-pricing.component';
import { ServiceMainComponent } from './page/service-main/service-main.component';
import { AboutComponent } from './page/about/about.component';
import { CorporateTieUpsforHotelsComponent } from './page/products/corporate-tie-upsfor-hotels/corporate-tie-upsfor-hotels.component';
import { PropertyManagementComponent } from './page/products/property-management/property-management.component';
import { MarketingandReservationManagementComponent } from './page/products/marketingand-reservation-management/marketingand-reservation-management.component';
import { NoShowRevenueProtectionComponent } from './page/products/no-show-revenue-protection/no-show-revenue-protection.component';
import { SecureECollectComponent } from './page/products/secure-e-collect/secure-e-collect.component';
import { PaymentGatewayServiceComponent } from './page/products/payment-gateway-service/payment-gateway-service.component';
import { BookingEngineComponent } from './page/products/booking-engine/booking-engine.component';
import { RevenueManagementComponent } from './page/products/revenue-management/revenue-management.component';
import { OurTeamComponent } from './page/our-team/our-team.component';
import { PricingComponent } from './page/pricing/pricing.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'Products/Details/Revenue Management Dynamic Pricing', component:ProduntMainComponent},
    {path:'Product & Service', component:RevenueManagementDynamicPricingComponent},
    {path:'Service', component:ServiceMainComponent},
    {path:'AboutPHS', component:AboutComponent},
    {path:'OurTeam', component:OurTeamComponent},
    {path:'Pricing', component:PricingComponent},
    {path:'Products/Details/Corporate Tie-ups for Hotels', component: CorporateTieUpsforHotelsComponent},
    {path:'Products/Details/Property Management', component: PropertyManagementComponent},
    {path:'Products/Details/Marketing and Reservation Management', component: MarketingandReservationManagementComponent},
    {path:'Products/Details/No-Show Revenue Protection', component: NoShowRevenueProtectionComponent},
    {path:'Products/Details/Secure E-Collect', component: SecureECollectComponent},
    {path:'Products/Details/Payment Gateway Service', component: PaymentGatewayServiceComponent},
    {path:'Products/Details/Booking Engine', component: BookingEngineComponent},
    {path:'Products/Details/Revenue Management', component: RevenueManagementComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }