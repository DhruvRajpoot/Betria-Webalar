import PriceComponent from "./PriceComponent";
const plan=[
  {
    name:'Basic',
    price:'15',
    fourth:'n',
    fifth:'n'
  },
  {
    name:'Standard',
    price:'37',
    fourth:'y',
    fifth:'n'
  },
  {
    name:'Advance',
    price:'42',
    fourth:'y',
    fifth:'y'
  }
]

const PlanDetails= () => {
  return (
    <div className="row">
      <div className="col-lg-4"><PriceComponent data={plan[0]}/></div>
      <div className="col-lg-4"><PriceComponent data={plan[1]}/></div>
      <div className="col-lg-4"><PriceComponent data={plan[2]}/></div>
    </div>
  )
}

export default PlanDetails;