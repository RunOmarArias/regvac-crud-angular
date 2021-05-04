export class Patient {
    id: number;
    name: string;
    lastname: string;
    email: string;
    genere: string;
    hometown: string;
    curp: string;
    birthday: string;
    recordday: string;

    constructor(id: number,
                name: string,
                lastname: string,
                email: string,
                genere: string,
                hometown: string,
                curp: string,
                birthday: string,
                recordday: string) {
                    this.id = id;
                    this.name = name;
                    this.lastname = lastname;
                    this.email = email;
                    this.genere = genere;
                    this.hometown = hometown;
                    this.curp = curp;
                    this.birthday = birthday;
                    this.recordday = recordday;
                }
}