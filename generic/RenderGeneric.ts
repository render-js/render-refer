import {Component} from "../index";

export interface RenderGeneric{

    /**
     * You can use the method to register your single component or an array of components.
     * @param component
     */
    addTag(component:Component | Component[]):void;

    /**
     * Use the func to register some tool-functions to the windows object.
     * @param name
     * @param func
     * @return void
     */
    registerElements(name:string, func:any):void;
}