const initialSate = {
    amount: 0,
};

export default (state = initialSate, action) => {
    if( action.type === 'DEPOSIT_MONEY'){
        return{
            ...state,
            amount: state.amount + 10
        }
    }

    if( action.type === 'WITHDRAW_MONEY'){
        return{
            ...state,
            amount: state.amount - 10
        }
    }

    return state
}

export const selectCurrentAmount = (state) => {
    return state.amountReducer.amount;
}