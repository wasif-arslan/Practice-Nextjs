import { Dot } from 'lucide-react';


export default function HeroSec4() {
  return (
    <section className=" mt-[90px] ml-[215px] w-[1480px] ">
      <h1 className=" text-5xl text-center ">
        Warr & Co – Accounting Services For Businesses
      </h1>
      <p className="mt-10 text-lg">
        As experien ced small business accountants, Warr & Co have the expert
        knowledge which can help your small to medium business grow. Most people
        who start up in business do so because they have a good business
        proposition, not because they are experts in the legal, financial, and
        fiscal aspects of running a business. That’s where we step in.
      </p>
      <h1 className=" text-2xl font-semibold mt-5 ">
        Business Accountancy Services
      </h1>
      <p className="mt-10 text-lg">
        We’re passionate about business finance, legislation and regulations so
        that you don’t have to be! Think of Warr & Co as an extension of your
        business, rather than an accounting service for your business. We
        specialise in accounting for a wide variety of business types,
        particularly SMEs, start-ups and growing small businesses. We often work
        with clients through the difficult early stages of growing a company
        from the ground up. Our team of business accountants have centuries of
        experience between them, having worked with thousands of UK businesses.{" "}
        <p className="mt-10 text-lg">
          We understand that the business landscape in the UK can be exciting,
          but also daunting for those looking to live the dream and start their
          own business. The business financial landscape is always in flux, so
          much so that many new or smaller businesses struggle to keep up.{" "}
        </p>{" "}
        <p className="mt-10 text-lg">
          These factors can often seem overwhelming to an entrepreneur and this
          is where we can help, by evaluating your ideas in a constructive
          manner, helping you to develop them into a feasible business, and
          supporting your ongoing business development.{" "}
        </p>
        <ul className="mt-10 text-lg space-y-2 ">
          We can also help you:{" "}
          <li className='flex'><Dot />
            {" "}
            Decide on the most suitable structure for your business – sole
            trader, partnership, limited liability partnership or limited
            company.
          </li>{" "}
          <li className='flex'><Dot />
            Prepare a business plan, cashflow projections, budgets, and trading
            forecasts to prove the financial viability of your business and
            demonstrate this to potential investors / bank.{" "}
          </li>{" "}
          <li className='flex'><Dot />
            Assess your finance requirements and advise on the best sources of
            finance.{" "}
          </li>{" "}
          <li className='flex'><Dot />
            Help you establish relationships with banks, solicitors etc via our
            well established network of contacts.{" "}
          </li>{" "}
          <li className='flex'><Dot />
            Complete any registration procedures with Companies House and HM
            Revenue and Customs.{" "}
          </li>{" "}
          <li className='flex'><Dot />Deal with company secretarial issues. </li>{" "}
          <li className='flex'><Dot />
            Set up an internal accounting system for complying with statutory
            requirements.
          </li>
        </ul>
      </p>
    </section>
  );
}
