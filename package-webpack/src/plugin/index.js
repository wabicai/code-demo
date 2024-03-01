
class TestPlugin {
    constructor() {
        console.error('TestPlugin constructor');
    }
    apply(compiler) {
        console.error('TestPlugin apply');
        // 非常多的勾子，emit/afterEmit/compilation/afterCompile/afterPlugins/afterResolvers/entryOption/normalModuleFactory
        compiler.hooks.emit.tap('TestPlugin', (compilation) => {
            console.error('TestPlugin emit');
        });
    }
}
module.exports = TestPlugin;