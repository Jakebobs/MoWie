import { action} from 'mobx';

export const resolvePromise = action(function resolvePromise(prms, promiseState) { 

    promiseState.data= null;
    promiseState.error= null;
  
    if (!prms) {
        promiseState.promise = null;
        return;
    }

    promiseState.promise= prms;

    const resolvedACB = action(function(data) {
        if (promiseState.promise === prms) { // compare promise object refrence
            promiseState.data = data;
            promiseState.title = data.title;
        }
    })

    const rejectedACB = action(function(error) {
        if (promiseState.promise === prms) { 
            promiseState.error = error;
        }
    })

    prms.then(resolvedACB).catch(rejectedACB)
})