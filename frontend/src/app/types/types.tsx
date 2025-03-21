export type ContentItem =
| { type: "paragraph"; content: string }
| { type: "image"; image: File };