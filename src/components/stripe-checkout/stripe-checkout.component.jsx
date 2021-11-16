import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({price}) => {

    const stripeAmount = price * 100;
    const publishKey= 'pk_test_51JwVLsKSPgrN2RSuWiN7fqF2bxYd5gq321ALpyhN5kGOUvudQdADYnPX2vtGsaImobYWngfdB4hoxqgYgYqVbb4G002XYZHtKy';

    const onToken = () => (
        console.log('stripe checkout price')
    )

    return (
            <StripeCheckout
            token={onToken}
            amount={stripeAmount}
            label={`Your payments is $${price}`}
            stripeKey={publishKey}
            />    
        )   
}

export default StripeCheckoutBtn;