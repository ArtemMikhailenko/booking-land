interface StepNumbersProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

export const StepNumbers = ({ currentStep, totalSteps, onStepClick }: StepNumbersProps) => {
  return (
    <div className="flex items-center justify-center mb-16">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <div key={stepNumber} className="flex items-center">
            <button
              onClick={() => onStepClick(stepNumber)}
              className={`text-5xl font-extrabold transition-colors duration-200 ${
                isActive ? 'text-[#344054]' : 'text-white'
              }`}
            >
              {stepNumber.toString().padStart(2, '0')}
            </button>
            
            {stepNumber < totalSteps && (
              <div className="mx-6">
                <img src="/images/landing/dots-separator.svg" alt="" className="w-26 h-2" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
