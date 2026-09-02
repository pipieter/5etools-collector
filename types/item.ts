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
} from './internal/base';
import { Copyable } from './internal/copy';
import { Entry } from './internal/entry';

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

export interface ItemTypeBase extends Base, SRD {
  entries?: Entry[];
  entriesTemplate?: Entry[];
  abbreviation: string;
}

export interface ItemData {
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
  bonusSpellDamage?: string;
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
  mastery?: UIDString[] | string;
  property?: UIDString[] | string;
  dmg1?: string;
  dmg2?: string;
  dmgType?: string;
  lootTables?: string[];
  classFeatures?: string[];
  value?: number;
  recharge?: string;
  rechargeAmount?: string | number;
  charges?: number | string;
  miscTags?: string[];
  immune?: Resist[];
  resist?: Resist[];
  vulnerable?: Resist[];
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
  ammo?: boolean;
  customProperties?: any; // TODO
  reach?: number;
  currencyConversion?: string;
}

export interface ItemBase extends ItemData, Base, SRD {}

export interface ItemGroup extends ItemBase {
  items: string[];
  itemsHidden?: boolean;
}

export interface ItemTypeAdditionalEntries extends Base, SRD {
  entries: Entry[];
  appliesTo: string;
}

export interface ItemEntry extends Base, SRD {
  entriesTemplate: Entry[];
}

export interface MagicItemRequirement extends Partial<ItemData> {
  type?: string;
  name?: string | string[];
  source?: string;
}

export interface MagicVariantInherits extends Partial<ItemBase> {
  namePrefix?: string;
  nameSuffix?: string;
  nameRemove?: string;
  weightMult?: number;
  weightExpression?: string;
  valueMult?: number;
  valueExpression?: string;
  barding?: boolean;
}

export interface MagicVariant extends Partial<ItemBase> {
  inherits: MagicVariantInherits;
  requires?: MagicItemRequirement[];
  excludes?: MagicItemRequirement;
}

export type Item = ItemBase | Copyable<ItemBase>;
export type ItemType = ItemTypeBase | Copyable<ItemTypeBase>;
