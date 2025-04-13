import {ComponentTemplate} from "./prototype/ComponentTemplate";
import {RenderGeneric} from "./generic/RenderGeneric";
import {PluginGeneric} from "./generic/PluginGeneric";

/**
 * Here is the template class for render component!
 */
export class Component extends ComponentTemplate{
    constructor(config:{
        name:string,
        template:string,
        mode?:string,
        boxStyle?: string,
        props?:{} | string[],
        data?:{},
        computed?:{},
        methods?:{},
        watcher?:{},
        beforeRender?:()=>void,
        afterRender?:()=>void,
    }) {
        super(config);
    }
}

/**
 * Here is the template class for render component!
 */
export abstract class AbstractRenderJS implements RenderGeneric{

    addTag(component: Component | Component[]): void {
    }

    registerElements(name: string, func: any): void {
    }
}

export abstract class AbstractPlugin implements PluginGeneric{
    plugin(render: AbstractRenderJS): void {
    }
}