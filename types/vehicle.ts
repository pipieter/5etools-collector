import { AC, Base, HP, Speed, SRD } from './internal/base';
import { Copyable } from './internal/copy';
import { Entry } from './internal/entry';

export interface VehicleCapacity {
  capPassenger?: number;
  capCargo?: number | string;
  capCreature?: number;
  capCrew?: number;
  capCrewNote?: string;
}

export interface VehicleWeapon {
  name: string;
  count?: number;
  entries: Entry[];
  action?: Entry[];
  ac?: AC;
  hp?: HP;
  crew?: number;
  costs?: { note: string; cost?: number }[];
  dt?: number;
  size?: string[];
}

export interface VehicleControl {
  name: string;
  entries: Entry[];
  ac: AC;
  hp: HP;
}

export interface VehicleMovement {
  name: string;
  ac: AC;
  hp: HP;
  hpNote?: string;
  speed: {
    mode: string;
    entries: Entry[];
  }[];
  isControl?: boolean;
}

export interface VehicleHull {
  ac: AC;
  hp: HP;
  dt?: number;
  acFrom?: string[];
}

export interface VehicleStation {
  name: string;
  entries: Entry[];
  action?: Entry[];
  size: string[];
  ac: AC;
  hp: HP;
  crew: number;
}

export interface VehicleBase extends Base, SRD, VehicleCapacity {
  type?: string;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  entries?: Entry[];
  vehicleType: string;
  size?: string | string[];
  terrain: string[];
  ac?: AC | AC[];
  hp?: HP;
  pace?: Speed;
  speed?: Speed;
  immune?: string[];
  dimensions?: string[];
  weapon?: VehicleWeapon[];
  conditionImmune?: string[];
  hull?: VehicleHull;
  control?: VehicleControl[];
  movement?: VehicleMovement[];
  action?: Entry[];
  actionThresholds?: Record<string, number>;
  cost?: number;
  weight?: number;
  trait?: Entry[];
  actionStation?: Entry[];
  reaction?: Entry[];
  station?: VehicleStation[];
  other?: Entry[];
}

export type Vehicle = VehicleBase | Copyable<VehicleBase>;
