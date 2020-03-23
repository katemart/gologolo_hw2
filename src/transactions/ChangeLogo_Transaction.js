import {jsTPS_Transaction} from './jsTPS'

class ChangeLogo_Transaction extends jsTPS_Transaction {
    constructor(initChangeLogoCallback, initOldLogo, initNewLogo) {
        super();
        console.log("CREATING NEW TRANS OBJ")
        console.debug({initOldLogo, initNewLogo})
        this.changeLogoCallback = initChangeLogoCallback;
        this.oldLogo = initOldLogo;
        this.newLogo = initNewLogo;
    }

    doTransaction() {
        this.changeLogoCallback(this.newLogo);
    }

    undoTransaction() {
        this.changeLogoCallback(this.oldLogo);
    }
}

export default ChangeLogo_Transaction