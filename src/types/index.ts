export interface PersonInter {
    id: string,
    name: string,
    age: number
}
// 一个自定义类型
// export type Persons = PersonInter[];
export type Persons = Array<PersonInter>;