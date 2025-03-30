const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    type: { type: String, enum: ['income', 'expense'] },
    category: String,
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  export default mongoose.model('Transaction', transactionSchema);