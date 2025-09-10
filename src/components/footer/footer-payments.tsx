export function FooterPayments() {
  const payments = [
    { name: "Apple Pay", logo: "🍎" },
    { name: "Google Pay", logo: "�" },
    { name: "Visa", logo: "�" },
    { name: "Mastercard", logo: "�" },
  ];

  return (
    <div className="flex justify-between w-[282px]">
      {payments.map((payment, index) => (
        <div key={index} className="w-[51px] h-[36px] relative">
          <div className="w-full h-full bg-white rounded-md border border-[#f2f4f7] flex items-center justify-center text-lg">
            {payment.logo}
          </div>
        </div>
      ))}
    </div>
  );
}
