export interface OriginalDataGeneric{
    $name?:string;
    $commit?:(method:string, ...args:[any])=>void;
}