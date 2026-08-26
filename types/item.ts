import {
  Base,
  SRD,
  ReprintedAs,
  Rarity,
  ReqAttuneTag,
  UIDString,
  Resist,
  Light,
  SetAbility,
  Ability,
  Choose,
} from './base';
import { Entry } from './entry';

export interface ItemMastery extends Base, SRD {
  entries: Entry[];
}

// Note, for ItemProperty the name is optional
export interface ItemProperty extends SRD {
  name?: string;
  source: string;
  page?: number;
  abbreviation: string;
  template?: string;
  reprintedAs?: ReprintedAs[];
  entries?: Entry[];
  entriesTemplate?: Entry[];
}

export interface ItemType extends Base, SRD {
  entries?: Entry[];
  entriesTemplate?: Entry[];
  abbreviation: string;
}

export interface Item extends Base, SRD {
  entries?: Entry[];
  additionalEntries?: Entry[];
  type?: string;
  typeAlt?: string;
  tier?: string;
  rarity?: Rarity;
  valueRarity?: Rarity;
  wondrous?: boolean;
  reqAttune?: string | boolean;
  reqAttuneAlt?: string | boolean;
  reqAttuneTags?: ReqAttuneTag[];
  bonusSpellAttack?: string;
  bonusSpellSaveDc?: string;
  bonusProficiencyBonus?: string;
  bonusWeapon?: string;
  bonusWeaponDamage?: string;
  bonusWeaponAttack?: string;
  bonusSavingThrow?: string;
  bonusSavingThrowConcentration?: string;
  bonusAbilityCheck?: string;
  focus?: boolean | string | string[];
  weight?: number;
  weightNote?: string;
  baseItem?: string;
  weaponCategory?: string;
  mastery?: UIDString[];
  property?: UIDString[];
  dmg1?: string;
  dmg2?: string;
  dmgType?: string;
  lootTables?: string[];
  classFeatures?: string[];
  value?: number | null;
  recharge?: string;
  rechargeAmount?: string | number;
  charges?: number | string;
  miscTags?: string[];
  immune?: Resist[] | null;
  resist?: Resist[] | null;
  vulnerable?: Resist[] | null;
  conditionImmune?: string[];
  grantsProficiency?: boolean;
  detail1?: string;
  detail2?: string;
  tattoo?: boolean;
  light?: Light[];
  attachedSpells?: any; // TODO
  crew?: number;
  crewMin?: number;
  crewMax?: number;
  travelCost?: number;
  shippingCost?: number;
  vehAc?: number;
  vehHp?: number;
  vehSpeed?: number;
  vehDmgThresh?: number;
  capPassenger?: number;
  capCargo?: number;
  seeAlsoVehicle?: string[];
  optionalfeatures?: string[];
  modifySpeed?: any; // TODO
  group?: string[];
  scfType?: string;
  curse?: boolean;
  ability?: SetAbility | Ability | Choose;
  ac?: number;
  bonusAc?: string;
  age?: string;
  range?: string;
  strength?: string | null;
  dexterity?: string;
  stealth?: boolean; // Note: this means stealth *disadvantage* when worn
  poison?: boolean;
  poisonTypes?: string[];
  sentient?: boolean;
  containerCapacity?: any; //TODO
  packContents?: any; // TODO
  atomicPackContents?: boolean;
  grantsLanguage?: boolean;
  staff?: boolean;
  critThreshold?: number;
  carryingCapacity?: number;
  speed?: number;
  seeAlsoDeck?: string[];
  spellScrollLevel?: number;
  ammoType?: string;
  barDimensions?: any; // TODO
  dexterityMax?: number | null;
  reload?: number;
  weapon?: boolean;
  armor?: boolean;
  arrow?: boolean;
  axe?: boolean;
  bolt?: boolean;
  bow?: boolean;
  bulletFirearm?: boolean;
  bulletSling?: boolean;
  cellEnergy?: boolean;
  club?: boolean;
  crossbow?: boolean;
  dagger?: boolean;
  firearm?: boolean;
  firearms?: boolean;
  glaive?: boolean;
  halberd?: boolean;
  hammer?: boolean;
  lance?: boolean;
  mace?: boolean;
  needleBlowgun?: boolean;
  net?: boolean;
  polearm?: boolean;
  rapier?: boolean;
  spear?: boolean;
  sword?: boolean;
  whip?: boolean;
  customProperties?: any; // TODO
  reach?: number;
  currencyConversion?: string;
}
