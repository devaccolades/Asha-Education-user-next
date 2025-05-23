'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { sendOtp, verifyOtp } from '@/services/api';

const EmailModal = ({ isOpen, onClose ,id}) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [timeLeft, setTimeLeft] = useState(120);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);
    const modalRef = useRef(null);

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Timer for OTP resend
    useEffect(() => {
        let timer;
        if (step === 2 && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft <= 0) {
            setCanResend(true);
        }
        return () => clearInterval(timer);
    }, [step, timeLeft]);

    // Send OTP to backend
    const handleSendOtp = async (e) => {
        e.preventDefault();

        if (!email) return alert("Please enter an email");

        try {
            await sendOtp({ email });
            setStep(2);
            setTimeLeft(120);
            setCanResend(false);
            setOtp(Array(6).fill(''));
            inputRefs.current[0]?.focus();
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        }
    };

    // Verify OTP
    const handleVerifyOtpSubmit = async (e) => {
        e.preventDefault();
    
        const fullOtp = otp.join('');
        if (fullOtp.length < 6) {
            return alert("Please enter the complete 6-digit OTP.");
        }
    
        const formData = {
            email,
            otp: fullOtp,
            pid: id, 
        };
        
        try {
            await verifyOtp(formData);
            onClose(); 
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("Invalid OTP. Please try again.");
        }
    };
    

    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleResend = () => {
        if (canResend) {
            handleSendOtp(new Event('submit')); // simulate form submission
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
            <div
                ref={modalRef}
                className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                    <X />
                </button>

                {step === 1 ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Enter Your Email</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@mail.com"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-700 to-red-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition"
                        >
                            Send OTP
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtpSubmit} className="space-y-5">
                        <h2 className="text-xl font-semibold text-center">Enter OTP</h2>

                        <div className="flex justify-center gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ))}
                        </div>

                        <div className="text-center text-sm text-gray-600 space-y-1">
                            {canResend ? (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    className="text-blue-600 hover:underline"
                                >
                                    Resend OTP
                                </button>
                            ) : (
                                <span>Resend in {formatTime(timeLeft)}</span>
                            )}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-sm text-gray-500 hover:text-blue-600 hover:underline"
                                >
                                    Use another email?
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
                        >
                            Verify OTP
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EmailModal;
