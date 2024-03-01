# Vite

## vite 和 webpack 区别

1. Vite 本质不是对标 webpack，webpack 是不预设场景的，而 vite 是预设 Web 场景的。
2. 这样导致 webpack 配置很复杂，而 vite 是开箱即用
3. vite 是基于浏览器原生 ES imports 的开发服务器，利用浏览器去解析 import，同时把浏览器不识别的语法转换成浏览器识别的语法。
4. vite 能基于 ESM 实现性能最优的热更新
