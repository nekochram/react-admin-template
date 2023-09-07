import { INCREASE,DECREASE } from "../constant";
const num = 1

const countReducer=(state=num,action)=>{
    const {type,data}=action
    switch (type) {
        case INCREASE:
            return state + Number(data);
        case DECREASE:
            return state - Number(data);
        default:
            return state;
    }
}
export default countReducer