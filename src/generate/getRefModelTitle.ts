import { Schema } from '../interfaces';
import { getRef } from '../utils';
import typeMap from './typeMap';

export default (schema: Schema) => {
    let targetName: string = '_Error_';
    const ref = getRef(schema);
    if (schema.title) {
        targetName = schema.title;
    } else if (ref) {
        targetName = ref.substr(ref.lastIndexOf('/') + 1);
        targetName = targetName.replace('models.', '');
    }
    if (Object.keys(typeMap).includes(targetName)) {
        return typeMap[targetName]
    }
    if (targetName.includes('Record<')) {
        return targetName;
    }
    return targetName.replace(/(«|»|,|\.|_|-)([a-zA-Z]?)/g, (searchValue, replaceValue) => {
        return searchValue.substring(1).toUpperCase();
    });
};

// 应对特殊情况
// {
//   type: 'array',
//   items: { '$ref': '#/definitions/Map«string,object»' }
// }
export const getSpecialTitle = (schema: Schema) => {
    let targetName: string = '_Error_';
    const ref = getRef(schema);
    let newName ='any';
    if (ref) {
        targetName = ref.substr(ref.lastIndexOf('/') + 1);
        if (targetName.indexOf('Map') === 0) {
            const arr = targetName.split(/(«|»|,)/g);
            arr.forEach((i, index) => {
                if (index != 0) {
                    if (Object.keys(typeMap).includes(i)) {
                        i = typeMap[targetName]
                    }
                }
            })
            newName = arr.join('')
            newName = newName.replace('Map', 'Record').replace('«', '<').replace('»', '>');
        }
    }
    return newName;
};