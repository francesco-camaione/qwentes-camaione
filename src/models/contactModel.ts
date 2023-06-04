export interface AddressModel {
    street: string,
    suite: any,
    city: string,
    zipcode: number,
    geo: {
        lat: number,
        lng: number
    }
}

export interface CompanyModel {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface ContactModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressModel,
    phone: unknown,
    website: string,
    company: CompanyModel
}