import { Walk } from '@/walks/entities/walk.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
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

    @ManyToMany(() => Walk)
    @JoinTable({ name: "UserWalks" })
    walks: Walk[];
}
