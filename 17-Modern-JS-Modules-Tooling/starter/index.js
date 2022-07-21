var $fgKEp$lodashes = require("lodash-es");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

if (null) null.accept();
const $650934f729b0bf11$var$state = {
    card: [
        {
            product: "bread",
            quantity: 3
        },
        {
            product: "pizza",
            quantity: 6
        }, 
    ],
    user: {
        loggedIn: true
    }
};
const $650934f729b0bf11$var$stateClone = (0, ($parcel$interopDefault($fgKEp$lodashes)))($650934f729b0bf11$var$state);
$650934f729b0bf11$var$state.user.loggedIn = false;
console.log($650934f729b0bf11$var$state);
console.log($650934f729b0bf11$var$stateClone);


//# sourceMappingURL=index.js.map
