const Beneficiary = require('../models/Beneficiary');

module.exports = {
  async index(req, res) {
    const beneficiaries = await Beneficiary.findAll();

    return res.json(beneficiaries);
  },

  async store(req, res) {
    const { name, cpf, phone_number, birthday } = req.body;

    const beneficiary = await Beneficiary.create({ 
      name,
      cpf,
      phone_number,
      birthday,
    });

    return res.json(beneficiary);
  },

  async get(req, res){
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id);

    if(!beneficiary){
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    return res.json(beneficiary);
  },

  async update(req, res){
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id);

    if (!beneficiary) {
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    beneficiary.update({ ...req.body });
    
    return res.json(beneficiary);
  },

  async delete(req, res) {
    const { beneficiary_id } = req.params;

    const beneficiary = await Beneficiary.findByPk(beneficiary_id);

    if (!beneficiary) {
      return res.status(400).json({ error: 'Beneficiary not found' });
    }

    beneficiary.destroy();

    return res.json();
  },
}