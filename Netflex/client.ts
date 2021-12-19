import { clientProfile } from "./clientprofile";
import { IOrder } from "./order";
import { payment } from "./payment";

export class client implements IOrder {
    id: number;
    firstname: string;
    lastname: string;
    username: string
    email: string;
    dateOfBirth: Date;
    gender: string;
    payment: payment
    profile: clientProfile;

    printOrder() {
        console.log("This my order");
    }
}