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
    "I'm a Mobile Engineer with over three years of professional experience building production applications that solve real-world problems in mobility and fintech. I specialize in creating reliable, user-focused mobile experiences with React Native and Android, particularly where real-time communication, location services, payments, and scalable backend integrations are required. Throughout my career, I've delivered production features such as secure payment workflows, live GPS tracking, background location services, push notifications, authentication, and real-time messaging. I'm currently building the Rider and Driver Android applications for a ride-hailing platform from the ground up using Kotlin, Jetpack Compose, and modern Android architecture. I own the Android implementation, collaborating closely with the iOS lead and backend team to deliver a consistent cross-platform experience",
  skills: ["Kotlin", "Android", "Jetpack Compose", "React Native", "Expo"],
  projects: [
    {
      name: "Oya Riyder",
      description:
        "Built the Android Rider application for a ride-hailing platform from the ground up using Kotlin, Jetpack Compose and Supabase. Implemented: real-time driver tracking, trip lifecycle management, ride requests, background location, push notifications, ride sharing, emergency SOS, live messaging, wallet payments",
      link: "https://oyariyders.com/",
      skills: ["Kotlin", "Compose", "Supabase", "Mapbox", "Google Maps API"],
    },
    {
      name: "Vuvaa Lifestyle",
      description:
        "Fintech mobile application focused on simplifying recurring payments and digital transactions. Built with React Native and Firebase, the platform enables users to save payment details, create reusable payment templates, and perform secure QR-based payments. I contributed to the implementation of core payment workflows and transaction management features, helping deliver a reliable cross-platform payment experience.",
      link: "https://play.google.com/store/search?q=vuvaa+lifestyle&c=apps",
      skills: ["React Native", "Redux", "Firebase"],
    },
    {
      name: "MovSmart Abuja",
      description:
       "MovSmartAbuja is a mobility-focused safety and verification platform built with React Native and Firebase for the FCT transport ecosystem. I designed and developed the application from the ground up,implementing real-time trip tracking, location sharing, secure driver verification, and emergency response workflows to improve commuter safety. Key features included a Panic Mode system that continuously streamed rider locations to an administrative dashboard, emergency contact notifications with pre-filled alerts, and automated trip escalation mechanisms for potentially unsafe journeys.",
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
