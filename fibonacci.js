// Sylvia Boonabaana and Samuel Okwalinga

module.exports = function(n){
var a=0, b=1;
for(i=0; i<n; i++){
    c=a+b;
    a=b; 
    b=c;
}
return a;
}


 