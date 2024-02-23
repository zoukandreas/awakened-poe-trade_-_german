// @ts-check
/** @type{import('../../../src/assets/data/interfaces').TranslationDict} */
export default {
  RARITY_NORMAL: 'Normal',
  RARITY_MAGIC: 'Magisch',
  RARITY_RARE: 'Selten',
  RARITY_UNIQUE: 'Einzigartig',
  RARITY_GEM: 'Gemme',
  RARITY_CURRENCY: 'Währung',
  RARITY_DIVCARD: 'Weissagungskarte',
  RARITY_QUEST: 'Quest',
  MAP_TIER: 'Kartenlevel: ',
  RARITY: 'Seltenheit: ',
  ITEM_CLASS: 'Gegenstandsklasse: ',
  ITEM_LEVEL: 'Gegenstandsstufe: ',
  TALISMAN_TIER: 'Talisman-Level: ',
  GEM_LEVEL: 'Stufe: ',
  STACK_SIZE: 'Stapelgröße: ',
  SOCKETS: 'Fassungen: ',
  QUALITY: 'Qualität: ',
  PHYSICAL_DAMAGE: 'Physischer Schaden: ',
  ELEMENTAL_DAMAGE: 'Elementarschaden: ',
  CRIT_CHANCE: 'Kritische Trefferchance: ',
  ATTACK_SPEED: 'Angriffe pro Sekunde: ',
  ARMOUR: 'Rüstung: ',
  EVASION: 'Ausweichwert: ',
  ENERGY_SHIELD: 'Energieschild: ',
  TAG_WARD: 'Schutz: ',
  BLOCK_CHANCE: 'Chance auf Blocken: ',
  CORRUPTED: 'Verderbt',
  UNIDENTIFIED: 'Nicht identifiziert',
  ITEM_SUPERIOR: /^(.*) \([hH]ochwertig\)$/,
  MAP_BLIGHTED: /^Befallene (.*)$/,
  MAP_BLIGHT_RAVAGED: /^Extrem [bB]efallene (.*)$/,
  INFLUENCE_SHAPER: 'Schöpfer-Gegenstand',
  INFLUENCE_ELDER: 'Ältesten-Gegenstand',
  INFLUENCE_CRUSADER: 'Kreuzritter-Gegenstand',
  INFLUENCE_HUNTER: 'Jäger-Gegenstand',
  INFLUENCE_REDEEMER: 'Erlöserin-Gegenstand',
  INFLUENCE_WARLORD: 'Kriegsfürst-Gegenstand',
  SECTION_SYNTHESISED: 'Synthetisierter Gegenstand',
  ITEM_SYNTHESISED: /^Synthetisierte (.*)$/,
  VEILED_PREFIX: 'Verhülltes Präfix',
  VEILED_SUFFIX: 'Verhülltes Suffix',
  FLASK_CHARGES: /^Hat derzeit \d+ Füllungen$/,
  METAMORPH_HELP: "Combine this with four other different samples in Tane's Laboratory.", //obsolete
  BEAST_HELP: 'Füge diese Bestie mit Rechtsklick deinem Bestiarium hinzu.',
  VOIDSTONE_HELP: 'Fasse dies in deinen Atlas ein, um die Level aller Karten zu erhöhen.',
  METAMORPH_BRAIN: /^.* Brain$/, //obsolete
  METAMORPH_EYE: /^.* Eye$/, //obsolete
  METAMORPH_LUNG: /^.* Lung$/, //obsolete
  METAMORPH_HEART: /^.* Heart$/, //obsolete
  METAMORPH_LIVER: /^.* Liver$/, //obsolete
  CANNOT_USE_ITEM: 'Du kannst diesen Gegenstand nicht benutzen. Seine Eigenschaften werden ignoriert.',
  QUALITY_ANOMALOUS: /^Anomalous (.*)$/, //obsolete
  QUALITY_DIVERGENT: /^Divergent (.*)$/, //obsolete
  QUALITY_PHANTASMAL: /^Phantasmal (.*)$/, //obsolete
  AREA_LEVEL: 'Gebietsstufe: ',
  HEIST_WINGS_REVEALED: 'Aufgedeckte Gebäudetrakte: ',
  HEIST_TARGET: 'Auftragsziel: ',
  HEIST_BLUEPRINT_ENCHANTS: 'Enchanted Armaments',  //probably obsolete
  HEIST_BLUEPRINT_TRINKETS: 'Thieves\' Trinkets or Currency',  //probably obsolete
  HEIST_BLUEPRINT_GEMS: 'Unusual Gems',  //probably obsolete
  HEIST_BLUEPRINT_REPLICAS: 'Replicas or Experimented Items',  //probably obsolete
  MIRRORED: 'Gespiegelt',
  MODIFIER_LINE: /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s+\(Tier: (?<tier>\d+)\))?(?:\s+\(Rank: (?<rank>\d+)\))?$/,  //ToDo
  PREFIX_MODIFIER: 'Präfix-Modifikator',
  SUFFIX_MODIFIER: 'Suffix-Modifikator',
  CRAFTED_PREFIX: 'Meister-Präfix-Modifikator',
  CRAFTED_SUFFIX: 'Meister-Suffix-Modifikator',
  UNSCALABLE_VALUE: ' — Nicht skalierbarer Wert',
  CORRUPTED_IMPLICIT: 'Impliziter Modifikator (Verderbtheit)',
  MODIFIER_INCREASED: /^(.+?)% [eE]rhöht$/,
  INCURSION_OPEN: 'Begehbare Räume:',
  INCURSION_OBSTRUCTED: 'Unzugängliche Räume:',
  EATER_IMPLICIT: /^Impliziter Modifikator des Weltenfressers \((?<rank>.+)\)$/,
  EXARCH_IMPLICIT: /^Impliziter Modifikator des Brennenden Exarchen \((?<rank>.+)\)$/,
  ELDRITCH_MOD_R1: 'Kleine(r)',
  ELDRITCH_MOD_R2: 'Größere(r)',
  ELDRITCH_MOD_R3: 'Große(r)',
  ELDRITCH_MOD_R4: 'Bedeutende(r)',  //Check
  ELDRITCH_MOD_R5: 'Exquisite',  //ToDO
  ELDRITCH_MOD_R6: 'Perfect',  //ToDO
  SENTINEL_CHARGE: 'Ladung: ',
  SHAPER_MODS: ['Des Schöpfers', 'der Verformung'],
  ELDER_MODS: ['Des Ältesten', 'des Ältesten'],
  CRUSADER_MODS: ['Des Kreuzritters', 'des Kreuzzugs'],
  HUNTER_MODS: ['Des Jägers', 'der Jagd'],
  REDEEMER_MODS: ['Der Erlöserin', 'der Erlösung'],
  WARLORD_MODS: ['Des Kriegsfürsten', 'der Eroberung'],
  DELVE_MODS: ['Unterirdischer', 'des Untergrunds'],
  VEILED_MODS: ['Auserwählter', 'des Ordens', 'Catarinas', 'von Catarina', 'Hakus', 'von Haku', 'Elreons', 'von Elreon', 'Toras', 'von Tora', 'Vagans', 'von Vagan', 'Voricis', 'von Vorici', 'Hillocks', 'von Hillock', 'Leos', 'von Leo', 'Guffs', 'von Guff', 'Jorgins', 'von Jorgin', 'Korells', 'von Korell', 'Rins', 'von Rin', 'Camerias', 'von Cameria', 'Aislings', 'von Aisling', 'Rikers', 'von Riker', "Janus'", 'von Janus', "Gravicius'", 'von Gravicius'], 
  // there are actually more vailed mods (3.23) https://www.poewiki.net/wiki/List_of_veiled_modifiers
  //# 'Es, das entkam', 'von Es, das entkam', 
  INCURSION_MODS: ["Guatelitzis", "Xopecs", "Topotantes", "Tacatis", "Matatls", 'von Matatl', "Citaqualotls", 'von Citaqualotl', 'von Tacati', 'von Guatelitzi', 'von Puhuarte'],
  FOIL_UNIQUE: 'Foil-Relikt',
  UNMODIFIABLE: 'Nicht modifizierbar',
  // ---
  CHAT_SYSTEM: /^: (?<body>.+)$/,
  CHAT_TRADE: /^\$(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GLOBAL: /^#(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_PARTY: /^%(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GUILD: /^&(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_TO: /^@An (?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_FROM: /^@Von (?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WEBTRADE_GEM: /^Stufe (?<gem_lvl>\d+) (?<gem_qual>\d+)% (?<gem_name>.+)$/
}
