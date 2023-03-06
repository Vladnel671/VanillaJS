function icreaseAge(u: UserTypee) {
    u.age++

}

type UserTypee = {
    name: string
    age: number
    address: {title: string}
}

test("reference type test", () => {

    var user: UserTypee = {
        name: "Vlados",
        age: 32,
        address: {
            title:'NY'
        }
    }

    icreaseAge(user)

    expect( user.age).toBe(33)

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)

})
test("array reference test", () => {

    var users = [
        {
            name: "vlados",
            age:54
        },
        {
            name: "ilya",
            age:32
        }
    ]

    var admins = users

    admins.push({name: 'pavel', age:10})

    expect( users[2]).toEqual({name: 'pavel', age:10})

})
test("value type test", () => {
    var  usersCount = 100;
    var adminsCount = usersCount

    adminsCount++

    expect( adminsCount).toEqual(101)

})
test("reference type test", () => {

    const address = {
        title: 'NY'
    }

    var user: UserTypee = {
        name: "Vlados",
        age: 32,
        address: address
    }

    //let addr = user.address

    var user2 : UserTypee = {
        name: "ilya",
        age: 22,
        address: address
    }

    address.title = 'LA';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('LA')
})
test("reference type array test", () => {

    const address = {
        title: 'NY'
    }

    var user: UserTypee = {
        name: "Vlados",
        age: 32,
        address: address
    }

    var user2 : UserTypee = {
        name: "ilya",
        age: 22,
        address: address
    }

    const users = [user, user2, { name: 'Igor' , age: 18 , address: address}]
    const admins = [user, user2]
    admins[0].name = 'Vlad'


    address.title = 'LA';

    expect(users[0].name).toBe('Vlad')
    expect(user.name).toBe('Vlad')
})
test("sort array test", ()=> {
    const letters = ['c','d','a','z','e']

    passportist(letters)

    expect(letters).toBe( ['c','d','a','z','e'])

})
function passportist (letters: any) {
    const copy = [...letters]
}