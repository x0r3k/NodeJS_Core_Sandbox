const assert = require('assert');

// try {
//     assert.deepStrictEqual([1,2,3, [1,2]], [1,2,'3', [1,2]]);
// } catch (error) {
//     console.log(error);
// }

try {
    assert.deepStrictEqual({a: 1, b: 2}, {b: 2, a: 1});
} catch (error) {
    console.log(error);
}