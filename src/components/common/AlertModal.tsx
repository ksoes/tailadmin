"use client";

import { Modal } from "@/components/ui/modal";
import React from "react";

interface AlertModalProps {
    open: boolean;
    type?: "success" | "error" | "warning" | "info";
    title: string;
    message: string;
    onClose: () => void;
}

const typeStyles = {
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
    info: "text-black-600",
};

export default function AlertModal({
    open,
    type = 'info',
    title,
    message,
    onClose,
                                   }: AlertModalProps) {
    return (
        <Modal isOpen={open} onClose={onClose} className="max-w-[600px] max-h-[600px]">
            <div className="p-6">
                <h2 className={`text-xl font-semibold ${typeStyles[type]}`}>
                    {title}
                </h2>

                <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {message}
                </p>

                <div className="flex justify-center mt-6">
                    <button
                        className="mt-6 w-1/8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={onClose}
                    >
                        확인
                    </button>
                </div>
            </div>
        </Modal>
    );
}

