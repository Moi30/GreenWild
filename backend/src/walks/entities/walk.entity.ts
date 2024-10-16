import { User } from 'src/users/entities/user.entity';
import { Waste } from 'src/wastes/entities/waste.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { WalkState } from '../enum/walk-state.enum';

@Entity()
export class Walk {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column()
    description: string;

    // Todo converter string to {x,y} object
    @Column()
    location: string;

    @Column({ type: 'enum', enum: WalkState })
    state: WalkState;

    @CreateDateColumn()
    created_on: Date;

    @Column()
    expected_on: Date;

    @Column()
    postponed_on: Date;

    @ManyToMany(() => User)
    @JoinTable({ name: "UserWalks" })
    users: User[];

    @OneToMany(() => Waste, (waste) => waste.walk)
    @JoinColumn()
    wastes: Waste[];
}
