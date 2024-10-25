// interface 和 type 中可以用分号或逗号，class 中只能用分号。

// 注释：interface 和 type 中可以使用分号或逗号作为分隔符
// 示例使用分号的 interface
export interface ExampleWithSemicolon {
    prop1: string;
    prop2: number;
    prop3: boolean;
}

// 示例使用逗号的 interface
export interface ExampleWithComma {
    prop1: string,
    prop2: number,
    prop3: boolean
}

// 示例使用分号的 type
export type TypeWithSemicolon = {
    prop1: string;
    prop2: number;
    prop3: boolean;
};

// 示例使用逗号的 type
export type TypeWithComma = {
    prop1: string,
    prop2: number,
    prop3: boolean
}

// 注释：class 中只能使用分号
class ExampleClass {
    prop1: string;
    prop2: number;
    prop3: boolean;

    constructor(prop1: string, prop2: number, prop3: boolean) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }
}

export interface PersonInter {
    id: string,
    name: string,
    age: number
}
// 一个自定义类型
// export type Persons = PersonInter[];
export type Persons = Array<PersonInter>;