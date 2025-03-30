<div className="balance-card">
  <h3>Saldo Atual</h3>
  <p className={total >= 0 ? 'positive' : 'negative'}>
    R$ {total.toFixed(2)}
  </p>
</div>