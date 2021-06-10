const INITIAL_STATE = {
    username:'',
    user:{},
    token:'',
    userverify:true,
    transactionsLoader:false,
    refererLoader:false,
    activitiesLoader:false
}
export default (state= INITIAL_STATE, action:any) => {
 switch (action.type) {
     case 'userLoggedIn_update':       
     return {...state, [action.payload.prop] : [action.payload.value ]}         
         break;
     case 'userverify_fail':
         return {...state, userverify:false}
          break;
     break;
     case 'userverify_success': 
        return {...state,userverify:true, username:action.payload.data.username,user:action.payload.data,token:action.payload.token}
        break;
    case 'set_transactions':
        return  {...state,transactionsLoader:true,transactions:action.payload}
    case 'set_referals':
        return  {...state,refererLoader:true,referals:action.payload}    
    case 'set_deposits':
        return {...state,deposits:action.payload}    
        break;
    case 'set_transactionsLoader':
        return {...state,transactionsLoader:false}    
    case 'set_refererLoader':
        return {...state,refererLoader:false}    
    case 'set_withdrawals':    
        return {...state,withdrawals:action.payload}
    case 'set_activities' :     
        return  {...state,activitiesLoader:true,activities:action.payload}
     default:
         return state;
 }
}