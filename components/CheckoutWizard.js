import React from 'react'

function CheckoutWizard({ activeStep = 0 }) {
    return (
        <div className="mb-5 flex flex-wrap">
            {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                (step, index) => (
                    <div
                        key={step}
                        className={`flex-1 border-b-2  
              text-center 
           ${index <= activeStep
                                ? 'border-pink-500   text-pink-500'
                                : 'border-gray-400 text-gray-400'
                            }
              
           `}
                    >
                        {step}
                    </div>
                )
            )}
        </div>
    );
}

export default CheckoutWizard
