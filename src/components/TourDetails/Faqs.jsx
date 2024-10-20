import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function FAQs() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex flex-wrap justify-between pt-9`}>    
            {faqData.map((faq,index)=>(
                <div key = {index}
                className="faq-item mb-6 w-full md:w-1/3 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="font-semibold text-lg text-center text-indigo-600 mb-4">
                        {faq.question}
                    </h3>
                    <p className=" text-center">{faq.answer}</p>
                    </div>
            ))
            }
        </div>
    );
}

const faqData = [
    {
        question: "How do I book a tour?",
        answer:
            'To book a tour, browse through our available travel packages, choose your preferred destination, and click on "Book Now". Fill in your details, and our team will reach out to confirm your booking.',
    },
    {
        question: "What happens after I fill out the booking form?",
        answer:
            "After submitting the form, our team will review your details and contact you to confirm your booking and provide further instructions.",
    },
    {
        question: "How long does it take to confirm my booking?",
        answer:
            "Our team typically processes bookings within 24 hours. You'll receive a confirmation via email or phone.",
    },
    {
        question: "How can I contact customer support?",
        answer:
            "You can reach our support team through the contact form or by calling the phone number on the Contact Us page.",
    },
    {
        question: "Can I modify my booking after submission?",
        answer:
            "Yes, you can modify your booking depending on availability. Contact our team as soon as possible.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept credit/debit cards, online transfers, and digital payments. Payment details will be provided after confirmation.",
    },
    {
        question: "What if I need to cancel my booking?",
        answer:
            "You can cancel your booking by contacting support. Please review our cancellation policy for more details.",
    },
];

export default FAQs;
