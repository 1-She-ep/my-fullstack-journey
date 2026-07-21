function throttle(func, ms) {
    let isThrottle = false
    ,saveArgs,saveThis

    function wrapper(){
        if (isThrottle){
            saveArgs = arguments
            saveThis = this
            return 
        }
        isThrottle = true
        func.apply(this,arguments)

        setTimeout(function(){
            isThrottle = false

            if(saveArgs){
                wrapper.apply(saveThis,saveArgs)
                saveThis = saveArgs = null
            }
            
        },ms)
        
    }
    return wrapper
}