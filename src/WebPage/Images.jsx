function importAll(r) {
    return r.keys().map(r);
}


export const srcImages = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));