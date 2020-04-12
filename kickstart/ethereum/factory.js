import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x212eA30264620C4727042431D2B0554B4850a8Af'
);

export default factory;
