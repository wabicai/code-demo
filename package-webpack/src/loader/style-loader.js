module.exports = function (source) {
    console.error('style-loader', source);
    return `
        const style = document.createElement('style');
        style.innerHTML = '${source}';
        document.head.appendChild(style);
    `;
}