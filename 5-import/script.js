//5-1 Import

import {hello} from './functions.js';
hello()

import {showError} from './functions.js';
showError('erreur')

import anonyme from './functions.js';
anonyme()

// 5-2 Export
const [a, b] = [7, 9] 
export * from './math.js';