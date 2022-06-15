import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import tankSkills from './tanks.js';

export const pldSkills =
[
    ...tankSkills,
    {
        skillId: 'sentinel',
        name: 'Sentinel',
        imgFile: skillIcons['sentinel'].icon,
        imgColor: skillIcons['sentinel'].color,
        level: 38,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 30,
                duration: 15
            }
        ]
    },
    {
        skillId: 'cover',
        name: 'Cover',
        imgFile: skillIcons['cover'].icon,
        imgColor: skillIcons['cover'].color,
        level: 45,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 12
            }
        ]
    },
    {
        skillId: 'hallowed_ground',
        name: 'Hallowed Ground',
        imgFile: skillIcons['hallowed_ground'].icon,
        imgColor: skillIcons['hallowed_ground'].color,
        level: 50,
        cooldown: 420,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 10
            }
        ]
    },
    /*{
        skillId: 'divine_veil',
        name: 'Divine Veil',
        imgFile: skillIcons['divine_veil'].icon,
        imgColor: skillIcons['divine_veil'].color,
        level: 56,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 30
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 30
            }
        ]
    },*/
    {
        skillId: 'intervention',
        name: 'Intervention',
        imgFile: skillIcons['intervention'].icon,
        imgColor: skillIcons['intervention'].color,
        level: 62,
        cooldown: 10,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 4
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 8
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 250,
                duration: 12
            }
        ]
    },
    {
        skillId: 'passage_of_arms',
        name: 'Passage of Arms',
        imgFile: skillIcons['passage_of_arms'].icon,
        imgColor: skillIcons['passage_of_arms'].color,
        level: 70,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.BLOCK,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 18
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 18
            }
        ]
    },
    {
        skillId: 'holy_sheltron',
        name: 'Holy Sheltron',
        imgFile: skillIcons['holy_sheltron'].icon,
        imgColor: skillIcons['holy_sheltron'].color,
        level: 82,
        cooldown: 5,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 4
            },
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.BLOCK,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 8
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 250,
                duration: 12
            }
        ]
    },
];

export default pldSkills;