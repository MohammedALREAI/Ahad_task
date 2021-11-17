import { StateShape } from 'components/AddRow';
export interface DataShape {

    id: string,
    name: string,
    status: string,
    resources: string,
    price: string,
    provider_imag: string,
    provider_name: string
    complicity: string,
    start_data: string,
    deadLine: string,
    offers: string,
    userId: string

}


export type Order = 'asc' | 'desc';
export type HeaderSort = "id" | "name" | "status" | "resources" | "provider_name" | "provider_imag" | "price" | "complicity" | "start_data" | "deadLine" | "offers"
export const userOrderByHeader = (data: StateShape[], header: HeaderSort, orderBy: Order) => {
    let result: StateShape[] = data
    if (orderBy === 'desc') {
        result = data.sort((a, b) => String(a[header]).toLowerCase() > String(b[header]).toLowerCase() ? -1 : 1);
    }
    else if (orderBy === 'asc') {
        result = data.sort((a, b) => String(a[header]).toLowerCase() < String(b[header]).toLowerCase() ? -1 : 1);
    }
    return result
}


export type StatusType = "My" | "Acquired" | "Saved"



export const filterDataByKey = (data: StateShape[], key: StatusType, userId?: string) => {
    let result: StateShape[] = []
    if (key === "My") {
        const filter = data.filter((x) => x?.userId!.toLowerCase() === userId?.toLowerCase())
        if (filter.length) {
            result = filter
        } else {
            result = []
        }

    }
    else if (key === "Acquired") {
        const filter = data.filter((x) => x.status.toLowerCase() === ("In Review").toLowerCase())
        if (filter.length) {
            result = filter
        }
        else {
            result = []

        }
    }
    else if (key === "Saved") {
        const filter = data.filter((x) => x.status.toLowerCase() === ("Design").toLowerCase())

        if (filter.length) {
            result = filter
        }
        else {
            result = []

        }

    }
    else {
        return data
    }
    return result;
}






export const findRowByName = (data: DataShape[], search: string) => {
    return data.filter((x) => x.name === search)
}











