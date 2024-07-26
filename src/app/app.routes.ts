import { Routes } from '@angular/router';
import { ManageCustomerComponent } from './page/customer/manage-customer/manage-customer.component';
import { ManageItemComponent } from './page/item/manage-item/manage-item.component';
import { ManageRentalComponent } from './page/rental/manage-rental/manage-rental.component';

export const routes: Routes = [
    {
        path: "manage-customer",
        component: ManageCustomerComponent
    },
    {
        path: "namage-item",
        component:ManageItemComponent
    },
    {
        path: "manage-rental",
        component: ManageRentalComponent
    }
];
