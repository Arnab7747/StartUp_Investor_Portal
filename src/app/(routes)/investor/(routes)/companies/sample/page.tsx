"use client";

export default function Home() {
  const amount = 49.99;

  return (
    <div className="mx-7">
      <div className="max-w-6xl mx-auto p-10 text-gray-800 text-center border m-10 rounded-md">
        <div className="mb-10">
          <h1 className="text-2xl mb-2">Make Payment</h1>
          <h2 className="text-lg mt-6">
            Investing &nbsp;&nbsp;
            <span className="font-bold text-base">${amount}</span>
          </h2>
        </div>

        <p className="text-gray-600">
          Payment system has been temporarily disabled. Please check back later or contact support.
        </p>
      </div>
    </div>
  );
}
