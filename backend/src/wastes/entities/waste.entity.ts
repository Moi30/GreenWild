import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WasteType } from '../enum/waste-type.enum';
import { Walks } from '@/walks/entities/walk.entity';

@Entity()
export class Wastes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer' })
    quantity: number;

    @Column({ type: 'enum', enum: WasteType })
    type: WasteType;

    @ManyToOne(() => Walks, (walk) => walk.wastes)
    @JoinColumn()
    walk: Walks;
}
