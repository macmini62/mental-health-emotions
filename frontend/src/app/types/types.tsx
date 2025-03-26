import { professional, seeker } from "../interface/interface";

export type ContentItem =
| { type: "paragraph"; paragraph: string }
| { type: "image"; image: File | string };

export type user = 
| { type: "professional"; data: professional; }
| { type: "seeker"; data: seeker; }