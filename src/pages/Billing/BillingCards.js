import React, { useState, useContext } from 'react';
import { Elements } from 'react-stripe-elements';
import PricingCards from '@/components/Upgrade/PricingCards';
import UpdateStripeCard from '@/components/StripeCard/UpdateStripeCard';
import UpdateStripeCard2 from '@/components/StripeCard/UpdateStripeCard2';
import GlobalContext from '@/layouts/MenuContext';

const data = [
 {
    name: 'Samll',
    description: 'Upgrade When you are ready',
    price: 'Free',
    priceLabel: 'By Default No Cost',
    type: 'purchase',

    stripePlan: 'price_1LC258Hgqvk3POlbr4olH34g',

    listItems: [
      {
        content: '1 Job/ Month',
        tooltip: 'This is the number of positions you can actively interview for each month',
      },
      {
        content: '10 User Seats',
      },
      {
        content: '500 Candidates',
      },
      {
        content: 'Custom branding',
      },
      {
        content: 'Onboarding session',
      },
      {
        content: 'Chat and phone support',
      },
    ],
  },
  {
    name: 'Growth',
    description: 'For recruiters that want to explore upgrading the client/candidate experience',
    price: '$18/mo',
    priceLabel: 'Billed Monthly',
    type: 'purchase',

    buttonLabel: 'Start Now',
    stripePlan: 'price_1LC2AeHgqvk3POlbZIhPAoYk',

    listItems: [
      {
        content: '10 Jobs/ Month',
        tooltip: 'This is the number of positions you can actively interview for each month',
      },
      {
        content: '10 User Seats',
      },
      {
        content: '500 Candidates',
      },
      {
        content: 'Custom branding',
      },
      {
        content: 'Onboarding session',
      },
      {
        content: 'Chat and phone support',
      },
    ],
  },
  {
    name: 'Professional',
    description:
      'For recruiters that are serious about improving their client/candidate experience',
    price: 'Contact Us',
    priceLabel: 'Flexible Plans',
    buttonLabel: 'Contact Us',
    type: 'contact',
    stripePlan: 'price_1L82t2Hgqvk3POlbay28LBcC',

    listItems: [
      {
        content: 'Unlimited Jobs',
        tooltip: 'This is the number of positions you can actively interview for each month',
      },
      {
        content: 'Unlimited User Seats',
      },
      {
        content: 'Unlimited Candidates',
      },
      {
        content: 'Enchanced branding',
      },
      {
        content: 'Dedicated account manager',
      },
      {
        content: 'Advanced ATS integrations',
      },
    ],
  },
];

const Upgrade = () => {
  const [visible, setVisible] = useState(false);
  const [plan, setPlan] = useState('');
  const globalData = useContext(GlobalContext);

  return (
    <div>
      <Elements>
        <UpdateStripeCard2
          title={`Purchase ${plan.name} Plan`}
          okText="Purchase Now"
          body={
            <div>
              You will be charged <b>{plan.price}</b> once your trial ends.
            </div>
          }
          visible={visible}
          setVisible={setVisible}
          setReload={globalData.reloadProductAndSubscriptions}
        />
      </Elements>
      <PricingCards
        onClick={plan => {
          setPlan(plan);
          setVisible(true);
        }}
        data={data}
      />
    </div>
  );
};

export default Upgrade;
