function Multi() {
    var s1 = document.getElementById('num1').value;
    var s2 = document.getElementById('num2').value;
    var s3 = document.getElementById('num3').value;

    function mul(s1) {
        return function(s2) {
            return function(s3) {
                document.getElementById('res').innerHTML = (s1 * s2 * s3);
            }
        }
    }
    // document.getElementById('res').innerHTML = mul(a)(b)(c);
    mul(s1)(s2)(s3)

}
