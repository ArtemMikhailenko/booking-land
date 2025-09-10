'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [step, setStep] = useState<'initial' | 'form'>('initial');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSelfRegister = () => {
    window.open('https://4friends.in.ua/auth/signup', '_blank');
    onClose();
    resetModal();
  };

  const handleLeaveRequest = () => {
    setStep('form');
  };

  const resetModal = () => {
    setStep('initial');
    setFormData({ name: '', phone: '' });
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendContactForm = async () => {
    const BOT_TOKEN = 'bot7741478725:AAEkF5KLVWAfP_8xFA2TCj1iv1-00FSvaag';
    const CHAT_ID = '-1002678416154';
    const API_URL = `https://api.telegram.org/${BOT_TOKEN}`;

    const currentTime = new Date().toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const telegramTextMessages = `📞 НОВА ЗАЯВКА З ПОПАПУ РЕЄСТРАЦІЇ 📝

👤 Ім'я: ${formData.name}
📞 Телефон: ${formData.phone}

🕒 Дата відправки: ${currentTime}`;

    const encodedMessage = encodeURIComponent(telegramTextMessages);
    const url = `${API_URL}/sendMessage?chat_id=${CHAT_ID}&text=${encodedMessage}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    try {
      setIsSubmitting(true);
      await sendContactForm();
      setIsSubmitted(true);
      
      toast.success("Заявка відправлена! Ми зв&apos;яжемося з вами у найближчий час!", {
        style: {
          background: 'white',
          color: 'black',
          border: '1px solid #e5e7eb',
        },
      });
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error('Сталася помилка при відправці заявки. Спробуйте пізніше.', {
        style: {
          background: 'white',
          color: 'black',
          border: '1px solid #e5e7eb',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div 
        className="relative bg-white rounded-[32px] p-6 pb-12 w-full max-w-[486px] max-h-[90vh] overflow-auto"
        style={{
          boxShadow: `
            0 9px 20px rgba(0, 0, 0, 0.1),
            0 36px 36px rgba(0, 0, 0, 0.09),
            0 82px 49px rgba(0, 0, 0, 0.05),
            0 145px 58px rgba(0, 0, 0, 0.01),
            0 227px 64px rgba(0, 0, 0, 0)
          `
        }}
      >
        {/* Header */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-[#f1f3f6] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={16} className="text-[#344054]" />
          </button>
        </div>

        {step === 'initial' ? (
          // Initial Step
          <>
            {/* Content */}
            <div className="text-center mb-9">
              <h2 className="text-[32px] font-bold text-[#344054] leading-[130%] mb-4 font-geologica">
                Приєднуйтесь до зооекосистеми 4Friends
              </h2>
              <p className="text-base font-semibold text-[#667085] leading-[130%] max-w-[335px] mx-auto font-wix-display-medium">
                Розміщення у каталозі безкоштовне. Оберіть зручний спосіб старту.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleSelfRegister}
                className="w-full h-[60px] bg-[#9270cb] hover:bg-[#7d5db0] text-white rounded-[48px] text-base font-medium transition-colors font-wix-medium"
              >
                Зареєструватись самостійно
              </button>
              
              <button
                onClick={handleLeaveRequest}
                className="w-full h-[60px] bg-white border border-[#9270cb] hover:bg-[#f8f6ff] text-[#344054] rounded-[48px] text-base font-medium transition-colors font-wix-medium"
              >
                Залишити заявку
              </button>
            </div>
          </>
        ) : (
          // Form Step
          <>
            {/* Content */}
            <div className="text-center mb-5">
              <h2 className="text-[32px] font-bold text-[#344054] leading-[130%] mb-2 font-geologica">
                Заповніть форму
              </h2>
              <p className="text-base font-semibold text-[#667085] leading-[130%] font-wix-display-medium">
                ми зв&apos;яжемося з вами в найближчий час
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 mb-5">
              <div className="space-y-2">
                <label className="text-base text-[#344054] font-wix-regular">Ім&apos;я</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ім'я"
                  required
                  className="w-full h-12 px-5 py-3 border border-[#e4e7ec] rounded-[48px] text-base placeholder-[#98a2b3] focus:outline-none focus:border-[#9270cb] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-base text-[#344054] font-wix-regular">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+38 "
                  required
                  className="w-full h-12 px-5 py-3 border border-[#e4e7ec] rounded-[48px] text-base placeholder-[#98a2b3] focus:outline-none focus:border-[#9270cb] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full h-[60px] bg-[#9270cb] hover:bg-[#7d5db0] disabled:opacity-50 text-white rounded-[48px] text-base font-medium transition-colors font-wix-medium"
              >
                {isSubmitted ? 'Надіслано!' : isSubmitting ? 'Надсилаємо...' : 'Надіслати'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
