function saturdayFun(){
    return "This Saturday, I want to bathe my dog!"

}

function mondayWork(){
    return "This Monday, I will work from home."
}

function wrapAdjective(adj = '*'){
    return function(adjective = 'a hard worker'){
        return `You are ${adj}${adjective}${adj}!`
    }
}