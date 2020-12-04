const { getContract } = require('./utils');

async function setString(key, value) {
    const contract = await getContract();
    try {
        console.log(`Calling contract [ ${contract.contractId} ]`)
        console.log(`Storing { ${key}: ${value} } ...`);
        console.log('---------------------------------------------------------------------------');
        await contract.setString({ key, value });
        console.log('---------------------------------------------------------------------------');
    } catch(error) {
        console.log(error);
    };
};

async function setNumber(key, value) {
    const contract = await getContract();
      try {
          console.log(`Calling contract [ ${contract.contractId} ]`)
          console.log(`Storing { ${key}: ${value} } ...`);
          console.log('---------------------------------------------------------------------------');
          await contract.setNumber({ key, value });
          console.log('---------------------------------------------------------------------------');
      } catch(error) {
          console.log(error);
      };
  
  };

async function getValue(key) {
    const contract = await getContract();
    try {
        console.log(`Retrieving stored value for "${key}":`);
        const result = await contract.getValue({ key });
        console.log('Result:', result);
        console.log('---------------------------------------------------------------------------');
    } catch(error) {
        console.log(error);
    };
};

module.exports = { setString, setNumber, getValue };