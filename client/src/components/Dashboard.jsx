import { Chart } from 'react-chartjs-2';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  // Busca transações do backend
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/transactions');
      setTransactions(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="finance-dashboard">
      <BalanceCard />
      <Chart data={chartData} />
      <TransactionList transactions={transactions} />
    </div>
  );
}