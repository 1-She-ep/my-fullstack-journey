function debounce(fuc,ms) {
    return function(){
        let timeout
        clearTimeout(timeout)
        timeout = setTimeout(()=>fuc.apply(this,arguments),ms)
    }
}