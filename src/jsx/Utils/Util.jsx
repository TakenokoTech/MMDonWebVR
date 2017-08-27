import lodash from 'lodash';

/** */
function Vector3(x, y ,z) {
    return [x, y, z].join(' ');
}

/** */
function flatteningObj(obj, str = "") {
    _.each(obj, (v, k) => {
        str += (k + ":" + v + "; ");
    });
    return str;
}

export {
    Vector3,
    flatteningObj
};
