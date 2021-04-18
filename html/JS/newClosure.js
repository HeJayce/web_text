function myModule() {
    var msg = 'Jayce'

    function f1() {
        console.log('name:' + msg.toUpperCase())
    }

    function f2() {
        console.log('name:' + msg.toLowerCase())
    }
    return {
        f1:f1,
        f2:f2
    }
}
