import {pricing} from '../data'


const Pricing = () => {
   
  return (
    <>
      <SectionHeader title='Pricing' subTitle='Available Plans' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 py-8 max-w-7xl mx-auto px-8 '>
        {pricing.map((plan) => {
          // destructure pricing data from plan
          const {
            title,
            price,
            currency,
            frequency,
            description,
            features,
            cta,
            recommended,
          } = plan;
          return (
            <div
              key={price}
              className='border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative flex flex-col'>
              {recommended && (
                <p
                  className='absolute top-0 bg-black text-white px-3 p-0 text-sm font-semibold tracking-wide
                        rounded-full shadow-md translate-y-1/2
                        '>
                  Recommended
                </p>
              )}
              <h2 className='text-lg font-semibold leading-5'>{title}</h2>
              <p className='text-para mt-4 text-textColor text-sm'>
                {description}
              </p>
              <div className='mt-4 bg-slate-50 p-6 rounded-lg -mx-6 '>
                <p className='text-sm font-semibold  text-textColor flex items-center '>
                  <span>{currency}</span>
                  <span className='text-4xl text-slate-900 ml-3 '>
                    ${price}
                  </span>
                  <span className='ml-1.5'>{frequency}</span>
                </p>
              </div>
              {/* Features  */}

              <div>
                <ul className='mt-6 space-y-4 flex-1 '>
                  {features.map((feature, i) => {
                    return (
                      <li
                        key={i}
                        className='text-sm text-textColor leading-5 flex  '>
                        <span className='h-5 w-5 bg-black text-white shrink-0'></span>
                        <span className='ml-3'> {feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA  */}

              <a
                href=''
                className={`
                   
                   ${
                     recommended
                       ? " text-white bg-slate-700 hover:bg-slate-400"
                       : " text-headingColor bg-slate-50 hover:bg-slate-100 "
                   }
                  block px-6 py-4 font-semibold leading-4 text-center rounded-lg shadow-md `}>
                {cta}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pricing