export default (targetName: string) => {
    let name = targetName;
    if (name.indexOf('Map')>-1) {
        name = name.substring(1, name.length - 1).replace('Map', 'Record').replace('«', '<').replace('»', '>')
    } else {
        name = targetName.replace(/(«|»?)/g, '');
    }
    return name
};
