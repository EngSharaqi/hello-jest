function username(name){
    if(name === undefined){
        return 'UnKnown';
    }

    if(name.startsWith('1')){
        return name.substring(1)
    }

    if(name.startsWith('_') || name.endsWith('_')){
        return name.substring(1, name.length - 1);
    }

    if(name.startsWith('') || name.endsWith('')){
        return name.trim();
    }

    return name;
};

module.exports = username;