import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        file: 'src/main.dist.js',
        format: 'cjs'
    },
    plugins: [buble()]
}