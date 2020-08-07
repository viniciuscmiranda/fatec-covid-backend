const Receipt = require('../models/Receipt');
const Beneficiary = require('../models/Beneficiary');

module.exports = {
  async index(req, res) {
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id, {
      include: { association: 'receipts' }
    });

    if (!beneficiary) {
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    return res.json(beneficiary.receipts);
  },
  
  async store(req, res) {
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id);
    
    if(!beneficiary){
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    const receipt = await Receipt.create({ ...req.body, beneficiary_id });

    return res.json(receipt);
  },

  async update(req, res) {
    const { receipt_id } = req.params;

    const receipt = await Receipt.findByPk(receipt_id);
    
    if (!receipt) {
      return res.status(400).json({ error: 'Receipt not found' });
    }

    receipt.update({ ...req.body });

    return res.json(receipt);
  },

  async delete(req, res) {
    const { receipt_id } = req.params;

    const receipt = await Receipt.findByPk(receipt_id);

    if (!receipt) {
      return res.status(400).json({ error: 'Receipt not found' });
    }

    receipt.destroy();

    return res.json();
  },

  async get(req, res) {
    const { receipt_id } = req.params;

    const receipt = await Receipt.findByPk(receipt_id);

    if (!receipt) {
      return res.status(400).json({ error: 'Receipt not found' });
    }

    return res.json(receipt);
  },
}