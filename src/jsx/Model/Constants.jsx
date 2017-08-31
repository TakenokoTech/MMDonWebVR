import {flatteningObj, Vector3} from '../Utils/Util.jsx';

const DYNAMIC_BODY = {
    mass:100,
    linearDamping: 0.01,
    angularDamping: 0.0001
};

export default {
    DYNAMIC_BODY: flatteningObj(DYNAMIC_BODY)
};