import {recipe} from 'features';
import {createLogicMiddleware} from 'redux-logic';

const arrLogic = [
    ...recipe.logic
];

const logicDeps = {
    // none needed
};

export default createLogicMiddleware(arrLogic, logicDeps);