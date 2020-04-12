const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const result = solc.compile(source, 1);
if (result.errors) {
  console.log(result.errors);
  process.exit(1);
}
const contracts = result.contracts;

fs.ensureDirSync(buildPath);

for (let contract in contracts) {
  const writtenPath = path.resolve(buildPath, contract.replace(':', '') + '.json')
  fs.outputJsonSync(
    writtenPath,
    contracts[contract]
  );
  console.log("Compiled and written to", writtenPath);
}
