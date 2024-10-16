import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WasteType } from '../enum/waste-type.enum';
import { Walk } from '@/walks/entities/walk.entity';

@Entity()
export class Waste {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer' })
    quantity: number;

    @Column({ type: 'enum', enum: WasteType })
    type: WasteType;

    @ManyToOne(() => Walk, (walk) => walk.wastes)
    @JoinColumn()
    walk: Walk;
}
