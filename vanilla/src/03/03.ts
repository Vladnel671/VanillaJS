import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";
import exp from "constants";


export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: Date.now(),
        title: skill
    })
}
export const addSkill2 = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: Date.now(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}
export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}
export const toHireStaff = (building:GovernmentBuildingType, staffCountToHire: number) =>{
    building.staffCount += staffCountToHire;
}
export function createMessage(props: CityType) {
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}