<form onSubmit={handleSubmit}>
  <select name="type">
    <option value="income">Receita</option>
    <option value="expense">Despesa</option>
  </select>
  <input name="amount" type="number" placeholder="R$ 0,00" />
  <button type="submit">Registrar</button>
</form>