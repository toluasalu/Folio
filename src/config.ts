export const siteConfig = {
  name: "Tolulope Asalu",
  title: "Mobile Engineer",
  description: "Portfolio website of Tolulope Asalu",
  accentColor: "#1d4ed8",
  social: {
    email: "johnasalu13@gmail.com",
    linkedin: "https://linkedin.com/in/john-asalu/",
    twitter: "https://x.com/TolulopeAsalu",
    github: "https://github.com/toluasalu",
  },
  aboutMe:
    "Software engineer with 3+ years of experience designing mobile applications— Specialising in Android (Kotlin) and React Native, with a proven record of delivering high-quality products across fintech, logistics, and consumer apps—skilled in architecting cross-platform systems and leading end-to-end development",
  skills: ["Typescript", "Kotlin", "Android", "React Native", "Expo"],
  projects: [
    {
      name: "Oya Riyder",
      description:
        "Ride hailing app designed exclusively for Android using Modern Android tech like Kotlin, Compose, e.t.c. Book rides at the best prices. Edit your destination on the go. Pay with ease. Oya Riyder is your trusted companion for seamless and affordable transportation.",
      link: "https://oyariyders.com/",
      skills: ["Kotlin", "Compose", "Supabase"],
    },
    {
      name: "Vuvaa Lifestyle",
      description:
        "Payments application designed to make your payment patterns easily repeatable. Built with React Native and Firebase, the app allows users to save their payment details and create templates for recurring payments, making it easier to manage and track their expenses. With a user-friendly interface and secure payment processing, Vuvaa Lifestyle is the perfect solution for anyone looking to simplify their payment experience.",
      link: "https://play.google.com/store/search?q=vuvaa+lifestyle&c=apps",
      skills: ["React Native", "Redux", "Firebase"],
    },
    {
      name: "MovSmart Abuja",
      description:
        "On-demand smart companion app for use during commuting built with React Native and Firebase, offering real-time location tracking during a trip, and the ability to share your location if there are any security concerns. The app also provides a panic button feature that allows users to quickly alert emergency contacts in case of an emergency.",
      link: "https://play.google.com/store/apps/details?id=com.movsmart.abuja",
      skills: ["React Native", "Firebase"],
    },
  ],
  experience: [
    {
      company: "Oya Riyders",
      title: "Mobile Engineer",
      dateRange: "March 2025 - Present",
      bullets: [
        "Built an MVP of a ride-hailing app from scratch using Kotlin and compose for the Native Android app for both the Rider and Driver apps, implementing features such as real-time location tracking, in-app messages and calls, ride sharing, e.t.c",
        "Implemented a one-tap SOS feature that initiates emergency voice recording to capture critical safety data",
        "Developed live ride-sharing integration, allowing users to broadcast their active trip status to trusted contacts"
      ],
    },
    {
      company: "Access Solutions",
      title: "Mobile Software Developer",
      dateRange: "March 2023 - Jan 2025",
      bullets: [
        "Led development of a mobility-focused safety and verification mobile app for the FCT transport ecosystem, implementing real-time trip tracking, secure driver identity verification, and emergency response integration",
        "Modernized the WSF Android application by migrating legacy dependencies to AndroidX and upgrading to the latest libraries, ensuring compatibility with Android 10+ and Play Store compliance. Optimized key data-sync operations, resolving critical bugs in the Submission Report and 'View Remaining Details' modules to ensure real-time data accuracy",
        "Developed key functional modules for the Vuvaa Lifestyle cross-platform application. Architected a secure QR payment flow to drive fintech-focused features for Play Store and App Store users",
      ],
    },
    {
      company: "Freelance",
      title: "Mobile Developer",
      dateRange: "Feb 2022 - Current",
      bullets: [
        "Architected Deliveri, a proof-of-concept food delivery application designed to stress-test location accuracy and battery optimization. Successfully implemented foreground and background location tracking using Expo Location and TaskManager, validating watchPositionAsync and startLocationUpdatesAsync patterns to ensure high-fidelity spatial data collection across diverse environmental conditions",
      ],
    },
  ],
  education: [
    {
      school: "Bingham University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2013 - 2017",
      achievements: [
        
      ],
    },
    {
      school: "Coursera",
      degree: "Introduction to Android Mobile Application Development",
      dateRange: "2022",
      achievements: [
        "Learnt the fundamentals of Android development using Kotlin",
        "Completed 12+ hours of coursework",
        "Learnt the fundamentals of building UI for Android applications using Jetpack Compose",
      ],
    },
  ],
};
