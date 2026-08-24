import {
  Cell,
  Base,
  Entry,
  ImageRef,
  Prerequisite,
  Rarity,
  ReprintedAs,
  SingleEntry,
  SkillProficiency,
  SpellComponents,
  Unit,
  Sense,
  AdditionalSpell,
  Ability,
  ToolProficiency,
  Choose,
  Resist,
  LanguageProficiency,
  FeatureProgression,
  WeaponProficiency,
  ArmorProficiency,
  SavingThrowProficiency,
  SkillToolLanguageProficiency,
  Light,
  SetAbility,
  ReqAttuneTag,
  Mastery,
  SRD,
  Duration,
  Range,
  ScalingLevelDice,
  StartingEquipment,
} from './common';

export interface Action extends Base, SRD {
  entries: Entry[];
  time?: Unit[];
  seeAlsoAction?: string[];
  fromVariant?: string;
}

export interface Boon extends Base, SRD {
  entries: Entry[];
  type: string;
  ability?: SingleEntry;
  signatureSpells?: SingleEntry;
}

export interface Deity {
  name: string;
  source: string;
  pantheon: string;
  alignment?: string[];
  category?: string;
  title?: string;
  worshipers?: string;
  plane?: string;
  domains?: string[];
  province?: string;
  symbol?: string;
  symbolImg?: ImageRef;
  entries?: string[];
}

export interface Feat extends Base, SRD {
  entries: Entry[];
  category?: string;
  prerequisite?: Prerequisite[];
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  languageProficiencies?: LanguageProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  armorProficiencies?: ArmorProficiency[];
  savingThrowProficiencies?: SavingThrowProficiency[];
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
  expertise?: SkillProficiency[];
  senses?: Sense[];
  bonusSenses?: Sense[];
  additionalSpells?: AdditionalSpell[];
  ability?: Ability[];
  repeatable?: boolean;
  repeatableHidden?: boolean;
  traitTags?: string[];
  immune?: Resist[];
  resist?: Resist[];
  conditionImmune?: string[];
  optionalfeatureProgression?: FeatureProgression[];
  _versions?: any[];
}

export interface ItemMastery extends Base, SRD {
  entries: Entry[];
}

// Note, for ItemProperty the name is optional
export interface ItemProperty extends SRD {
  name?: string;
  source: string;
  page?: number;
  abbreviation: string;
  template: string;
  reprintedAs?: ReprintedAs[];
  entries?: Entry[];
}

export interface ItemType extends Base, SRD {
  entries?: Entry[];
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
  mastery?: Mastery[];
  property?: string[];
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
  immune?: string[];
  resist?: string[];
  vulnerable?: string[];
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
  firearm?: boolean;
  firearms?: boolean;
  dexterityMax?: number | null;
}

export interface Spell extends Base, SRD {
  entries: Entry[];
  entriesHigherLevel?: Entry[];
  level: number;
  school: string;
  components: SpellComponents;
  time?: Unit[];
  duration?: Duration[];
  range?: Range;
  damageInflict?: string[];
  damageImmune?: string[];
  damageResist?: string[];
  damageVulnerable?: string[];
  conditionInflict?: string[];
  conditionImmune?: string[];
  savingThrow?: string[];
  affectsCreatureType?: string[];
  areaTags?: string[];
  scalingLevelDice?: ScalingLevelDice | ScalingLevelDice[];
  miscTags?: string[];
  meta?: { ritual: boolean };
  spellAttack?: string[];
  abilityCheck?: string[];
}

export interface Table extends Base, SRD {
  caption?: string;
  colLabels?: string[];
  colStyles: string[];
  rows: (Entry | Cell)[][];
}

export interface Background extends Base, SRD {
  entries?: Entry[];
  ability?: Ability[];
  feats?: any[]; // TODO
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  languageProficiencies?: LanguageProficiency[];
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
  startingEquipment?: StartingEquipment[];
  fromFeature?: any; // TODO
  additionalSpells?: any[]; // TODO
  prerequisite?: Prerequisite[];
}
