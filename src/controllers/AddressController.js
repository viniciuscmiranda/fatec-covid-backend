const Address = require('../models/Address');
const Beneficiary = require('../models/Beneficiary');

module.exports = {
  async index(req, res) {
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id, {
      include: { association: 'addresses' }
    });

    if (!beneficiary) {
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    return res.json(beneficiary.addresses);
  },
  
  async store(req, res) {
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id);
    
    if(!beneficiary){
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    const address = await Address.create({ ...req.body, beneficiary_id });

    return res.json(address);
  },

  async update(req, res) {
    const { address_id } = req.params;

    const address = await Address.findByPk(address_id);
    
    if (!address) {
      return res.status(400).json({ error: 'Address not found' });
    }

    address.update({ ...req.body });

    return res.json(address);
  },

  async delete(req, res) {
    const { address_id } = req.params;

    const address = await Address.findByPk(address_id);

    if (!address) {
      return res.status(400).json({ error: 'Address not found' });
    }

    address.destroy();

    return res.json();
  },

  async get(req, res) {
    const { address_id } = req.params;

    const address = await Address.findByPk(address_id);

    if (!address) {
      return res.status(400).json({ error: 'Address not found' });
    }

    return res.json(address);
  },
}