import * as path from 'path';

export default function rootPath() {
    return process.cwd();
}

export function pathToDataFile() {
    return path.join(rootPath(), 'data', 'products.json');
}