"use strict";
class Upgrade {
    name;
    description;
    cost;
    upgradeFX;
    makeHTMLElement() {
        return "";
    }
}
var Units;
(function (Units) {
    Units[Units["Shepherd"] = 0] = "Shepherd";
    Units[Units["Shearer"] = 1] = "Shearer";
    Units[Units["Knitter"] = 2] = "Knitter";
    Units[Units["Babysitter"] = 3] = "Babysitter";
    Units[Units["PizzaGuy"] = 4] = "PizzaGuy";
})(Units || (Units = {}));
