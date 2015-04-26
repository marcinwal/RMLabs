var SFsimulator = function(id){
  var u1,u2;
  var users;
  u1 = {id: 0, name: "Marcin", surname: "Walendzik", CPD: 0}
  u2 = {id: 1,name: "Gonzo", surname: "Secret", CPD: 10}
  users = [u1,u2];
  if (typeof id === 'undefined' ) return users;
  return  [users[id]];
};

module.exports = SFsimulator;