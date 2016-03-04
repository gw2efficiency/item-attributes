/* eslint-env node, mocha */
const expect = require('chai').expect
const fromString = require('../src/fromString.js')

describe('parsing attribute from strings', () => {
  let expectedAttributes = {
    AgonyResistance: 95,
    BoonDuration: 95,
    ConditionDamage: 100,
    ConditionDuration: 95,
    CritDamage: 100,
    Healing: 100,
    Power: 100,
    Precision: 100,
    Toughness: 100,
    Vitality: 100
  }

  it('can parse english strings', () => {
    let string = `+90 Power
                  +5 Power
                  +95 Toughness
                  +95 Vitality
                  +95 Precision
                  +95 Ferocity
                  +95 Condition Damage
                  +95% Condition Duration
                  +95 Healing
                  +95% Boon Duration
                  +95 Agony Resistance
                  +5 to All Stats`
    expect(fromString(string)).to.deep.equal(expectedAttributes)
  })

  it('can parse german strings', () => {
    let string = `+90 Kraft
                  +5 Kraft
                  +95 Zähigkeit
                  +95 Vitalität
                  +95 Präzision
                  +95 Wildheit
                  +95 Zustandsschaden
                  +95% Zustandsdauer
                  +45 Heilung
                  +50 Heilkraft
                  +95% Segensdauer
                  +95 Qual-Widerstand
                  +5 auf alle Werte`
    expect(fromString(string)).to.deep.equal(expectedAttributes)
  })

  it('can parse french strings', () => {
    let string = `Puissance +90
                  Puissance +5
                  Robustesse +95
                  Vitalité +95
                  Précision +95
                  Férocité +95
                  Dégâts par altération +95
                  Durée d'altération +95%
                  Guérison +95
                  Durée d'avantage +95%
                  Résistance à l'agonie +95
                  Toutes les statistiques +5`
    expect(fromString(string)).to.deep.equal(expectedAttributes)
  })

  it('can parse spanish strings', () => {
    let string = `+90 Potencia
                  +5 Potencia
                  +95 Dureza
                  +95 Vitalidad
                  +95 Precisión
                  +95 Ferocidad
                  +95 Daño de Condición
                  +95% Duración de condición
                  +95 Poder de Curación
                  +95% Duración de la Bendición
                  +95 Resistencia a la Agonía
                  +5 a todas las estadísticas`
    expect(fromString(string)).to.deep.equal(expectedAttributes)
  })

  it('doesn\'t include non-existing attribute', () => {
    let string = '+10 Precisión, +5% Duración de condición'
    expect(fromString(string)).to.deep.equal({Precision: 10, ConditionDuration: 5})
  })
})
