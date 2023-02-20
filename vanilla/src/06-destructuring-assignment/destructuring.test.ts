import {ManType} from "../06-destructuring-assignment/Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: '1',}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test('', () => {

    const {title} = props.address.street

    const {age, lessons} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')

})
test('', () => {

})

test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [, ls2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')

    expect(restLessons[0]).toStrictEqual({name: 'react',title:'3'})


})