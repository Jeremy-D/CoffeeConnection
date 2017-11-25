const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  company_name: {
    type: String,
    required: true
  }
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
