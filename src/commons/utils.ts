
export function extend<T>(obj: T, attrs: Partial<T>, overrideObject = false): T {
    let res: T = { ...obj };
    if (!attrs) return res;
    for (const attr in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
            const val = attrs[attr];
            if (overrideObject) obj[attr] = val;
            else res[attr] = val;
        }
    }

    return res;
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isValue(val: any): boolean {
    return val !== null && val !== undefined;
}

export function is<T>(val: any, ...properties: (keyof T)[]): val is T {
    for (const property of properties) {
        if (!Object.prototype.hasOwnProperty.call(val, property)) return false;
    }
    return true;
}

export enum MouseButton {
    LEFT = 0,
    MIDDLE,
    RIGHT
}

interface InteractionOptions {
    start: (event: MouseEvent) => void;
    move: (event: MouseEvent) => void;
    finish: (event: MouseEvent) => void;
    button?: MouseButton;
    cursor?: string;
    root?: HTMLElement;
}

export interface Point {
    x: number,
    y: number
}