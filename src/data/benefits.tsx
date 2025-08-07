import { FiBarChart2, FiBriefcase, FiDollarSign, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Rooted in Culture. Reimagined for Today.",
        description: "For decades, Moroccan families, neighbors, and friends have used “Daret” as a way to support each other — pooling money each cycle to help someone achieve a goal: a wedding, a car, a small business, or just a safety net.",
        bullets: [
            {
                title: "Community-Powered, No Debt",
                description: "Forget interest rates and credit scores. Daret is powered by people, not banks.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Smart Reminders & Alerts",
                description: "No more chasing people. Everyone stays on track with automated updates.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Flexible for All Group Sizes",
                description: "Start a Daret with 3 people or 30. The app adapts to your group’s rhythm, frequency, and payout order.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "./images/img2.png"
    },
    {
        title: "It's Simple, Transparent, and Built for You.",
        description: "Daret isn’t just an app — it’s a movement. A smarter way to manage money collectively, inspired by tradition and powered by technology.",
        bullets: [
            {
                title: "No Need for a Bank Account",
                description: "Daret brings financial inclusion to everyone.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Plan Big, Save Small",
                description: "Can’t save alone? With Daret, small consistent contributions from each member turn into big opportunities for everyone.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "100% Mobile, Always Connected",
                description: "Create and manage your circles from anywhere. All you need is your phone.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "./images/img3.png"
    },
    {
        title: "All Daret Circles, One App.",
        description: "Manage all your Daret circles in one secure app. Easily track, join, and manage all your tontines from one place — with total privacy, smart reminders, and top-tier security.",
        bullets: [
            {
                title: "Private Circles",
                description: "Your Daret groups are encrypted end-to-end. Only members can view or manage activity.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "OTP Authentication",
                description: "Log in safely using fingerprint, facial recognition, or one-time passcodes (OTP).",
                icon: <FiUser size={26} />
            },
            {
                title: "RGPD Compliant",
                description: "We monitor your account 24/7 to prevent fraud and keep your data safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "./images/img4.png"
    },
]