export interface professional {
    name: string;
    id: string;
    password: string;
    email: string;
    profession: string;
    permissions: boolean;
    image: {
        url: string;
        width: number;
        height: number;
    };
}
