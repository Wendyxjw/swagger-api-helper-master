import { Definitions } from '../interfaces';
import renderRefModelTitle from './getRefModelTitle';

/**
 * 获取definitions的key
 */
export default (definitions: Definitions): string[] => {
    const interfaceNames:string[]=[]
    const definitionKeys = Object.keys(definitions);
    definitionKeys.forEach(key => {
        const interfaceName = renderRefModelTitle({
            ...definitions[key],
            title: key,
        });
        interfaceNames.push(interfaceName)
    });
    return interfaceNames;
};
