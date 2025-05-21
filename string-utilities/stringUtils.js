function capitalize(str){
    if (typeof str !== 'string') {
        str = String(str || '');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function reverse(str){
    if (typeof str !== 'string') {
        str = String(str || '');
    }
    return str.split('').reverse().join('');
};

function contains(str, substr){
    if (!str || !substr) {
        return false;
    }
    return str.includes(substr);
};

module.exports = {capitalize, reverse, contains};