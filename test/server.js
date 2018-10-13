"use strict";

// import requestsuper from 'supertest';
// import app from '../app.js';

//用作测试
function add(i) {
    return i + 1;
}

describe("基础测试用例", function () {
    it("测试函数点赞", function () {
        expect(add(1)).toBe(2);
    });
});

// function request() {
//     return requestsuper(app.listen())
// }
// 
// 
// describe('测试接口路由', function () {
//     it('点赞', function (done) {
//         request()
//             .get('/api/update')
//             .expect(200)
//             .end(function (err, res) {
//                 if (res.data == 1) return done(err);
//                 done();
//             })
//     });

// })
