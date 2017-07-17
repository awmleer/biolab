import {isDevMode} from "@angular/core"

export const CONFIG={
    apiUrl:isDevMode()?'/api':'http://118.89.186.130'
};
