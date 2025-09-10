export function FooterPayments() {
  const payments = [
    { name: "Visa", logo: "💳" },
    { name: "Mastercard", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Apple Pay", logo: "📱" },
  ];

  return (
    <ul className="flex gap-4">
      {payments.map((payment, index) => (
        <li key={index} className="w-[51px] h-[36px] relative">
          <div className="w-full h-full bg-white rounded-md flex items-center justify-center text-lg">
            {payment.logo}
          </div>
        </li>
      ))}
    </ul>
  );
}
