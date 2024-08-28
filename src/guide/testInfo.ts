import { Guide } from './_types';

export const testInfo: Guide = {
  id: 'testInfo',
  title: 'Test Info',
  defaultOpen: true,
  content: [
    {
      id: 'testcards',
      title: 'Test Cards',
      description: [
        {
          paragraph: `Visa  4242424242424242  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Visa (debit)  4000056655665556  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Mastercard  5555555555554444  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Mastercard (2-series) 2223003122003222  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Mastercard (debit)  5200828282828210  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Mastercard (prepaid)  5105105105105100  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `American Express  378282246310005 CVC/CVV Any 4 digits  Any future date`,
        },
        {
          paragraph: `American Express  371449635398431 CVC/CVV Any 4 digits  Any future date`,
        },
        {
          paragraph: `Discover  6011111111111117  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Discover  6011000990139424  CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Discover (debit)  6011981111111113 CVC/CVV Any 3 digits  Any future date`,
        },
        {
          paragraph: `Simulated Decline: 4917484589897107 CVC/CVV Any 3 digits  Any future date`,
        },
      ],
    },
    {
      id: 'testach',
      title: 'Test ACH Accounts',
            description: [
        {
          paragraph: `As a default, any 7 digit account and routing number except an explicit decline simulation as below will successfully submit as an ACH transaction. ACH transactions are not immediately declined and need to proceed through clearing before they are.`
        },    
        {
          paragraph: `Simulated Decline: DDA 123456789 and routing number 987654321`,
        },

      ],
    },
  ],
};
