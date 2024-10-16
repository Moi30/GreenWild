import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 35 })
    LastName: string;

    @Column({ length: 35 })
    FirstName: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    CreatedAt: Date;

    @Column()
    LastConnection: Date;
}
