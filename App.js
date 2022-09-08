import './App.css'


function App(){
  const[Img,setImg]= useState('')
  const[price,setPrice]= useState('')
  const[result,setResult]= useState('')
  const[rank,setRank]= useState('')
  const[Details,setDetails]= useState('')

  const requst = fetch('https://api.coincap.io/v2/assets')
  return{

  }

  useEffect() => {

    const fetchCurrency  =async() =>{
      const requst= await fetch('https://api.coincap.io/v2/assets')
      const data = await requst.json();
  }, []);
      
    }
  }
fetchCurrency();

useEffect() => {
  const fetchCurrencyData  =async() =>{
    const requst= await fetch('https://discord.com/channels/964555901891649636/1003286348477780008/1017182066368069713')
    const data = await requst.json();
  }
  fetchCurrencyData();
};

  

const App = () => {
  return <div className='container text-center mt-5'>
    <h1>Digital Currency Rates</h1>
    <img 
    width='20rem'
    height='20rem'
    src='https://api.coincap.io/v2/assets'
    alt='Digital Currency Rates'></img>
  </div>
}
export default App;