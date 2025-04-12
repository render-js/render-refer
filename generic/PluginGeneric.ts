import {AbstractRenderJS} from "../index";

export interface PluginGeneric{
    plugin(render:AbstractRenderJS):void;
}