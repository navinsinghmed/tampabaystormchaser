describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value ='Alice';
  });

it('should add a new server to allServers on submitServerInfo()', function() {
  submitServerInfo();
  
  expect(Object.keys(allServers).length).toEqual(1);
  expect(allServers('server' + serverId).serverName).toEqual('Alice');
});

it('should not add a new server on submitServerInfo() with empty input', function () {
  serverNameInput.value="";
  submitServerInfo();
  
  expect(Object.keys(allServers).length).toEqual(0);
});

it('should update #servertable on updateServerTable()', function() {
  submitServerInfo();
  updateServerTable();
  
  let curTdList = document.querySelectorAll("#serverTable tbdoy tr td");
  
  expect(curlTdList.length).toEqual(3);
  expect(curlTdList[0].innerText).toEqual('Alice');
  expect(curlTdList[1].innerText).toEqual("$0.00");
  expect(curlTdList[2].innerText).toEqual('X');
  
});

afterEach(function() {
  serverId = 0;
  serverTBody.innerHTML = '';
  allServers = {};
});

});