//accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments Objects
function sumPaymentTotal(type) {
  let total=0;
  for(let key in allPayments) {
    let payment = allPayments[key];
    
    total += Number(payment[type]);
  }
  return total;
};

//convert bill and tip amt to tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100/(billAmt/tipAmt));
}

//expects a table row element, appends a newly created td element from the value
function appendTd(tr,value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  
  tr.append(newTd);
}

//append delete button and click handler for removing server from allServers and DOM td
function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.className = 'deleteBtn';
  newTd.innerText = 'X'
  
  newTd.addEventLister('click', removeEle);
  
  tr.append(newId);
}

function removeEle(evt) {
  let ele = evt.target.closest('tr');
  
  delete allServers[ele.id];
  
  ele.parentNode.removeChild(ele);
  updateServerTable();
}

