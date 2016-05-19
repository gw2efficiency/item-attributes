/* eslint-env node, mocha */
const expect = require('chai').expect
const parse = require('../src/parseItems.js')

describe('parsing items', () => {
  it('ignores items without details', () => {
    let item = {
      id: 123,
      name: 'Some item'
    }

    expect(parse(item)).to.deep.equal({})
  })

  it('ignores items with details that don\'t matter', () => {
    let item = {
      id: 123,
      name: 'Some item',
      details: {}
    }

    expect(parse(item)).to.deep.equal({})
  })

  it('converts official attributes', () => {
    let item = {
      id: 123,
      name: 'Some item',
      details: {
        infix_upgrade: {
          attributes: [
            {attribute: 'BoonDuration', modifier: 123},
            {attribute: 'ConditionDamage', modifier: 123},
            {attribute: 'ConditionDuration', modifier: 123},
            {attribute: 'CritDamage', modifier: 123},
            {attribute: 'Healing', modifier: 123},
            {attribute: 'Power', modifier: 123},
            {attribute: 'Precision', modifier: 123},
            {attribute: 'Toughness', modifier: 123},
            {attribute: 'Vitality', modifier: 123}
          ]
        }
      }
    }

    expect(parse(item)).to.deep.equal({
      Concentration: 123,
      ConditionDamage: 123,
      Expertise: 123,
      Ferocity: 123,
      HealingPower: 123,
      Power: 123,
      Precision: 123,
      Toughness: 123,
      Vitality: 123
    })
  })

  it('can parse attributes out of item buffs', () => {
    let item = {
      id: 38422,
      name: 'Giver\'s Pearl Quarterstaff',
      details: {
        defense: 0,
        infix_upgrade: {
          buff: {skill_id: 25542, description: '+20% Condition Duration\n+15% Boon Duration'},
          attributes: [{attribute: 'Vitality', modifier: 171}, {attribute: 'Precision', modifier: 171}]
        }
      }
    }

    expect(parse(item)).to.deep.equal({Vitality: 171, Precision: 171, ConditionDuration: 0.2, BoonDuration: 0.15})
  })

  it('can parse weapons', () => {
    let item = {
      name: 'Flux Matrix',
      description: '',
      type: 'Weapon',
      level: 80,
      rarity: 'Exotic',
      vendor_value: 264,
      default_skin: 4873,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['HideSuffix', 'SoulBindOnUse'],
      restrictions: [],
      id: 31082,
      chat_link: '[&AgFqeQAA]',
      icon: 'https://render.guildwars2.com/file/B2DE735D050E424B6E92E236CF49A2407D5606BB/780646.png',
      details: {
        type: 'Focus',
        damage_type: 'Physical',
        min_power: 832,
        max_power: 883,
        defense: 0,
        infusion_slots: [],
        infix_upgrade: {
          attributes: [
            {attribute: 'Power', modifier: 120},
            {attribute: 'Precision', modifier: 85},
            {attribute: 'CritDamage', modifier: 85}
          ]
        },
        suffix_item_id: 24605,
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({Power: 120, Precision: 85, Ferocity: 85})
  })

  it('can parse armor', () => {
    let item = {
      name: 'Settler\'s Draconic Coat',
      description: '',
      type: 'Armor',
      level: 80,
      rarity: 'Exotic',
      vendor_value: 240,
      default_skin: 131,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['SoulBindOnUse'],
      restrictions: [],
      id: 48612,
      chat_link: '[&AgHkvQAA]',
      icon: 'https://render.guildwars2.com/file/E7FC2F5D02DBA0EE089BC615A5D2F1DFCFE6185F/61563.png',
      details: {
        type: 'Coat',
        weight_class: 'Heavy',
        defense: 363,
        infusion_slots: [],
        infix_upgrade: {
          attributes: [
            {attribute: 'Toughness', modifier: 134},
            {attribute: 'Healing', modifier: 96},
            {attribute: 'ConditionDamage', modifier: 96}
          ]
        },
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({Armor: 363, Toughness: 134, HealingPower: 96, ConditionDamage: 96})
  })

  it('can parse trinkets', () => {
    let item = {
      name: 'Triforge Pendant',
      description: '\'True greatness comes for those who have wisdom to do right, the courage to embark, and the power to follow through.\' -Logan Thackeray',
      type: 'Trinket',
      level: 80,
      rarity: 'Exotic',
      vendor_value: 528,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['HideSuffix', 'SoulBindOnUse'],
      restrictions: [],
      id: 23095,
      chat_link: '[&AgE3WgAA]',
      icon: 'https://render.guildwars2.com/file/E60B5A47DA0A9702580267066637C2DBE071E8D6/222402.png',
      details: {
        type: 'Amulet',
        infusion_slots: [],
        infix_upgrade: {
          attributes: [
            {attribute: 'Power', modifier: 56},
            {attribute: 'Precision', modifier: 56},
            {attribute: 'Toughness', modifier: 56},
            {attribute: 'Vitality', modifier: 56},
            {attribute: 'Healing', modifier: 56},
            {attribute: 'ConditionDamage', modifier: 56},
            {attribute: 'CritDamage', modifier: 56}]
        },
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({
      Power: 56,
      Precision: 56,
      Toughness: 56,
      Vitality: 56,
      HealingPower: 56,
      ConditionDamage: 56,
      Ferocity: 56
    })
  })

  it('can parse ascended trinkets', () => {
    let item = {
      name: 'Kodan Prayer Beads',
      description: '<c=@flavor>A string of 49 ivory beads.</c>',
      type: 'Trinket',
      level: 80,
      rarity: 'Ascended',
      vendor_value: 660,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
      restrictions: [],
      id: 39570,
      chat_link: '[&AgGSmgAA]',
      icon: 'https://render.guildwars2.com/file/2D1BC2EC75776E7AC85BAB7D7CAD715623A99C44/543903.png',
      details: {
        type: 'Amulet',
        infusion_slots: [{flags: ['Defense']}],
        infix_upgrade: {
          buff: {skill_id: 17070, description: '+32 Toughness\n+18 Power\n+18 Precision'},
          attributes: [
            {attribute: 'Toughness', modifier: 125},
            {attribute: 'Power', modifier: 90},
            {attribute: 'Precision', modifier: 90}
          ]
        },
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({
      Toughness: 157,
      Power: 108,
      Precision: 108
    })
  })

  it('can parse legacy ascended trinkets', () => {
    let item = {
      id: 75669,
      name: 'Eingestimmter Ring des roten Todes (Infundiert)',
      rarity: 'Ascended',
      details: {
        type: 'Ring',
        infix_upgrade: {
          buff: {
            skill_id: 15755,
            description: '+32 Kraft\n+18 Wildheit\n+18 Präzision\n+5 Qual-Widerstand'
          },
          attributes: [
            {attribute: 'Power', modifier: 94},
            {attribute: 'Precision', modifier: 67},
            {attribute: 'CritDamage', modifier: 67}
          ]
        }
      }
    }

    expect(parse(item)).to.deep.equal({Power: 126, Precision: 85, Ferocity: 85})
  })

  it('can parse backpacks', () => {
    let item = {
      name: 'Fiber Splice',
      type: 'Back',
      level: 80,
      rarity: 'Rare',
      vendor_value: 198,
      default_skin: 2329,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['HideSuffix', 'SoulBindOnUse'],
      restrictions: [],
      id: 36550,
      chat_link: '[&AgHGjgAA]',
      icon: 'https://render.guildwars2.com/file/03B65C435B15EB2C10E04F3454B03718AAF3AE90/61004.png',
      details: {
        infusion_slots: [],
        infix_upgrade: {
          attributes: [
            {attribute: 'Power', modifier: 26},
            {attribute: 'Toughness', modifier: 19},
            {attribute: 'Vitality', modifier: 19}
          ]
        },
        suffix_item_id: 24543,
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({Power: 26, Toughness: 19, Vitality: 19})
  })

  it('can parse gems', () => {
    let item = {
      name: 'Black Diamond',
      description: 'Double-click to apply to an item with an unused upgrade slot.',
      type: 'UpgradeComponent',
      level: 80,
      rarity: 'Rare',
      vendor_value: 198,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: [],
      restrictions: [],
      id: 76491,
      chat_link: '[&AgHLKgEA]',
      icon: 'https://render.guildwars2.com/file/4E096C75FAB2EF90A82648A43C64FC226267FB92/1202991.png',
      details: {
        type: 'Gem',
        flags: ['ShortBow', 'HeavyArmor', 'LightArmor', 'Dagger', 'MediumArmor', 'Focus', 'Greatsword', 'Hammer', 'Trinket', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
        infusion_upgrade_flags: [],
        infix_upgrade: {
          buff: {
            skill_id: 32185,
            description: '+17 Condition Damage\n+17 Power\n+9 Expertise\n+9 Precision'
          }, attributes: []
        },
        suffix: 'of Black Diamond'
      }
    }

    expect(parse(item)).to.deep.equal({ConditionDamage: 17, Power: 17, Expertise: 9, Precision: 9})
  })

  it('can parse sigils', () => {
    let item = {
      name: 'Minor Sigil of Malice',
      description: 'Double-click to apply to a weapon.',
      type: 'UpgradeComponent',
      level: 0,
      rarity: 'Masterwork',
      vendor_value: 58,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: [],
      restrictions: [],
      id: 44948,
      chat_link: '[&AgGUrwAA]',
      icon: 'https://render.guildwars2.com/file/7396B40F4A32F91DCB0BB04F9171F32FD040C5EE/619707.png',
      details: {
        type: 'Sigil',
        flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
        infusion_upgrade_flags: [],
        infix_upgrade: {buff: {skill_id: 20466, description: '+5% condition duration.'}, attributes: []},
        suffix: 'of Malice'
      }
    }

    expect(parse(item)).to.deep.equal({ConditionDuration: 0.05})
  })

  it('can parse runes', () => {
    let item = {
      name: 'Superior Rune of the Daredevil',
      description: 'Double-click to apply to a piece of armor.',
      type: 'UpgradeComponent',
      level: 60,
      rarity: 'Exotic',
      vendor_value: 65,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: [],
      restrictions: [],
      id: 72852,
      chat_link: '[&AgGUHAEA]',
      icon: 'https://render.guildwars2.com/file/5957E29A2B985F0FF0E50878F62A702262BC0714/1201520.png',
      details: {
        type: 'Rune',
        flags: ['HeavyArmor', 'LightArmor', 'MediumArmor'],
        infusion_upgrade_flags: [],
        bonuses: ['+25 Power', '+35 Toughness', '+50 Power', '+65 Toughness', '+100 Power', 'Next attack is guaranteed to crit after completing a dodge roll while in combat.'],
        infix_upgrade: {attributes: []},
        suffix: 'of the Daredevil'
      }
    }

    let runes = [item, item, item]
    expect(parse(runes)).to.deep.equal({Power: 75, Toughness: 35})
  })

  it('ignores runes over the limit', () => {
    let item = {
      name: 'Minor Rune of the Undead',
      description: 'Double-click to apply to a piece of armor.',
      type: 'UpgradeComponent',
      level: 0,
      rarity: 'Masterwork',
      vendor_value: 5,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: [],
      restrictions: [],
      id: 24759,
      chat_link: '[&AgG3YAAA]',
      icon: 'https://render.guildwars2.com/file/43FB5A05AD1828090A1818D6CD2E04B30BD50DE6/221096.png',
      details: {
        type: 'Rune',
        flags: ['HeavyArmor', 'LightArmor', 'MediumArmor'],
        infusion_upgrade_flags: [],
        bonuses: ['+10 Condition Damage', '+14 Toughness'],
        infix_upgrade: {attributes: []},
        suffix: 'of the Undead'
      }
    }

    let runes = [item, item, item, item, item, item, item]
    expect(parse(runes)).to.deep.equal({ConditionDamage: 10, Toughness: 14})
  })

  it('can parse agony infusions', () => {
    let item = {
      name: '+7 Agony Infusion',
      description: 'Double-click to apply to an unused agony-infusion slot. Used by artificers to craft more powerful agony infusions.',
      type: 'UpgradeComponent',
      level: 80,
      rarity: 'Ascended',
      vendor_value: 330,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['NoMysticForge', 'NoSalvage', 'NoSell'],
      restrictions: [],
      id: 49430,
      chat_link: '[&AgEWwQAA]',
      icon: 'https://render.guildwars2.com/file/AE7C224D02E7F16F19FAFAE1CC50B80E5DC80214/511838.png',
      details: {
        type: 'Default',
        flags: ['Trinket'],
        infusion_upgrade_flags: ['Agony'],
        infix_upgrade: {buff: {skill_id: 22106, description: '+7 Agony Resistance'}, attributes: []},
        suffix: ''
      }
    }

    expect(parse(item)).to.deep.equal({AgonyResistance: 7})
  })

  it('can parse stat infusions', () => {
    let item = {
      name: 'Mighty WvW Infusion',
      description: 'Double-click to apply to an unused offensive infusion slot.',
      type: 'UpgradeComponent',
      level: 0,
      rarity: 'Fine',
      vendor_value: 8,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
      restrictions: [],
      id: 43254,
      chat_link: '[&AgH2qAAA]',
      icon: 'https://render.guildwars2.com/file/F1B068BFD7E6AC11ED90FE09CAB916F6D4DC2C63/587075.png',
      details: {
        type: 'Default',
        flags: ['ShortBow', 'HeavyArmor', 'LightArmor', 'Dagger', 'MediumArmor', 'Focus', 'Greatsword', 'Hammer', 'Trinket', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
        infusion_upgrade_flags: ['Offense'],
        infix_upgrade: {
          buff: {
            skill_id: 19063,
            description: '+5 Power\n+1% Damage to Guards, Lords, and Supervisors'
          }, attributes: []
        },
        suffix: ''
      }
    }

    expect(parse(item)).to.deep.equal({Power: 5})
  })

  it('can parse aqua breathers', () => {
    let item = {
      name: 'Ventari\'s Leather Breather',
      description: '<c=@flavor>Crafted in the style of the famous centaur pacifist, Ventari.</c>',
      type: 'Armor',
      level: 80,
      rarity: 'Ascended',
      vendor_value: 240,
      default_skin: 856,
      game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
      flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
      restrictions: [],
      id: 77100,
      chat_link: '[&AgEsLQEA]',
      icon: 'https://render.guildwars2.com/file/FA1D042B0845BED8DA3CFA0FAA0837D5EB0207A6/61297.png',
      details: {
        type: 'HelmAquatic',
        weight_class: 'Medium',
        defense: 102,
        infusion_slots: [{flags: ['Defense']}],
        infix_upgrade: {
          attributes: [
            {attribute: 'Toughness', modifier: 63},
            {attribute: 'Healing', modifier: 45},
            {attribute: 'Vitality', modifier: 45}
          ]
        },
        secondary_suffix_item_id: ''
      }
    }

    expect(parse(item)).to.deep.equal({Armor: 102, Toughness: 63, HealingPower: 45, Vitality: 45})
  })

  it('can parse selectable stats', () => {
    let item = {
      id: 68357,
      name: 'Rime-Rimmed Mariner\'s Rebreather',
      stats: {
        id: 1077,
        attributes: {
          Toughness: 63,
          Healing: 45,
          Vitality: 45
        }
      },
      details: {
        type: 'HelmAquatic',
        defense: 73
      }
    }

    expect(parse(item)).to.deep.equal({Armor: 73, Toughness: 63, HealingPower: 45, Vitality: 45})
  })
})
