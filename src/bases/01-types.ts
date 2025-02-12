export let name: string = 'Camilo';
export const age: number = 32;
export const isValid: boolean = true;

name = 'Javier';

export const templateString = `Esto es un string
multilínea
que puede tener
" dobles
' simple
iyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleans: ${ isValid }`;

console.log( templateString );
