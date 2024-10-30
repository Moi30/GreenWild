import { Walks } from '@/walks/entities/walk.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    lastName: string;

    @Column({ length: 20 })
    firstName: string;

    @Column({ length: 70 })
    email: string;

    @CreateDateColumn()
    created_on: Date;

    @Column()
    last_connection: Date;

    @Column()
    cgu_accepted: boolean;

    @ManyToMany(() => Walks)
    @JoinTable({ name: "userWalks" })
    walks: Walks[];
}
