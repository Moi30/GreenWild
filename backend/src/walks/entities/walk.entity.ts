import { Users } from '@/users/entities/user.entity';
import { Wastes } from '@/wastes/entities/waste.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { WalkState } from '../enum/walk-state.enum';

@Entity()
export class Walks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ nullable: true })
    description: string;

    // Todo converter string to {x,y} object
    @Column()
    location: string;

    @Column({ type: 'enum', enum: WalkState, default: WalkState.proposed, })
    state: WalkState;

    @CreateDateColumn()
    created_on: Date;

    @Column()
    expected_on: Date;

    @Column({ nullable: true })
    postponed_on: Date;

    @ManyToMany(() => Users)
    @JoinTable({ name: "userWalks" })
    users: Users[];

    @OneToMany(() => Wastes, (waste) => waste.walk, { cascade: ["insert"] })
    @JoinColumn()
    wastes: Wastes[];
}
