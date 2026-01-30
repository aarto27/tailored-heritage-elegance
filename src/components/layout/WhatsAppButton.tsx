import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "9875018888"; 
  const message = encodeURIComponent(
    "Hello, I'm interested in your bespoke tailoring services. I'd like to schedule a consultation."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">
        Order on WhatsApp
      </span>
    </a>
  );
}
