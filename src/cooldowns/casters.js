import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const casterSkills =
[
    {
        skillId: 'addle',
        name: 'Addle',
        imgFile: skillIcons['addle'].icon,
        imgColor: skillIcons['addle'].color,
        level: 8,
        cooldown: 90,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.ENEMY,
                damageType: damageTypes.PHYS,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 10
            },
        ]
    },
    {
        skillId: 'swiftcast',
        name: "Swiftcast",
        imgFile: skillIcons['swiftcast'].icon,
        imgColor: skillIcons['swiftcast'].color,
        level: 18,
        cooldown: 60,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 10,
                note: "Next spell is cast immediately"
            }
        ]
    },
    {
        skillId: 'surecast',
        name: "Surecast",
        imgFile: skillIcons['surecast'].icon,
        imgColor: skillIcons['surecast'].color,
        level: 44,
        cooldown: 120,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 6,
                note: "Prevents most knockback and draw-in effects"
            }
        ]
    }
];

export default casterSkills;