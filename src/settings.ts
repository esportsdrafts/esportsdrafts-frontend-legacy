
export const VERSION: string = process.env.VERSION || 'unset';
export const BASE_URL: string = process.env.BASE_URL || 'efantasy.dev';

console.log('--- APP SETTINGS ---')
console.log('VERSION: ' + VERSION);
console.log('BASE_URL: ' + BASE_URL);
console.log('---');
