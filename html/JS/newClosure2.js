(function (window){
    var msg = 'Jayce'

    function f1() {
        console.log('name:' + msg.toUpperCase())
    }

    function f2() {
        console.log('name:' + msg.toLowerCase())
    }
    window.module2 = {
        f1:f1,
        f2:f2
    }

})(window)
