export type ContentItem =
| { type: "paragraph"; paragraph: string }
| { type: "image"; image: File | string };