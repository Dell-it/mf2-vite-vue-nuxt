import {loadRemote, getInstance} from "@module-federation/enhanced/runtime";
import {init} from "@module-federation/enhanced/runtime";
import {configuration} from "~/module-federation.config";

type ESModule<T = any> = {
    default: T
}

const inst = getInstance()

if (!inst) {
    init(configuration)
}

const module = await loadRemote<ESModule>("manifest/app").then((v) => {
    console.log('V:', v);
    return v?.default?.app

}).catch((e) => {
    console.log('E:', e);
    return {render: () => h('div', 'Remote component error')}
})


export default module;