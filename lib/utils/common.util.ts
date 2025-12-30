import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function clone<T>(a: T): T {
    return JSON.parse(JSON.stringify(a));
}

export function cn(...input: ClassValue[]): string {
    return twMerge(clsx(...input));
}