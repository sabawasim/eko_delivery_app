 /*
    Defines all test cases
  */
    
var imported_fn = require('../calculate_fn');
var assert = require('assert');
describe('Test for Case-01 Inputs', function() {
  describe('Input from client', function() {
    it('should check for "-" in input', function() {
      let return_val = imported_fn.validate_client_data_case01({data:"E-D"},[])

      assert.equal(return_val, true);
    });
  });
});

describe('Test for Case-01 Inputs', function() {
  describe('Input from client with error', function() {
    it('should check for "-" in input, when data is wrong', function() {
      let return_val = imported_fn.validate_client_data_case01({data:"ED"},[])

      assert.equal(return_val, false);
    });
  });
});

describe('Test for Case-01 Inputs', function() {
  describe('Input from client correct data : the delivery cost for route A-B-E', function() {
    it('expected result : the delivery cost for route A-B-E', function() {
      let return_val = imported_fn.case01({data:"A-B-E"})

      assert.equal(return_val, "Cost is 4");
    });
  });
});

describe('Test for Case-01 Inputs', function() {
  describe('Input from client correct data : the delivery cost for route A-D', function() {
    it('expected result', function() {
      let return_val = imported_fn.case01({data:"A-D"})

      assert.equal(return_val, "Cost is 10");
    });
  });
});

describe('Test for Case-01 Inputs', function() {
  describe('Input from client correct data : the delivery cost for route E-A-C-F', function() {
    it('expected result', function() {
      let return_val = imported_fn.case01({data:"E-A-C-F"})

      assert.equal(return_val, "Cost is 8");
    });
  });
});


describe('Test for Case-01 Inputs', function() {
  describe('Input from client correct data : the delivery cost for route A-D-F', function() {
    it('expected result', function() {
      let return_val = imported_fn.case01({data:"A-D-F"})

      assert.equal(return_val, "No Such Route");
    });
  });
});

describe('Test for Case-02 Inputs', function() {
  describe('The number of possible delivery route from E to D with a maximum of 4 stop \
  without using the same route twice in a delivery route', function() {
    it('expected result', function() {
      let return_val = imported_fn.case02_algo({data:"E-D"})

      assert.equal(return_val, "Total count  is 4");
    });
  });
});

describe('Test for Case-02 Inputs', function() {
  describe('The number of possible delivery route from E to E without using the same \
  route twice in a delivery route', function() {
    it('expected result', function() {
      let return_val = imported_fn.case022_algo({data:"E-E"})

      assert.equal(return_val, "Total count  is 5");
    });
  });
});

describe('Test for Case-02 Inputs', function() {
  describe('Bonus​: the number of possible delivery route from E to E that delivery cost is \
  less than 20. Given that the same route can be used twice in a delivery route', function() {
    it('expected result', function() {
      let return_val = imported_fn.case023_algo({data:"E-E-cost-20"})

      assert.equal(return_val, "Total count  is 29");
    });
  });
});

describe('Test for Case-03 Inputs', function() {
  describe('The cost of cheapest delivery route between E to D', function() {
    it('expected result', function() {
      let return_val = imported_fn.case032_algo({data:"E-D"})

      assert.equal(return_val, "Minimum cost is 9");
    });
  });
});


describe('Test for Case-02 Inputs', function() {
  describe('The cost of cheapest delivery route between E to E', function() {
    it('expected result', function() {
      let return_val = imported_fn.case03_algo({data:"E-E"})

      assert.equal(return_val, "Minimum cost is 6");
    });
  });
});