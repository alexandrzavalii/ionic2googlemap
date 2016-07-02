// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/c21a2d49821b1a7d882b85e72255cdcf1532d1a3/google-maps/google-maps.d.ts
declare namespace GoogleMapsLoader {
    interface CallBack {
        (google: { maps: { Map: google.maps.Map } }): void;
    }
    export var KEY: string;
    export var CLIENT: string;
    export var VERSION: string;
    export var SENSOR: boolean;
    export var LIBRARIES: Array<string>;
    export var LANGUAGE: string;
    export function release(callBack: Function): void;
    export function onLoad(callBack?: CallBack): void;
    export function load(callBack?: CallBack): void;
    export function isLoaded(): boolean;

}
declare module 'google-maps' {
    export = GoogleMapsLoader;
}