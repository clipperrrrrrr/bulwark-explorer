
const mongoose = require('mongoose');

const Masternode = mongoose.model('Masternode', new mongoose.Schema({
  __v: { select: false, type: Number },
  active: { index: 1, required: true, type: Number },
  addr: { index: 1, required: true, type: String },
  createdAt: { required: true, type: Date },
  lastAt: { required: true, type: Date },
  lastPaidAt: { index: 1, type: Date },
  network: { type: String },
  rank: { type: Number },
  status: { required: true, type: String },
  txHash: { index: 1, required: true, type: String },
  txOutIdx: { required: true, type: Number },
  ver: { required: true, type: Number }
}, { versionKey: false }), 'masternodes');

module.exports =  Masternode;
