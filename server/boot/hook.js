// module.exports = function (server) {
//   var remotes = server.remotes();
//   var start = new Date;
//   console.log(start, 'start ===========');
//
//   // modify all returned values
//   remotes.after('**', function (ctx, next) {
//     var duration = new Date - start;
//     console.log(new Date, 'end ===========');
//     ctx.res.setHeader('X-Response-Time', duration + 'ms');
//     next();
//   });
// };
