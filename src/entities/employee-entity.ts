import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("employee")
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        length: 100
    })
    firstName: string;

    @Column({
        length: 100
    })
    lastName: string;

    @Column({
        length: 100
    })
    mobile: number;

   @Column({
        length: 100
    })
    email: string;
}