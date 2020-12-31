
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount:34000,
    years: 6,
    rate: 5.9
  }
  expect(calculateMonthlyPayment(values)).toEqual('561.87')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000,
    years: 2,
    rate: 4
  }
  expect(calculateMonthlyPayment(values)).toEqual('43.42')
});

it("should handle very high interest rates correctly", function(){
  const values = {
    amount: 1000,
    years: 20,
    rate:99
  }
  expect(calculateMonthlyPayment(values)).toEqual('82.50')
})
