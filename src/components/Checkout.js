import "./Checkout.css"

const Checkout = ({ checkout }) => {
  if (!checkout.length) {
      
    return <></>
  }

  return (
    <div className="checkout">
      <b>Votre panier</b>
      <br />
      {checkout.map(({ kebab, quantity }) => (
        <p key={kebab.name}>
          {kebab.name} x{quantity}
        </p>
      ))}
    </div>
  )
}

export default Checkout