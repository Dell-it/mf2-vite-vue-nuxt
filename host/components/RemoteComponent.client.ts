import {loadRemote, getInstance} from "@module-federation/enhanced/runtime";
import {init} from "@module-federation/enhanced/runtime";
import {configuration} from "~/module-federation";

type ESModule<T = any> = {
    default: T
}

const inst = getInstance()

if (!inst) {
    init(configuration)
}

const module = await loadRemote<ESModule>("manifest/remote-component")


export default module?.default;