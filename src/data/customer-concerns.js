const concerns = [
    {
      id: 1,
      product: 'iProtect',
      title: 'Protection',
      introduction: {
        title: 'Protection Need',
        videoLink: 'https://some-url-here',
        content: [
          'Protection need includes all financial instruments that provide cover to your family and you, in case of an unfortunate incident such as critical illness, accident or death.',
          'Example: Life insurance cover, Critical illness cover etc.',
          'Every year 10% of people suffer from critical illness or unexpected death and only 1% of people have sufficient coverage for costs of over 1 million baht'
        ],
        question: 'Are you covered for this?'
      },
      coverage: '',
      QA: [
        {
          id: 1,
          index: 1,
          question: {
            title: 'Q1: You should at least be covered for...',
            content:
              'All your personal debt so that burden is not passed on to your family'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            title: 'Q2: You should at least be covered for...',
            content: '10 years of annual income for your family in case you die'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            title: 'Q3: You should at least be covered for...',
            content: '5 months of income in case you get critically ill'
          },
          answer: ''
        }
      ],
      priority: 0,
      extraQA: [
        {
          id: 1,
          index: 1,
          question: {
            content:
              'Imagine you suffer under a critical illness. As a result, you lose the income which you need for you and your family to make a living.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            content:
              'Imagine you are unable to work and earn income as a result of an accident. At the same time, the medical expenses eat up your savings.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        }
      ]
    },
    {
      id: 2,
      product: 'iHealth',
      title: 'Health',
      introduction: {
        title: 'Health Need',
        videoLink: 'https://some-url-here',
        content: [
          'Health need includes all financial instruments that provide medical cover or immediate financial liquidity to you in case of hospitalization or illness.',
          'Example: Health insurance, corporate health protection plan, Government health cover etc.',
          'Thailand has the second highest rate of Diarrhea effecting 1 out of 4 people every year and on average costs 100,000 Baht for treatment'
        ],
        question: 'Are you covered for this?'
      },
      coverage: '',
      QA: [
        {
          id: 1,
          index: 1,
          question: {
            title: 'Q1: You should at least be covered for...',
            content: '3 million Baht per year for medical treatment'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            title: 'Q2: You should at least be covered for...',
            content: 'Treatment in private hospitals'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            title: 'Q3: You should at least be covered for...',
            content: 'Out-patient medical treatments'
          },
          answer: ''
        }
      ],
      priority: 0,
      extraQA: [
        {
          id: 1,
          index: 1,
          question: {
            content:
              'Imagine you need to hospitalize for a couple of weeks. You cannot afford the costs for Type international or private hospitals, so you have to choose a public hospital.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            content:
              'Imagine you get really sick and suffer under critical illness. The therapy is complicated and you would like to go to a specialist abroad, but you cannot afford it.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            content:
              'Imagine you need to undergo diagnostic scans, X-Ray investigations or physical therapy and you need to take over all the occurring costs.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 4,
          index: 4,
          question: {
            content:
              'Imagine you need to go to the dentist for some major treatments and you need to cover all the costs.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 5,
          index: 5,
          question: {
            content:
              'Imagine you temporarily lose your income since you need to stay in the hospital for a couple of days or even weeks.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        }
      ]
    },
    {
      id: 3,
      product: 'iEducation',
      title: 'Education',
      introduction: {
        title: 'Education Need',
        videoLink: 'https://some-url-here',
        content: [
          'Education need includes all financial instruments that secure funds to pay for your children’s high school and university education in  when they need it the most.',
          'Example: Education insurance, dedicated term deposits for education, trust funds etc.',
          'Average total cost of education in Thailand is 3 million Baht. It is critical you empower your children with the right education for the future today'
        ],
        question: 'Are you covered for this?'
      },
      coverage: '',
      QA: [
        {
          id: 1,
          index: 1,
          question: {
            title: 'Q1: You should at least be covered for...',
            content: 'a bachelors and masters degree'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            title: 'Q2: You should at least be covered for...',
            content: 'Treatment in private hospitals'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            title: 'Q3: You should at least be covered for...',
            content: 'income if your child gets hospitalized'
          },
          answer: ''
        }
      ],
      priority: 0,
      extraQA: [
        {
          id: 1,
          index: 1,
          question: {
            content:
              'Imagine your child wants to study at a university in a few years. But you don\'t have enough funds to finance your children\'s education.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            content:
              'Imagine you suffer from a critical illness. You are unable to work, lose your income and you don’t have sufficient funds for your children\'s education.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            content:
              'Imagine you die unexpectedly, leaving your family behind. Your funds are not sufficient to cover your children\'s education and all associated costs.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 4,
          index: 4,
          question: {
            content:
              'Imagine your child is hospitalized due to a severe accident or a critical illness and the medical expenses eat up your savings.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        },
        {
          id: 5,
          index: 5,
          question: {
            content:
              'Imagine your child is hospitalized. You only work part-time to be able to support your child, but you lose a significant share of your income.',
            concernQuestion: 'Does this concern you?'
          },
          answer: ''
        }
      ]
    },
    {
      id: 4,
      product: 'iRetirement',
      title: 'Retirement',
      introduction: {
        title: 'Retirement Need',
        videoLink: 'https://some-url-here',
        content: [
          'Retirement need includes all financial instruments that provide income replacement after retirement (either one time fixed lump sum or regular income on an annual/monthly level). Adequate investment for retirement today can help you retire early and lead a happy life in your golden years',
          'Example: Unit linked insurance products, pension funds, term deposits, Government bonds etc.',
          'The 5 year average rate of return by investing in financial instruments such as Unit Linked insurance plans is 9% more than regular savings rates'
        ],
        question: 'Are you covered for this?'
      },
      coverage: '',
      QA: [
        {
          id: 1,
          index: 1,
          question: {
            title: 'Q1: You should at least be covered for...',
            content:
              'keeping your standard of living (80% of your income) for at least 15 years'
          },
          answer: ''
        },
        {
          id: 2,
          index: 2,
          question: {
            title: 'Q2: You should at least be covered for...',
            content: 'liquidity of funds need arising in the future'
          },
          answer: ''
        },
        {
          id: 3,
          index: 3,
          question: {
            title: 'Q3: You should at least be covered for...',
            content: 'providing funds for your family in case you die'
          },
          answer: ''
        }
      ],
      priority: 0,
      extraQA: []
    },
    {
      id: 5,
      product: 'iLegacy',
      title: 'Legacy',
      introduction: {
        title: 'Legacy Need',
        videoLink: '',
        content: [
          'Legacy need includes all financial instruments that allow you to pass on your wealth to your children and grandchildren.',
          'Example: Trust, retirement plan, life insurance etc. ',
          'There is a 20% tax on wealth passed on in the form of inheritance'
        ],
        question: 'Are you covered for this?'
      },
      coverage: '',
      QA: [],
      priority: 0,
      extraQA: []
    }
  ]
  
  export default concerns
  