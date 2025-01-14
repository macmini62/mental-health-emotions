export interface user {
    _id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    title: {
        name: string;
        licenseNo: string;
    };
}
