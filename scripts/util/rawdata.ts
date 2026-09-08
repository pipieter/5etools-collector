import { readFileSync } from 'fs';
import { join } from 'path';
import * as vm from 'vm';

class RawData {
  private parser: any; // parser.js Parser.

  constructor() {
    const parserPath = join(__dirname, '..', '..', '5etools-src', 'js', 'parser.js');
    const parserCode = readFileSync(parserPath, 'utf8');
    const sandbox = {
      globalThis: {} as any,
      console,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      Parser: undefined as any,
    };

    sandbox.globalThis = sandbox;
    vm.runInNewContext(parserCode, sandbox, { filename: parserPath });
    this.parser = sandbox.Parser;
  }

  /**
   * Resolves the display name or abbreviation for a given source.
   * If the source could not be resolved, this returns the backend source instead.
   */
  getSourceAbbreviation(sourceId: string): string {
    return this.parser?.SOURCE_JSON_TO_ABV?.[sourceId] || sourceId;
  }

  getSourceFullName(sourceId: string): string {
    return this.parser?.SOURCE_JSON_TO_FULL?.[sourceId] || sourceId;
  }

  getSourcePublishDate(sourceId: string): string | null {
    return this.parser?.SOURCE_JSON_TO_DATE?.[sourceId] || null;
  }

  private hasSourceId(sourceId: string, sourceSet: Set<string> | undefined): boolean {
    if (!sourceSet) return false;
    return sourceSet.has(sourceId);
  }

  getSourceCategory(sourceId: string): 'core' | 'core-supplemental' | 'adventure' | 'supplemental' {
    // Refer to 5etools-src/js/parser.js 3941
    if (this.hasSourceId(sourceId, this.parser?.SOURCES_VANILLA)) return 'core';
    if (this.hasSourceId(sourceId, this.parser?.SOURCES_LEGACY_WOTC)) return 'core';
    if (this.hasSourceId(sourceId, this.parser?.SOURCES_CORE_SUPPLEMENTS)) return 'core-supplemental';
    if (this.hasSourceId(sourceId, this.parser?.SOURCES_ADVENTURES)) return 'adventure';
    return 'supplemental';
  }

  getSourceLegacyStatus(sourceId: string): boolean {
    return this.hasSourceId(sourceId, this.parser?.SOURCES_LEGACY_WOTC);
  }

  getOptionalFeatureTypeFullNames() {
    return this.parser?.OPT_FEATURE_TYPE_TO_FULL;
  }

  getSizeNames() {
    return this.parser?.SIZE_ABV_TO_FULL;
  }

  getDamageNames() {
    return this.parser?.DMGTYPE_JSON_TO_FULL;
  }

  getFeatCategoryNames() {
    return this.parser?.FEAT_CATEGORY_TO_FULL;
  }

  getVehicleUpgradeTypes() {
    return this.parser?.VEHICLE_UPGRADE_TYPE_TO_FULL;
  }

  getSpellSchoolNames() {
    return this.parser?.SP_SCHOOL_ABV_TO_FULL;
  }

  getSkillAbilities() {
    return this.parser?.SKILL_TO_ATB_ABV;
  }

  getAbilityNames() {
    return this.parser?.ATB_ABV_TO_FULL;
  }

  getAlignmentNames() {
    return this.parser?._ALIGNMENT_ABV_TO_FULL;
  }

  getSpeedTypes(): string[] {
    return this.parser.SPEED_MODES;
  }

  getSpecialSpeedTypes(): string[] {
    const nonSpecial = ['walk'];

    const modes = this.getSpeedTypes();
    return modes.filter((mode) => !nonSpecial.includes(mode));
  }

  getRuleTypes() {
    return this.parser?.RULE_TYPE_TO_FULL;
  }
}

export default new RawData();
