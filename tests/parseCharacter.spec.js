/* eslint-env node, mocha */
const expect = require('chai').expect
const parse = require('../src/parseCharacter.js')

describe('parsing character attributes', () => {
  it('parses a completely empty character', () => {
    let attributes = parse(80, 'Elementalist', [])

    expect(attributes.Power).to.equal(1000)
    expect(attributes.Toughness).to.equal(1000)
    expect(attributes.Vitality).to.equal(1000)
    expect(attributes.Precision).to.equal(1000)
    expect(attributes.Ferocity).to.equal(0)
    expect(attributes.Armor).to.equal(1000)
    expect(attributes.ConditionDamage).to.equal(0)
    expect(attributes.ConditionDuration).to.equal(0)
    expect(attributes.HealingPower).to.equal(0)
    expect(attributes.BoonDuration).to.equal(0)
    expect(attributes.Concentration).to.equal(0)
    expect(attributes.Expertise).to.equal(0)
    expect(attributes.CritChance).to.be.closeTo(0.04, 0.001)
    expect(attributes.CritDamage).to.be.closeTo(1.5, 0.001)
    expect(attributes.AgonyResistance).to.equal(0)
    expect(attributes.Health).to.equal(11645)
  })

  it('parses a level 80 revenant', () => {
    let items = [
      {
        name: 'Ring des roten Todes',
        description: '',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 495,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 37086,
        chat_link: '[&AgHekAAA]',
        icon: 'https://render.guildwars2.com/file/B155B37AD048CA9054F749043C3E4E99973DF8DF/511826.png',
        details: {
          type: 'Ring',
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Vielseitige einfache Infusion',
        description: 'Doppelklicken, um auf einen freien Infusionsplatz anzuwenden.',
        type: 'UpgradeComponent',
        level: 0,
        rarity: 'Masterwork',
        vendor_value: 16,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
        restrictions: [],
        id: 70852,
        chat_link: '[&AgHEFAEA]',
        icon: 'https://render.guildwars2.com/file/B4DBD92E63C8B924D0FE00F20AA1E9CE3F1C2436/511849.png',
        details: {
          type: 'Default',
          flags: ['ShortBow', 'HeavyArmor', 'LightArmor', 'Dagger', 'MediumArmor', 'Focus', 'Greatsword', 'Hammer', 'Trinket', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: ['Utility', 'Defense', 'Offense'],
          infix_upgrade: {buff: {skill_id: 22106, description: '+7 Qual-Widerstand'}, attributes: []},
          suffix: ''
        }
      }, {
        name: 'Überlegenes Sigill der Luft',
        description: 'Doppelklicken zur Anwendung auf eine Waffe.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24554,
        chat_link: '[&AgHqXwAA]',
        icon: 'https://render.guildwars2.com/file/C337CC61DF2F5EE44B7D053EFF33059111024444/220676.png',
        details: {
          type: 'Sigil',
          flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: [],
          infix_upgrade: {
            buff: {
              skill_id: 9448,
              description: '50% Chance bei kritischen Treffern: Erzeugt einen Blitzschlag<br><c=@reminder>(Erholzeit: 3 s)</c>'
            }, attributes: []
          },
          suffix: 'der Luft'
        }
      }, {
        name: 'Notizbuch des Magisters',
        description: '<c=@flavor>Eine Sammlung träumerischer und doch kluger Notizen, niedergeschrieben in makelloser Handschrift.</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 413,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 39232,
        chat_link: '[&AgFAmQAA]',
        icon: 'https://render.guildwars2.com/file/59943B48509FD07DDD96D1A8674ADCCEEDBF2665/543879.png',
        details: {
          type: 'Accessory',
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 78}, {
              attribute: 'Precision',
              modifier: 56
            }, {attribute: 'CritDamage', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Überlegenes Sigill der Heftigkeit',
        description: 'Doppelklicken zur Anwendung auf eine Waffe.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24615,
        chat_link: '[&AgEnYAAA]',
        icon: 'https://render.guildwars2.com/file/D7420E430D002E07382035EF0D0F77370C4EE6B8/220662.png',
        details: {
          type: 'Sigil',
          flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: [],
          infix_upgrade: {buff: {skill_id: 9322, description: '+5% Schaden'}, attributes: []},
          suffix: 'der Heftigkeit'
        }
      }, {
        name: 'Überlegene Rune der Stärke',
        description: 'Doppelklicken, um auf ein Rüstungsteil anzuwenden.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24714,
        chat_link: '[&AgGKYAAA]',
        icon: 'https://render.guildwars2.com/file/F33F44776DFCB0D75B48005904E3C75456C4F5FA/220644.png',
        details: {
          type: 'Rune',
          flags: ['HeavyArmor', 'LightArmor', 'MediumArmor'],
          infusion_upgrade_flags: [],
          bonuses: ['+25 Kraft', '+10% Machtdauer', '+50 Kraft', '+15% Machtdauer; 25% Chance, bei erlittenem Treffer Macht für 5 Sekunden zu erhalten. <c=@reminder>(Erholzeit: 5 s)</c>', '+100 Kraft', '+20% Machtdauer; +5% Schaden, solange Ihr unter der Wirkung von Macht steht.'],
          infix_upgrade: {attributes: []},
          suffix: 'der Stärke'
        }
      }, {
        name: '+5 Quallose Infusion',
        description: 'Doppelklicken, um auf einen freien quallosen Infusionsplatz anzuwenden. Wird von Konstrukteuren zur Herstellung stärkerer qualloser Infusionen verwendet.',
        type: 'UpgradeComponent',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 330,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['NoSalvage', 'NoSell'],
        restrictions: [],
        id: 49428,
        chat_link: '[&AgEUwQAA]',
        icon: 'https://render.guildwars2.com/file/AE7C224D02E7F16F19FAFAE1CC50B80E5DC80214/511838.png',
        details: {
          type: 'Default',
          flags: ['Trinket'],
          infusion_upgrade_flags: ['Agony'],
          infix_upgrade: {buff: {skill_id: 22104, description: '+5 Qual-Widerstand'}, attributes: []},
          suffix: ''
        }
      }, {
        name: 'Kristallinband (Infundiert)',
        description: '',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 495,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 37096,
        chat_link: '[&AgHokAAA]',
        icon: 'https://render.guildwars2.com/file/3B1CC13C0A3747B4A00277113E6ACD64D522B1D1/511816.png',
        details: {
          type: 'Ring',
          infusion_slots: [{flags: ['Defense']}, {flags: ['Agony'], item_id: 49428}],
          infix_upgrade: {
            buff: {
              skill_id: 15755,
              description: '+32 Kraft\n+18 Wildheit\n+18 Präzision\n+5 Qual-Widerstand'
            },
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Altheas Asche',
        description: '<c=@flavor>Einst eroberte die legendäre Schönheit Prinz Ruriks Herz, nur um daraufhin im Großen Feuer von Ascalon umzukommen.</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 413,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 39233,
        chat_link: '[&AgFBmQAA]',
        icon: 'https://render.guildwars2.com/file/0E4C0C67CA06D97FD9E93C08BC600103D15AAF6A/543880.png',
        details: {
          type: 'Accessory',
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 78}, {
              attribute: 'Precision',
              modifier: 56
            }, {attribute: 'CritDamage', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zeichen der Tethyos-Häuser',
        description: '<c=@flavor>Dieses Zeichen muss einst einem Opfer der Largos-Assassinen gehört haben.</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 660,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 39273,
        chat_link: '[&AgFpmQAA]',
        icon: 'https://render.guildwars2.com/file/BF57DD6C72C551CE55EF0DECA9A23E619E5DB963/534252.png',
        details: {
          type: 'Amulet',
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 125}, {
              attribute: 'Precision',
              modifier: 90
            }, {attribute: 'CritDamage', modifier: 90}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Einfache Infusion',
        description: 'Doppelklicken, um auf einen freien defensiven Infusionsplatz anzuwenden.',
        type: 'UpgradeComponent',
        level: 0,
        rarity: 'Fine',
        vendor_value: 8,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
        restrictions: [],
        id: 37137,
        chat_link: '[&AgERkQAA]',
        icon: 'https://render.guildwars2.com/file/57F96C19D8380892B754F776322F30A6EB4EF2B4/511848.png',
        details: {
          type: 'Default',
          flags: ['ShortBow', 'HeavyArmor', 'LightArmor', 'Dagger', 'MediumArmor', 'Focus', 'Greatsword', 'Hammer', 'Trinket', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: ['Defense'],
          infix_upgrade: {buff: {skill_id: 15760, description: '+5 Qual-Widerstand'}, attributes: []},
          suffix: ''
        }
      }, {
        name: 'Zojjas Schenkelstücke',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 108,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48076,
        chat_link: '[&AgHMuwAA]',
        icon: 'https://render.guildwars2.com/file/089C3C370428039590EF055CA33AED03E99E7951/699215.png',
        details: {
          type: 'Leggings',
          weight_class: 'Heavy',
          defense: 254,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zojjas Visier',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 122,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48075,
        chat_link: '[&AgHLuwAA]',
        icon: 'https://render.guildwars2.com/file/D4FC06FD1B58AF62E771D7747C66F0E8FAAB8054/699216.png',
        details: {
          type: 'Helm',
          weight_class: 'Heavy',
          defense: 127,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 63}, {
              attribute: 'Precision',
              modifier: 45
            }, {attribute: 'CritDamage', modifier: 45}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Zackenstab',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Weapon',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 10000,
        default_skin: 4244,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 46773,
        chat_link: '[&AgG1tgAA]',
        icon: 'https://render.guildwars2.com/file/F86C3CD9FA20D20EE920590517993211C6F9B99C/631650.png',
        details: {
          type: 'Staff',
          damage_type: 'Physical',
          min_power: 1034,
          max_power: 1166,
          defense: 0,
          infusion_slots: [{flags: ['Offense']}, {flags: ['Offense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 251}, {
              attribute: 'Precision',
              modifier: 179
            }, {attribute: 'CritDamage', modifier: 179}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zojjas Beinschienen',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 114,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48072,
        chat_link: '[&AgHIuwAA]',
        icon: 'https://render.guildwars2.com/file/DBEE7E93AF2FF0FAEC1CE996F52B949EC872D69C/699219.png',
        details: {
          type: 'Boots',
          weight_class: 'Heavy',
          defense: 191,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zojjas Schulterschutz',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 113,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48077,
        chat_link: '[&AgHNuwAA]',
        icon: 'https://render.guildwars2.com/file/BCF8FD08CF3F4A263704370659D69FEE2EDD0C45/699214.png',
        details: {
          type: 'Shoulders',
          weight_class: 'Heavy',
          defense: 127,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zojjas Brustplatte',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 107,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48073,
        chat_link: '[&AgHJuwAA]',
        icon: 'https://render.guildwars2.com/file/64725E0CEBDA22C75C16B70B0CDE58E4E6E7400A/699218.png',
        details: {
          type: 'Coat',
          weight_class: 'Heavy',
          defense: 381,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 141}, {
              attribute: 'Precision',
              modifier: 101
            }, {attribute: 'CritDamage', modifier: 101}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Zojjas Kriegsfäuste',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 116,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48074,
        chat_link: '[&AgHKuwAA]',
        icon: 'https://render.guildwars2.com/file/BD20599D290345BE7D98BD270FBE502CF5212654/699217.png',
        details: {
          type: 'Gloves',
          weight_class: 'Heavy',
          defense: 191,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      }]
    let equipment = [
      48073, 24714, 70852, 48072, 24714, 70852, 48074, 24714, 70852,
      48075, 24714, 70852, 48076, 24714, 70852, 48077, 24714, 70852, 39233, 70852,
      39232, 70852, 37086, 37096, 37137, 49428, 39273, 70852, 46773, 24615, 24554, 70852, 70852
    ]

    let equipmentArray = equipment.map(e => items.find(i => i.id === e))
    let attributes = parse(80, 'Revenant', equipmentArray)

    expect(attributes.Power).to.equal(2494)
    expect(attributes.Toughness).to.equal(1000)
    expect(attributes.Vitality).to.equal(1000)
    expect(attributes.Precision).to.equal(1920)
    expect(attributes.Ferocity).to.equal(920)
    expect(attributes.Armor).to.equal(2271)
    expect(attributes.ConditionDamage).to.equal(0)
    expect(attributes.ConditionDuration).to.equal(0)
    expect(attributes.HealingPower).to.equal(0)
    expect(attributes.BoonDuration).to.equal(0)
    expect(attributes.Concentration).to.equal(0)
    expect(attributes.Expertise).to.equal(0)
    expect(attributes.CritChance).to.be.closeTo(0.4780, 0.001)
    expect(attributes.CritDamage).to.be.closeTo(2.113, 0.001)
    expect(attributes.AgonyResistance).to.equal(87)
    expect(attributes.Health).to.equal(15922)
  })

  it('parses a level 80 elementalist', () => {
    let items = [
      {
        name: 'Überlegenes Sigill der Treffsicherheit',
        description: 'Doppelklicken zur Anwendung auf eine Waffe.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24618,
        chat_link: '[&AgEqYAAA]',
        icon: 'https://render.guildwars2.com/file/4B0EFF29FD064E5E93E4F8616BE309A451450AED/220661.png',
        details: {
          type: 'Sigil',
          flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: [],
          infix_upgrade: {buff: {skill_id: 9325, description: '+7% kritische Trefferchance'}, attributes: []},
          suffix: 'der Treffsicherheit'
        }
      },
      {
        name: 'Überlegene Rune des Gelehrten',
        description: 'Doppelklicken, um auf ein Rüstungsteil anzuwenden.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 65,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24836,
        chat_link: '[&AgEEYQAA]',
        icon: 'https://render.guildwars2.com/file/4378ABC0415950DAC6A05C76920392D72E242EC2/220736.png',
        details: {
          type: 'Rune',
          flags: ['HeavyArmor', 'LightArmor', 'MediumArmor'],
          infusion_upgrade_flags: [],
          bonuses: ['+25 Kraft', '+35 Wildheit', '+50 Kraft', '+65 Wildheit', '+100 Kraft', '+10% Schaden, solange Ihr mehr als 90% Lebenspunkte habt.'],
          infix_upgrade: {attributes: []},
          suffix: 'des Gelehrten'
        }
      },
      {
        name: 'Überlegenes Sigill der Heftigkeit',
        description: 'Doppelklicken zur Anwendung auf eine Waffe.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24615,
        chat_link: '[&AgEnYAAA]',
        icon: 'https://render.guildwars2.com/file/D7420E430D002E07382035EF0D0F77370C4EE6B8/220662.png',
        details: {
          type: 'Sigil',
          flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: [],
          infix_upgrade: {buff: {skill_id: 9322, description: '+5% Schaden'}, attributes: []},
          suffix: 'der Heftigkeit'
        }
      },
      {
        name: 'Zeichen der Tethyos-Häuser',
        description: '<c=@flavor>Dieses Zeichen muss einst einem Opfer der Largos-Assassinen gehört haben.</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 660,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 39273,
        chat_link: '[&AgFpmQAA]',
        icon: 'https://render.guildwars2.com/file/BF57DD6C72C551CE55EF0DECA9A23E619E5DB963/534252.png',
        details: {
          type: 'Amulet',
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 125}, {
              attribute: 'Precision',
              modifier: 90
            }, {attribute: 'CritDamage', modifier: 90}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Eingestimmter Ring des roten Todes (Infundiert)',
        description: 'Die Energie der Fraktale der Nebel lässt diesen Gegenstand knistern, der so eingestimmt ist, dass er über einen zusätzlichen Platz für Quallose Infusionen verfügt.',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 495,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 75669,
        chat_link: '[&AgGVJwEA]',
        icon: 'https://render.guildwars2.com/file/B155B37AD048CA9054F749043C3E4E99973DF8DF/511826.png',
        details: {
          type: 'Ring',
          infusion_slots: [{flags: ['Offense']}, {flags: ['Agony']}, {flags: ['Agony']}],
          infix_upgrade: {
            buff: {
              skill_id: 15755,
              description: '+32 Kraft\n+18 Wildheit\n+18 Präzision\n+5 Qual-Widerstand'
            },
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Eingestimmtes Kristallinband (Infundiert)',
        description: 'Die Energie der Fraktale der Nebel lässt diesen Gegenstand knistern, der so eingestimmt ist, dass er über einen zusätzlichen Platz für Quallose Infusionen verfügt.',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 495,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 76024,
        chat_link: '[&AgH4KAEA]',
        icon: 'https://render.guildwars2.com/file/3B1CC13C0A3747B4A00277113E6ACD64D522B1D1/511816.png',
        details: {
          type: 'Ring',
          infusion_slots: [{flags: ['Defense']}, {flags: ['Agony']}, {flags: ['Agony']}],
          infix_upgrade: {
            buff: {
              skill_id: 15755,
              description: '+32 Kraft\n+18 Wildheit\n+18 Präzision\n+5 Qual-Widerstand'
            },
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: '+10 Quallose Infusion',
        description: 'Doppelklicken, um auf einen freien quallosen Infusionsplatz anzuwenden. Wird von Konstrukteuren zur Herstellung stärkerer qualloser Infusionen verwendet.',
        type: 'UpgradeComponent',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 330,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['NoMysticForge', 'NoSalvage', 'NoSell'],
        restrictions: [],
        id: 49433,
        chat_link: '[&AgEZwQAA]',
        icon: 'https://render.guildwars2.com/file/AE7C224D02E7F16F19FAFAE1CC50B80E5DC80214/511838.png',
        details: {
          type: 'Default',
          flags: ['Trinket'],
          infusion_upgrade_flags: ['Agony'],
          infix_upgrade: {buff: {skill_id: 22109, description: '+10 Qual-Widerstand'}, attributes: []},
          suffix: ''
        }
      },
      {
        name: 'DeLanas Geldbörse',
        description: '<c=@flavor>\'Narren! Ihr habt sie entkommen lassen!\' – Separatisten-Hauptmann DeLana</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 413,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 67298,
        chat_link: '[&AgHiBgEA]',
        icon: 'https://render.guildwars2.com/file/0E011CD3AA34BB0C327D290830C7F10F0946307B/866837.png',
        details: {
          type: 'Accessory',
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            buff: {skill_id: 25444, description: '+32 Präzision\n+18 Wildheit\n+18 Kraft'},
            attributes: [{attribute: 'Precision', modifier: 78}, {
              attribute: 'Power',
              modifier: 56
            }, {attribute: 'CritDamage', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zhaitans Klaue',
        description: '<c=@flavor>\'Da kommt etwas Großes.\' – Hauptmann Vandem</c>',
        type: 'Trinket',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 413,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 67302,
        chat_link: '[&AgHmBgEA]',
        icon: 'https://render.guildwars2.com/file/DEB661FDCFBCE89380803B1AB3729ACBE526C824/866838.png',
        details: {
          type: 'Accessory',
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 25444, description: '+32 Präzision\n+18 Wildheit\n+18 Kraft'},
            attributes: [{attribute: 'Precision', modifier: 78}, {
              attribute: 'Power',
              modifier: 56
            }, {attribute: 'CritDamage', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Vielseitige einfache Infusion',
        description: 'Doppelklicken, um auf einen freien Infusionsplatz anzuwenden.',
        type: 'UpgradeComponent',
        level: 0,
        rarity: 'Masterwork',
        vendor_value: 16,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'AccountBindOnUse'],
        restrictions: [],
        id: 70852,
        chat_link: '[&AgHEFAEA]',
        icon: 'https://render.guildwars2.com/file/B4DBD92E63C8B924D0FE00F20AA1E9CE3F1C2436/511849.png',
        details: {
          type: 'Default',
          flags: ['ShortBow', 'HeavyArmor', 'LightArmor', 'Dagger', 'MediumArmor', 'Focus', 'Greatsword', 'Hammer', 'Trinket', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: ['Utility', 'Defense', 'Offense'],
          infix_upgrade: {buff: {skill_id: 22106, description: '+7 Qual-Widerstand'}, attributes: []},
          suffix: ''
        }
      },
      {
        name: 'Zojjas Doublet',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 109,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48079,
        chat_link: '[&AgHPuwAA]',
        icon: 'https://render.guildwars2.com/file/6E0C12721BAA5E343813DE9F2C7EFE064AECCE0A/699212.png',
        details: {
          type: 'Coat',
          weight_class: 'Light',
          defense: 330,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 141}, {
              attribute: 'Precision',
              modifier: 101
            }, {attribute: 'CritDamage', modifier: 101}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Maske',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 123,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48081,
        chat_link: '[&AgHRuwAA]',
        icon: 'https://render.guildwars2.com/file/AD7849A39265D6AA1C712ACD476E912E1EC30839/699210.png',
        details: {
          type: 'Helm',
          weight_class: 'Light',
          defense: 77,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 63}, {
              attribute: 'Precision',
              modifier: 45
            }, {attribute: 'CritDamage', modifier: 45}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Prototyp-Fraktalkondensator',
        description: '',
        type: 'Back',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 330,
        default_skin: 2377,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'NoSell', 'NotUpgradeable', 'Unique', 'AccountBindOnUse'],
        restrictions: [],
        id: 37029,
        chat_link: '[&AgGlkAAA]',
        icon: 'https://render.guildwars2.com/file/DC1D512B917D1C01B34BC5279ED12571730F7635/511805.png',
        details: {
          infusion_slots: [{flags: ['Offense']}],
          infix_upgrade: {
            buff: {skill_id: 15742, description: '+32 Kraft\n+18 Wildheit\n+18 Präzision'},
            attributes: [{attribute: 'Power', modifier: 31}, {
              attribute: 'Precision',
              modifier: 22
            }, {attribute: 'CritDamage', modifier: 22}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Epauletten',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 119,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48083,
        chat_link: '[&AgHTuwAA]',
        icon: 'https://render.guildwars2.com/file/0C4E1FEED2C75BC8F6F1D3D11C18303EEF573EED/699208.png',
        details: {
          type: 'Shoulders',
          weight_class: 'Light',
          defense: 77,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Zackenstab',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Weapon',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 10000,
        default_skin: 4244,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 46773,
        chat_link: '[&AgG1tgAA]',
        icon: 'https://render.guildwars2.com/file/F86C3CD9FA20D20EE920590517993211C6F9B99C/631650.png',
        details: {
          type: 'Staff',
          damage_type: 'Physical',
          min_power: 1034,
          max_power: 1166,
          defense: 0,
          infusion_slots: [{flags: ['Offense']}, {flags: ['Offense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 251}, {
              attribute: 'Precision',
              modifier: 179
            }, {attribute: 'CritDamage', modifier: 179}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Schuhwerk',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 115,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48078,
        chat_link: '[&AgHOuwAA]',
        icon: 'https://render.guildwars2.com/file/5C63AF3E5541CBBF54C8656DD8F5E274590BEA52/699213.png',
        details: {
          type: 'Boots',
          weight_class: 'Light',
          defense: 140,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Stiefelhose',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 110,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48082,
        chat_link: '[&AgHSuwAA]',
        icon: 'https://render.guildwars2.com/file/58F7090A0E429EA35DF1C9F36DBD281552CA12F9/699209.png',
        details: {
          type: 'Leggings',
          weight_class: 'Light',
          defense: 203,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 94}, {
              attribute: 'Precision',
              modifier: 67
            }, {attribute: 'CritDamage', modifier: 67}]
          },
          secondary_suffix_item_id: ''
        }
      },
      {
        name: 'Zojjas Handgelenkschutz',
        description: '<c=@flavor>Gefertigt im Stil des berühmten Genies der Asura, Zojja.</c>',
        type: 'Armor',
        level: 80,
        rarity: 'Ascended',
        vendor_value: 240,
        default_skin: 118,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'AccountBound', 'AccountBindOnUse'],
        restrictions: [],
        id: 48080,
        chat_link: '[&AgHQuwAA]',
        icon: 'https://render.guildwars2.com/file/5859B5CF97C0D394CF5CB5B3042775C6E6C1A1EB/699211.png',
        details: {
          type: 'Gloves',
          weight_class: 'Light',
          defense: 140,
          infusion_slots: [{flags: ['Defense']}],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 47}, {
              attribute: 'Precision',
              modifier: 34
            }, {attribute: 'CritDamage', modifier: 34}]
          },
          secondary_suffix_item_id: ''
        }
      }
    ]
    let equipment = [
      37029, 70852, 48079, 24836, 70852, 48078, 24836, 70852, 48080, 24836, 70852, 48081, 24836,
      70852, 48082, 24836, 70852, 48083, 24836, 70852, 67302, 70852, 67298, 70852, 75669, 70852,
      49433, 49433, 76024, 70852, 49433, 49433, 39273, 70852, 46773, 24618, 24615, 70852, 70852
    ]

    let equipmentArray = equipment.map(e => items.find(i => i.id === e))
    let attributes = parse(80, 'Elementalist', equipmentArray)

    expect(attributes.Power).to.equal(2485)
    expect(attributes.Toughness).to.equal(1000)
    expect(attributes.Vitality).to.equal(1000)
    expect(attributes.Precision).to.equal(2032)
    expect(attributes.Ferocity).to.equal(1060)
    expect(attributes.Armor).to.equal(1967)
    expect(attributes.ConditionDamage).to.equal(0)
    expect(attributes.ConditionDuration).to.equal(0)
    expect(attributes.HealingPower).to.equal(0)
    expect(attributes.BoonDuration).to.equal(0)
    expect(attributes.Concentration).to.equal(0)
    expect(attributes.Expertise).to.equal(0)
    expect(attributes.CritChance).to.be.closeTo(0.6014, 0.001)
    expect(attributes.CritDamage).to.be.closeTo(2.206, 0.001)
    expect(attributes.AgonyResistance).to.equal(138)
    expect(attributes.Health).to.equal(11645)
  })

  it('parses a level 4 engineer', () => {
    let items = [
      {
        name: 'Band des Helden',
        description: '<c=@flavor>\'Helden werden aus gewöhnlichen Menschen in außergewöhnlichen Umständen gemacht.\'</c>',
        type: 'Trinket',
        level: 0,
        rarity: 'Rare',
        vendor_value: 36,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoMysticForge', 'NoSalvage', 'NoSell', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 21044,
        chat_link: '[&AgE0UgAA]',
        icon: 'https://render.guildwars2.com/file/489C92790E5FAB0CBC6F4DF006929DE2496E7A7D/398647.png',
        details: {
          type: 'Ring',
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 2}, {
              attribute: 'Precision',
              modifier: 2
            }, {attribute: 'Toughness', modifier: 2}, {
              attribute: 'Vitality',
              modifier: 2
            }, {attribute: 'CritDamage', modifier: 2}, {
              attribute: 'Healing',
              modifier: 2
            }, {attribute: 'ConditionDamage', modifier: 2}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Leder-Stiefel',
        description: '',
        type: 'Armor',
        level: 0,
        rarity: 'Basic',
        vendor_value: 1,
        default_skin: 19,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoMysticForge', 'NoSalvage', 'NotUpgradeable', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 6470,
        chat_link: '[&AgFGGQAA]',
        icon: 'https://render.guildwars2.com/file/E6255C53689406A5E525394273ED04BEB3A0625E/61017.png',
        details: {
          type: 'Boots',
          weight_class: 'Medium',
          defense: 11,
          infusion_slots: [],
          infix_upgrade: {attributes: []},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Leder-Weste',
        description: '',
        type: 'Armor',
        level: 0,
        rarity: 'Basic',
        vendor_value: 1,
        default_skin: 6,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoMysticForge', 'NoSalvage', 'NotUpgradeable', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 6472,
        chat_link: '[&AgFIGQAA]',
        icon: 'https://render.guildwars2.com/file/D39FF60AFE11FF260A3F0B24484CA8BCB909E0B0/61015.png',
        details: {
          type: 'Coat',
          weight_class: 'Medium',
          defense: 22,
          infusion_slots: [],
          infix_upgrade: {attributes: []},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Leder-Beinkleid',
        description: '',
        type: 'Armor',
        level: 0,
        rarity: 'Basic',
        vendor_value: 1,
        default_skin: 5,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoMysticForge', 'NoSalvage', 'NotUpgradeable', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 6473,
        chat_link: '[&AgFJGQAA]',
        icon: 'https://render.guildwars2.com/file/5AEBD46A0ACC3C3CE1EBB60F0445322D14049171/61348.png',
        details: {
          type: 'Leggings',
          weight_class: 'Medium',
          defense: 15,
          infusion_slots: [],
          infix_upgrade: {attributes: []},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Alte Pistole',
        description: '',
        type: 'Weapon',
        level: 0,
        rarity: 'Basic',
        vendor_value: 1,
        default_skin: 3864,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoMysticForge', 'NoSalvage'],
        restrictions: [],
        id: 33350,
        chat_link: '[&AgFGggAA]',
        icon: 'https://render.guildwars2.com/file/B4BA303072A62C0AB73A0CBAF0632A38D8B4794A/66190.png',
        details: {
          type: 'Pistol',
          damage_type: 'Physical',
          min_power: 102,
          max_power: 120,
          defense: 0,
          infusion_slots: [],
          infix_upgrade: {attributes: []},
          secondary_suffix_item_id: ''
        }
      }]
    let equipment = [6472, 6470, 6473, 21044, 33350]

    let equipmentArray = equipment.map(e => items.find(i => i.id === e))
    let attributes = parse(4, 'Engineer', equipmentArray)

    expect(attributes.Power).to.equal(60)
    expect(attributes.Toughness).to.equal(60)
    expect(attributes.Vitality).to.equal(60)
    expect(attributes.Precision).to.equal(60)
    expect(attributes.Ferocity).to.equal(2)
    expect(attributes.Armor).to.equal(108)
    expect(attributes.ConditionDamage).to.equal(2)
    expect(attributes.ConditionDuration).to.equal(0)
    expect(attributes.HealingPower).to.equal(2)
    expect(attributes.BoonDuration).to.equal(0)
    expect(attributes.Concentration).to.equal(0)
    expect(attributes.Expertise).to.equal(0)
    expect(attributes.CritChance).to.be.closeTo(0.0542, 0.005)
    expect(attributes.CritDamage).to.be.closeTo(1.520, 0.005)
    expect(attributes.AgonyResistance).to.equal(0)
    expect(attributes.Health).to.equal(672)
  })

  it('parses a level 68 guardian', () => {
    let items = [
      {
        name: 'Berserkerhaftes Dunkelstahl-Schwert',
        description: '',
        type: 'Weapon',
        level: 60,
        rarity: 'Fine',
        vendor_value: 52,
        default_skin: 4090,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 15286,
        chat_link: '[&AgG2OwAA]',
        icon: 'https://render.guildwars2.com/file/D10679012504F6AD5829D1DF9F36303FE2EB46B4/64343.png',
        details: {
          type: 'Sword',
          damage_type: 'Physical',
          min_power: 483,
          max_power: 534,
          defense: 0,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 60}, {
              attribute: 'Precision',
              modifier: 43
            }, {attribute: 'CritDamage', modifier: 43}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Petition an den Arkanen Rat',
        description: '<c=@flavor>\'Unterzeichnet, um die Suspendierung von Dr. Bleent aus dem Arkanen Rat zu unterstützen.\'</c>',
        type: 'Trinket',
        level: 8,
        rarity: 'Fine',
        vendor_value: 17,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoSalvage', 'NoSell', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 23856,
        chat_link: '[&AgEwXQAA]',
        icon: 'https://render.guildwars2.com/file/21FF236A656E0BAA217C6E2E5AEBD2D1A6E3B7BC/66426.png',
        details: {
          type: 'Accessory',
          infusion_slots: [],
          infix_upgrade: {attributes: [{attribute: 'Power', modifier: 4}]},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Schleimtopf',
        description: '<c=@flavor>\'Achtung: Dicht verschlossen halten. Von einem gewissen Grad an kinetischer Erschütterung kann ausgegangen werden.\'</c>',
        type: 'Trinket',
        level: 5,
        rarity: 'Fine',
        vendor_value: 13,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoSalvage', 'NoSell', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 23868,
        chat_link: '[&AgE8XQAA]',
        icon: 'https://render.guildwars2.com/file/2801B02C780CA1F2B32D674039EAE6260C4133DB/455975.png',
        details: {
          type: 'Accessory',
          infusion_slots: [],
          infix_upgrade: {attributes: [{attribute: 'Vitality', modifier: 3}]},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Beachtliches Sigill des Feuers',
        description: 'Doppelklicken zur Anwendung auf eine Waffe.',
        type: 'UpgradeComponent',
        level: 39,
        rarity: 'Rare',
        vendor_value: 108,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24546,
        chat_link: '[&AgHiXwAA]',
        icon: 'https://render.guildwars2.com/file/2A086133CE143D2CAC09B12B015B78B4399D1C61/220972.png',
        details: {
          type: 'Sigil',
          flags: ['ShortBow', 'Dagger', 'Focus', 'Greatsword', 'Hammer', 'Harpoon', 'Mace', 'Pistol', 'Rifle', 'Scepter', 'Shield', 'Speargun', 'Axe', 'Staff', 'Sword', 'Torch', 'Trident', 'Warhorn', 'LongBow'],
          infusion_upgrade_flags: [],
          infix_upgrade: {
            buff: {
              skill_id: 9443,
              description: '50% Chance bei kritischen Treffern: Löst eine Flammenentladung mit Wirkungsbereichschaden aus (Radius: 240). <br><c=@reminder>(Erholzeit: 7 s)</c>'
            }, attributes: []
          },
          suffix: 'des Feuers'
        }
      }, {
        name: 'Überlegene Rune der Flammen-Legion',
        description: 'Doppelklicken, um auf ein Rüstungsteil anzuwenden.',
        type: 'UpgradeComponent',
        level: 60,
        rarity: 'Exotic',
        vendor_value: 216,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: [],
        restrictions: [],
        id: 24797,
        chat_link: '[&AgHdYAAA]',
        icon: 'https://render.guildwars2.com/file/776392A017E4DA16BF3DCA69292BB31ABA998010/220703.png',
        details: {
          type: 'Rune',
          flags: ['HeavyArmor', 'LightArmor', 'MediumArmor'],
          infusion_upgrade_flags: [],
          bonuses: ['+25 Kraft', '+10% Brenndauer', '+50 Kraft', '25% Chance, 1 Sekunde Brennen zuzufügen, wenn Ihr getroffen werdet. <c=@reminder>(Erholzeit: 10 s)</c>', '+100 Kraft', '+20% Brenndauer; +7% Schaden an brennenden Gegnern.'],
          infix_upgrade: {attributes: []},
          suffix: 'der Flammen-Legion'
        }
      }, {
        name: 'Rucksack-Trageriemen der Vorbereitung',
        description: 'Die komfortabelsten Trageriemen, die es gibt.',
        type: 'Back',
        level: 0,
        rarity: 'Masterwork',
        vendor_value: 1,
        default_skin: 2327,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'NoMysticForge', 'NoSalvage', 'NoSell', 'NotUpgradeable', 'AccountBindOnUse'],
        restrictions: [],
        id: 63717,
        chat_link: '[&AgHl+AAA]',
        icon: 'https://render.guildwars2.com/file/BECDA349B3A9D13BA312452C33E4EF21492CB2EB/543792.png',
        details: {
          infusion_slots: [],
          infix_upgrade: {attributes: [{attribute: 'Power', modifier: 1}]},
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Mächtiges Amulett',
        description: '',
        type: 'Trinket',
        level: 46,
        rarity: 'Rare',
        vendor_value: 252,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoSalvage', 'NoSell', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 64141,
        chat_link: '[&AgGN+gAA]',
        icon: 'https://render.guildwars2.com/file/4D9C6F58C20F052359BA5D1D10B9E4B97ED5F012/66791.png',
        details: {
          type: 'Amulet',
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'Precision', modifier: 49}, {
              attribute: 'Power',
              modifier: 35
            }]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Mächtiger Ring',
        description: '',
        type: 'Trinket',
        level: 47,
        rarity: 'Rare',
        vendor_value: 189,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['HideSuffix', 'NoSalvage', 'NoSell', 'SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: [],
        id: 64142,
        chat_link: '[&AgGO+gAA]',
        icon: 'https://render.guildwars2.com/file/0A402568104F5BE5BC644665653302005F6266CF/66800.png',
        details: {
          type: 'Ring',
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'Precision', modifier: 38}, {
              attribute: 'Power',
              modifier: 27
            }]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulendes Galvanisiertes Beinkleid',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 1875,
        default_skin: 295,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3613,
        chat_link: '[&AgEdDgAA]',
        icon: 'https://render.guildwars2.com/file/0ECABC643F6ADEBCD1EF44C722679114663BB1F9/61161.png',
        details: {
          type: 'Leggings',
          weight_class: 'Heavy',
          defense: 144,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 53}, {
              attribute: 'Power',
              modifier: 38
            }, {attribute: 'Vitality', modifier: 38}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulende Galvanisierte Epauletten',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 1250,
        default_skin: 279,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3614,
        chat_link: '[&AgEeDgAA]',
        icon: 'https://render.guildwars2.com/file/E6006AB477F43FA6E33049227DD5E74762F817E9/61162.png',
        details: {
          type: 'Shoulders',
          weight_class: 'Heavy',
          defense: 72,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 26}, {
              attribute: 'Power',
              modifier: 19
            }, {attribute: 'Vitality', modifier: 19}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulendes Galvanisiertes Wams',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 2500,
        default_skin: 301,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3610,
        chat_link: '[&AgEaDgAA]',
        icon: 'https://render.guildwars2.com/file/3817C5DEBB2945A97E7A1BE4B0524149C3A078DD/61158.png',
        details: {
          type: 'Coat',
          weight_class: 'Heavy',
          defense: 216,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 79}, {
              attribute: 'Power',
              modifier: 56
            }, {attribute: 'Vitality', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulende Galvanisierte Stiefel',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 1000,
        default_skin: 310,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3609,
        chat_link: '[&AgEZDgAA]',
        icon: 'https://render.guildwars2.com/file/452CBFE8D50D016C05A7BF1EEA420B3DEFC4C068/61157.png',
        details: {
          type: 'Boots',
          weight_class: 'Heavy',
          defense: 108,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 26}, {
              attribute: 'Power',
              modifier: 19
            }, {attribute: 'Vitality', modifier: 19}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulende Galvanisierte Handschuhe',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 1000,
        default_skin: 293,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3611,
        chat_link: '[&AgEbDgAA]',
        icon: 'https://render.guildwars2.com/file/B0DA76724A21077F03130B5F437C12E7215939B0/61159.png',
        details: {
          type: 'Gloves',
          weight_class: 'Heavy',
          defense: 108,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 26}, {
              attribute: 'Power',
              modifier: 19
            }, {attribute: 'Vitality', modifier: 19}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Faulender Galvanisierter Helm',
        type: 'Armor',
        level: 60,
        rarity: 'Rare',
        vendor_value: 1250,
        default_skin: 284,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['SoulbindOnAcquire', 'SoulBindOnUse'],
        restrictions: ['Asura'],
        id: 3612,
        chat_link: '[&AgEcDgAA]',
        icon: 'https://render.guildwars2.com/file/459A97D1233CAC28DB48B7DAE17BA372B40D7337/61160.png',
        details: {
          type: 'Helm',
          weight_class: 'Heavy',
          defense: 72,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 35}, {
              attribute: 'Power',
              modifier: 25
            }, {attribute: 'Vitality', modifier: 25}]
          },
          secondary_suffix_item_id: ''
        }
      }]
    let equipment = [
      63717, 3610, 24797, 3609, 24797, 3611, 24797, 3612, 24797, 3613,
      24797, 3614, 24797, 23868, 23856, 64142, 64141, 15286, 24546
    ]

    let equipmentArray = equipment.map(e => items.find(i => i.id === e))
    let attributes = parse(68, 'Guardian', equipmentArray)

    expect(attributes.Power).to.equal(1217)
    expect(attributes.Toughness).to.equal(739)
    expect(attributes.Vitality).to.equal(918)
    expect(attributes.Precision).to.equal(869)
    expect(attributes.Ferocity).to.equal(43)
    expect(attributes.Armor).to.equal(1459)
    expect(attributes.ConditionDamage).to.equal(245)
    expect(attributes.ConditionDuration).to.equal(0)
    expect(attributes.HealingPower).to.equal(0)
    expect(attributes.BoonDuration).to.equal(0)
    expect(attributes.Concentration).to.equal(0)
    expect(attributes.Expertise).to.equal(0)
    expect(attributes.CritChance).to.be.closeTo(0.122, 0.005)
    expect(attributes.CritDamage).to.be.closeTo(1.537, 0.005)
    expect(attributes.AgonyResistance).to.equal(0)
    expect(attributes.Health).to.equal(10362)
  })

  it('parses a level 80 necromancer', () => {
    let items = [
      {
        name: 'Vigilant Pearl Carver',
        type: 'Weapon',
        level: 80,
        rarity: 'Exotic',
        vendor_value: 264,
        default_skin: 4097,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'SoulBindOnUse'],
        restrictions: [],
        id: 77015,
        chat_link: '[&AgHXLAEA]',
        icon: 'https://render.guildwars2.com/file/3EB97D4B966B1848CF6A2B4A1C1D736BF4C3E3B1/67756.png',
        details: {
          type: 'Dagger',
          damage_type: 'Physical',
          min_power: 924,
          max_power: 981,
          defense: 0,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'Power', modifier: 102}, {
              attribute: 'Toughness',
              modifier: 102
            }, {attribute: 'BoonDuration', modifier: 56}, {attribute: 'ConditionDuration', modifier: 56}]
          },
          secondary_suffix_item_id: ''
        }
      }, {
        name: 'Viper\'s Pearl Stinger',
        type: 'Weapon',
        level: 80,
        rarity: 'Exotic',
        vendor_value: 396,
        default_skin: 4045,
        game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
        flags: ['AccountBound', 'SoulBindOnUse'],
        restrictions: [],
        id: 76287,
        chat_link: '[&AgH/KQEA]',
        icon: 'https://render.guildwars2.com/file/92E2236F9ABA9A04EBC12F7017776D02A6371858/67748.png',
        details: {
          type: 'LongBow',
          damage_type: 'Physical',
          min_power: 920,
          max_power: 1080,
          defense: 0,
          infusion_slots: [],
          infix_upgrade: {
            attributes: [{attribute: 'ConditionDamage', modifier: 205}, {
              attribute: 'Power',
              modifier: 205
            }, {attribute: 'ConditionDuration', modifier: 113}, {attribute: 'Precision', modifier: 113}]
          },
          secondary_suffix_item_id: ''
        }
      }]
    let equipment = [76287, 77015]

    let equipmentArray = equipment.map(e => items.find(i => i.id === e))
    let attributes = parse(80, 'Necromancer', equipmentArray)

    expect(attributes.Power).to.equal(1307)
    expect(attributes.Toughness).to.equal(1102)
    expect(attributes.Vitality).to.equal(1000)
    expect(attributes.Precision).to.equal(1113)
    expect(attributes.Ferocity).to.equal(0)
    expect(attributes.Armor).to.equal(1102)
    expect(attributes.ConditionDamage).to.equal(205)
    expect(attributes.ConditionDuration).to.be.closeTo(0.1126, 0.001)
    expect(attributes.HealingPower).to.equal(0)
    expect(attributes.BoonDuration).to.be.closeTo(0.0373, 0.001)
    expect(attributes.Concentration).to.equal(56)
    expect(attributes.Expertise).to.equal(169)
    expect(attributes.CritChance).to.be.closeTo(0.0938, 0.001)
    expect(attributes.CritDamage).to.be.closeTo(1.5, 0.001)
    expect(attributes.AgonyResistance).to.equal(0)
    expect(attributes.Health).to.equal(19212)
  })
})
