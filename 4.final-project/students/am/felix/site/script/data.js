let initizialize = {};
let data = {};
let afterDataLoadArr = [
    function() { console.log('Data Loaded:'); },
    function() { console.log(data); },
    function() { console.log(('-----------------')); },
    function() { console.log(('')); }
]

Promise.all([
  d3.csv('data/india-inequality/income/income.csv'),
  d3.csv('data/india-inequality/wealth/wealth.csv'),
  d3.csv('data/us-tax/average-income-taxrate-numbers.csv'),
  d3.csv('data/us-tax/income-share-numbers.csv'),
  d3.csv('data/us-tax/income-tax-share-numbers.csv')
])
.then(([indiaIncome, indiaWealth, usAvgIncomeTaxRate, usIncomeShare, usIncomeTaxShare]) => {
  data = {};
  data['india'] = {
    'income': indiaIncome,
    'wealth' : indiaWealth
  };
  data['us'] = {
    'avgIncomeTaxRate': usAvgIncomeTaxRate,
    'incomeShare' : usIncomeShare,
    'incomeTaxShare' : usIncomeTaxShare
  };

  for (i = 0; i < afterDataLoadArr.length; i++) {
      afterDataLoadArr[i]();
  }
});
