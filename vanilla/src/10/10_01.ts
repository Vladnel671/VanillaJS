export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        },
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {

    return {
        ...u,
        books: [...u.books, newBook]
    }

}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldbook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(b => b === oldbook ? newBook : b)
    }

}

export function updateCompanyTitle(
    user: WithCompaniesType,
    companyId: number,
    newTitle: string) {

    const copy : WithCompaniesType= {
        ...user,
        companies: user.companies.map(c => c.id === companyId ? {...c, title: newTitle}: c)
    }
return copy
}