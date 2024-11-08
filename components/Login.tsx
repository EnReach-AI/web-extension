import React from "react";

import { imgLogo } from "~constants";

export const Login = () => {
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        chrome.tabs.create({ url: "http://localhost:3001" });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        chrome.tabs.create({ url: "http://localhost:3001" });
    };
    return (
        <div className="flex flex-col w-full h-full p-[30px]">
            <img src={imgLogo} className="h-[65px] mt-[90px]" alt={"logo"} />
            <button className="btn mt-auto" onClick={handleLogin}>
                Sign In to EnReach.AI
            </button>
            <p className="mb-5">
                Don't have an account? Go{" "}
                <a href={"#"} className="text-primary" onClick={handleRegister}>
                    register
                </a>{" "}
                with email
            </p>
        </div>
    );
};
