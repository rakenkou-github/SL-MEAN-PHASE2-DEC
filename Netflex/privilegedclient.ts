import { client } from "./client";

export class priviligedclient extends client {
    id: number;
    verifiedOn: Date;
    privileges: string[];

}