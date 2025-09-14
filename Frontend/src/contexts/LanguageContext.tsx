import React, { createContext, useContext, useState } from 'react'

export type Language = 'en' | 'hi' | 'mr' | 'gu' | 'ta'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Landing Page
    title: 'Digital Farm & Biosecurity Management Platform',
    subtitle: 'Empowering Farmers with Smart Tools',
    selectRole: 'Select your role to continue',
    welcome: 'Welcome back!',
    
    // Roles
    admin: 'Administrator',
    farmer: 'Farmer',
    visitor: 'Visitor',
    adminDesc: 'Manage farms, approvals & reports',
    farmerDesc: 'Tasks, alerts & training modules',
    visitorDesc: 'Learn about farm management',
    
    // Login
    login: 'Login',
    username: 'Username/Phone/Email',
    password: 'Password',
    enterUsername: 'Enter username, phone, or email',
    enterPassword: 'Enter your password',
    forgotPassword: 'Forgot Password?',
    help: 'Help',
    verifyOtp: 'Verify OTP',
    loginWithOtp: 'Login with OTP',
    enterOtp: 'Enter OTP sent to your phone',
    backToPassword: 'Back to password login',
    
    // Role-specific login titles
    adminLogin: 'Administrator Login',
    farmerLogin: 'Farmer Login',
    visitorLogin: 'Visitor Login',
    
    // Dashboard
    dashboardOverview: 'Dashboard Overview',
    adminDashboard: 'Administrator Dashboard',
    farmerDashboard: 'Farmer Dashboard',
    visitorDashboard: 'Visitor Dashboard',
    
    // Dashboard descriptions
    adminDescFull: 'Manage your farming ecosystem and monitor system performance',
    farmerDescFull: 'Monitor your farm health, tasks, and performance metrics',
    visitorDescFull: 'Explore nearby farms and learn about biosecurity practices',
    
    // Feature cards
    farmManagement: 'Farm Management',
    reportsAnalytics: 'Reports & Analytics',
    approvals: 'Approvals',
    trainingModules: 'Training Modules',
    myFarm: 'My Farm',
    diseaseAlerts: 'Disease Alerts',
    training: 'Training',
    farmPerformance: 'Farm Performance',
    nearbyFarms: 'Nearby Farms',
    riskAssessment: 'Risk Assessment',
    learningResources: 'Learning Resources',
    farmDirectory: 'Farm Directory',
    
    // Feature descriptions
    manageAllFarms: 'Manage all registered farms',
    viewReports: 'View system-wide reports',
    reviewRequests: 'Review and approve requests',
    manageContent: 'Manage learning content',
    manageFarm: 'Manage your farm details',
    latestAlerts: 'Latest health notifications',
    accessModules: 'Access learning modules',
    viewMetrics: 'View your farm metrics',
    exploreFarms: 'Explore local farms',
    viewScores: 'View farm risk scores',
    educationalContent: 'Access educational content',
    browseListings: 'Browse farm listings',
    
    // Quick stats
    quickStats: 'Quick Stats',
    activeFarms: 'Active Farms',
    pendingTasks: 'Pending Tasks',
    nearbyFarmsCount: 'Nearby Farms',
    pendingApprovals: 'Pending Approvals',
    activeAlerts: 'Active Alerts',
    highRiskFarms: 'High Risk Farms',
    systemHealth: 'System Health',
    farmHealthScore: 'Farm Health Score',
    averageSafetyScore: 'Average Safety Score',
    
    // Support & Helpline
    emergencySupport: 'Emergency Support',
    diseaseAlert: 'Disease Alert',
    veterinaryEmergency: 'Veterinary Emergency',
    available247: 'Available 24/7 for farm emergencies',
    technicalSupport: 'Technical Support',
    whatsapp: 'WhatsApp',
    monSat: 'Mon-Sat: 9 AM - 6 PM',
    farmerHelpline: 'Farmer Helpline',
    helpline: 'Helpline',
    trainingSupport: 'Training Support',
    freeServices: 'Free training & consultation services',
    needHelp: 'Need Help?',
    
    // Footer
    copyright: '© 2024 Digital Farm & Biosecurity Management Platform',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    
    // Logout
    logout: 'Logout',
    welcomeBack: 'Welcome!'
  },
  hi: {
    // Landing Page
    title: 'डिजिटल फार्म और बायोसेक्योरिटी प्रबंधन प्लेटफॉर्म',
    subtitle: 'स्मार्ट टूल्स के साथ किसानों को सशक्त बनाना',
    selectRole: 'जारी रखने के लिए अपनी भूमिका चुनें',
    welcome: 'वापसी पर स्वागत!',
    
    // Roles
    admin: 'प्रशासक',
    farmer: 'किसान',
    visitor: 'आगंतुक',
    adminDesc: 'फार्म, अनुमोदन और रिपोर्ट प्रबंधित करें',
    farmerDesc: 'कार्य, अलर्ट और प्रशिक्षण मॉड्यूल',
    visitorDesc: 'फार्म प्रबंधन के बारे में जानें',
    
    // Login
    login: 'लॉगिन',
    username: 'उपयोगकर्ता नाम/फोन/ईमेल',
    password: 'पासवर्ड',
    enterUsername: 'उपयोगकर्ता नाम, फोन या ईमेल दर्ज करें',
    enterPassword: 'अपना पासवर्ड दर्ज करें',
    forgotPassword: 'पासवर्ड भूल गए?',
    help: 'मदद',
    verifyOtp: 'OTP सत्यापित करें',
    loginWithOtp: 'OTP के साथ लॉगिन',
    enterOtp: 'अपने फोन पर भेजा गया OTP दर्ज करें',
    backToPassword: 'पासवर्ड लॉगिन पर वापस जाएं',
    
    // Role-specific login titles
    adminLogin: 'प्रशासक लॉगिन',
    farmerLogin: 'किसान लॉगिन',
    visitorLogin: 'आगंतुक लॉगिन',
    
    // Dashboard
    dashboardOverview: 'डैशबोर्ड अवलोकन',
    adminDashboard: 'प्रशासक डैशबोर्ड',
    farmerDashboard: 'किसान डैशबोर्ड',
    visitorDashboard: 'आगंतुक डैशबोर्ड',
    
    // Dashboard descriptions
    adminDescFull: 'अपने कृषि पारिस्थितिकी तंत्र का प्रबंधन करें और सिस्टम प्रदर्शन की निगरानी करें',
    farmerDescFull: 'अपने फार्म के स्वास्थ्य, कार्यों और प्रदर्शन मेट्रिक्स की निगरानी करें',
    visitorDescFull: 'आस-पास के फार्म खोजें और बायोसेक्योरिटी प्रथाओं के बारे में जानें',
    
    // Feature cards
    farmManagement: 'फार्म प्रबंधन',
    reportsAnalytics: 'रिपोर्ट और एनालिटिक्स',
    approvals: 'अनुमोदन',
    trainingModules: 'प्रशिक्षण मॉड्यूल',
    myFarm: 'मेरा फार्म',
    diseaseAlerts: 'रोग अलर्ट',
    training: 'प्रशिक्षण',
    farmPerformance: 'फार्म प्रदर्शन',
    nearbyFarms: 'आस-पास के फार्म',
    riskAssessment: 'जोखिम आकलन',
    learningResources: 'सीखने के संसाधन',
    farmDirectory: 'फार्म डायरेक्टरी',
    
    // Feature descriptions
    manageAllFarms: 'सभी पंजीकृत फार्म प्रबंधित करें',
    viewReports: 'सिस्टम-व्यापी रिपोर्ट देखें',
    reviewRequests: 'अनुरोधों की समीक्षा और अनुमोदन करें',
    manageContent: 'सीखने की सामग्री प्रबंधित करें',
    manageFarm: 'अपने फार्म का विवरण प्रबंधित करें',
    latestAlerts: 'नवीनतम स्वास्थ्य सूचनाएं',
    accessModules: 'सीखने के मॉड्यूल तक पहुंचें',
    viewMetrics: 'अपने फार्म के मेट्रिक्स देखें',
    exploreFarms: 'स्थानीय फार्म खोजें',
    viewScores: 'फार्म जोखिम स्कोर देखें',
    educationalContent: 'शैक्षिक सामग्री तक पहुंचें',
    browseListings: 'फार्म लिस्टिंग ब्राउज़ करें',
    
    // Quick stats
    quickStats: 'त्वरित आंकड़े',
    activeFarms: 'सक्रिय फार्म',
    pendingTasks: 'लंबित कार्य',
    nearbyFarmsCount: 'आस-पास के फार्म',
    pendingApprovals: 'लंबित अनुमोदन',
    activeAlerts: 'सक्रिय अलर्ट',
    highRiskFarms: 'उच्च जोखिम फार्म',
    systemHealth: 'सिस्टम स्वास्थ्य',
    farmHealthScore: 'फार्म स्वास्थ्य स्कोर',
    averageSafetyScore: 'औसत सुरक्षा स्कोर',
    
    // Support & Helpline
    emergencySupport: 'आपातकालीन सहायता',
    diseaseAlert: 'रोग अलर्ट',
    veterinaryEmergency: 'पशु चिकित्सा आपातकाल',
    available247: 'फार्म आपातकाल के लिए 24/7 उपलब्ध',
    technicalSupport: 'तकनीकी सहायता',
    whatsapp: 'व्हाट्सएप',
    monSat: 'सोम-शनि: सुबह 9 बजे - शाम 6 बजे',
    farmerHelpline: 'किसान हेल्पलाइन',
    helpline: 'हेल्पलाइन',
    trainingSupport: 'प्रशिक्षण सहायता',
    freeServices: 'मुफ्त प्रशिक्षण और परामर्श सेवाएं',
    needHelp: 'मदद चाहिए?',
    
    // Footer
    copyright: '© 2024 डिजिटल फार्म और बायोसेक्योरिटी प्रबंधन प्लेटफॉर्म',
    ministry: 'कृषि और किसान कल्याण मंत्रालय',
    
    // Logout
    logout: 'लॉगआउट',
    welcomeBack: 'स्वागत!'
  },
  mr: {
    // Landing Page
    title: 'डिजिटल फार्म आणि बायोसेक्युरिटी व्यवस्थापन प्लॅटफॉर्म',
    subtitle: 'स्मार्ट साधनांसह शेतकऱ्यांना सक्षम करणे',
    selectRole: 'सुरू ठेवण्यासाठी आपली भूमिका निवडा',
    welcome: 'परत स्वागत!',
    
    // Roles
    admin: 'प्रशासक',
    farmer: 'शेतकरी',
    visitor: 'भेट देणारा',
    adminDesc: 'फार्म, मान्यता आणि अहवाल व्यवस्थापित करा',
    farmerDesc: 'कार्ये, सूचना आणि प्रशिक्षण मॉड्यूल',
    visitorDesc: 'फार्म व्यवस्थापनाबद्दल जाणून घ्या',
    
    // Login
    login: 'लॉगिन',
    username: 'वापरकर्ता नाव/फोन/ईमेल',
    password: 'पासवर्ड',
    enterUsername: 'वापरकर्ता नाव, फोन किंवा ईमेल प्रविष्ट करा',
    enterPassword: 'आपला पासवर्ड प्रविष्ट करा',
    forgotPassword: 'पासवर्ड विसरलात?',
    help: 'मदत',
    verifyOtp: 'OTP सत्यापित करा',
    loginWithOtp: 'OTP सह लॉगिन',
    enterOtp: 'आपल्या फोनवर पाठवलेला OTP प्रविष्ट करा',
    backToPassword: 'पासवर्ड लॉगिनवर परत जा',
    
    // Role-specific login titles
    adminLogin: 'प्रशासक लॉगिन',
    farmerLogin: 'शेतकरी लॉगिन',
    visitorLogin: 'भेट देणारा लॉगिन',
    
    // Dashboard
    dashboardOverview: 'डॅशबोर्ड अवलोकन',
    adminDashboard: 'प्रशासक डॅशबोर्ड',
    farmerDashboard: 'शेतकरी डॅशबोर्ड',
    visitorDashboard: 'भेट देणारा डॅशबोर्ड',
    
    // Dashboard descriptions
    adminDescFull: 'आपल्या शेतीच्या इकोसिस्टमचे व्यवस्थापन करा आणि सिस्टम कार्यप्रदर्शनाचे निरीक्षण करा',
    farmerDescFull: 'आपल्या फार्मच्या आरोग्याचे, कार्यांचे आणि कार्यप्रदर्शन मेट्रिक्सचे निरीक्षण करा',
    visitorDescFull: 'जवळच्या फार्म शोधा आणि बायोसेक्युरिटी पद्धतींबद्दल जाणून घ्या',
    
    // Feature cards
    farmManagement: 'फार्म व्यवस्थापन',
    reportsAnalytics: 'अहवाल आणि विश्लेषण',
    approvals: 'मान्यता',
    trainingModules: 'प्रशिक्षण मॉड्यूल',
    myFarm: 'माझा फार्म',
    diseaseAlerts: 'रोग सूचना',
    training: 'प्रशिक्षण',
    farmPerformance: 'फार्म कार्यप्रदर्शन',
    nearbyFarms: 'जवळचे फार्म',
    riskAssessment: 'जोखीम मूल्यांकन',
    learningResources: 'शिकण्याचे स्रोत',
    farmDirectory: 'फार्म डिरेक्टरी',
    
    // Feature descriptions
    manageAllFarms: 'सर्व नोंदणीकृत फार्म व्यवस्थापित करा',
    viewReports: 'सिस्टमव्यापी अहवाल पहा',
    reviewRequests: 'विनंत्या पाहून आणि मान्य करा',
    manageContent: 'शिकण्याची सामग्री व्यवस्थापित करा',
    manageFarm: 'आपल्या फार्मचे तपशील व्यवस्थापित करा',
    latestAlerts: 'ताज्या आरोग्य सूचना',
    accessModules: 'शिकण्याचे मॉड्यूल वापरा',
    viewMetrics: 'आपल्या फार्मचे मेट्रिक्स पहा',
    exploreFarms: 'स्थानिक फार्म शोधा',
    viewScores: 'फार्म जोखीम स्कोअर पहा',
    educationalContent: 'शैक्षणिक सामग्री वापरा',
    browseListings: 'फार्म सूची ब्राउझ करा',
    
    // Quick stats
    quickStats: 'जलद आकडेवारी',
    activeFarms: 'सक्रिय फार्म',
    pendingTasks: 'प्रलंबित कार्ये',
    nearbyFarmsCount: 'जवळचे फार्म',
    pendingApprovals: 'प्रलंबित मान्यता',
    activeAlerts: 'सक्रिय सूचना',
    highRiskFarms: 'उच्च जोखीम फार्म',
    systemHealth: 'सिस्टम आरोग्य',
    farmHealthScore: 'फार्म आरोग्य स्कोअर',
    averageSafetyScore: 'सरासरी सुरक्षा स्कोअर',
    
    // Support & Helpline
    emergencySupport: 'आपत्कालीन मदत',
    diseaseAlert: 'रोग सूचना',
    veterinaryEmergency: 'पशुवैद्यकी आपत्काल',
    available247: 'फार्म आपत्कालांसाठी 24/7 उपलब्ध',
    technicalSupport: 'तांत्रिक मदत',
    whatsapp: 'व्हॉट्सअॅप',
    monSat: 'सोम-शनि: सकाळी 9 - संध्याकाळी 6',
    farmerHelpline: 'शेतकरी हेल्पलाइन',
    helpline: 'हेल्पलाइन',
    trainingSupport: 'प्रशिक्षण मदत',
    freeServices: 'विनामूल्य प्रशिक्षण आणि सल्ला सेवा',
    needHelp: 'मदत हवी?',
    
    // Footer
    copyright: '© 2024 डिजिटल फार्म आणि बायोसेक्युरिटी व्यवस्थापन प्लॅटफॉर्म',
    ministry: 'कृषी आणि शेतकरी कल्याण मंत्रालय',
    
    // Logout
    logout: 'लॉगआउट',
    welcomeBack: 'स्वागत!'
  },
  gu: {
    // Landing Page
    title: 'ડિજિટલ ફાર્મ અને બાયોસિક્યોરિટી મેનેજમેન્ટ પ્લેટફોર્મ',
    subtitle: 'સ્માર્ટ ટૂલ્સ સાથે ખેડૂતોને સશક્ત બનાવવું',
    selectRole: 'ચાલુ રાખવા માટે તમારી ભૂમિકા પસંદ કરો',
    welcome: 'ફરી સ્વાગત છે!',
    
    // Roles
    admin: 'વહીવટકર્તા',
    farmer: 'ખેડૂત',
    visitor: 'મુલાકાતી',
    adminDesc: 'ફાર્મ, મંજૂરીઓ અને અહેવાલોનું સંચાલન કરો',
    farmerDesc: 'કાર્યો, ચેતવણીઓ અને તાલીમ મોડ્યુલો',
    visitorDesc: 'ફાર્મ મેનેજમેન્ટ વિશે શીખો',
    
    // Login
    login: 'લૉગિન',
    username: 'વપરાશકર્તા નામ/ફોન/ઈમેલ',
    password: 'પાસવર્ડ',
    enterUsername: 'વપરાશકર્તા નામ, ફોન અથવા ઈમેલ દાખલ કરો',
    enterPassword: 'તમારો પાસવર્ડ દાખલ કરો',
    forgotPassword: 'પાસવર્ડ ભૂલી ગયા છો?',
    help: 'મદદ',
    verifyOtp: 'OTP ચકાસો',
    loginWithOtp: 'OTP સાથે લૉગિન કરો',
    enterOtp: 'તમારા ફોન પર મોકલેલ OTP દાખલ કરો',
    backToPassword: 'પાસવર્ડ લૉગિન પર પાછા જાઓ',
    
    // Role-specific login titles
    adminLogin: 'વહીવટકર્તા લૉગિન',
    farmerLogin: 'ખેડૂત લૉગિન',
    visitorLogin: 'મુલાકાતી લૉગિન',
    
    // Dashboard
    dashboardOverview: 'ડેશબોર્ડ અવલોકન',
    adminDashboard: 'વહીવટકર્તા ડેશબોર્ડ',
    farmerDashboard: 'ખેડૂત ડેશબોર્ડ',
    visitorDashboard: 'મુલાકાતી ડેશબોર્ડ',
    
    // Dashboard descriptions
    adminDescFull: 'તમારા ખેતી પર્યાવરણનું સંચાલન કરો અને સિસ્ટમના પ્રદર્શનનું નિરીક્ષણ કરો',
    farmerDescFull: 'તમારા ફાર્મના આરોગ્ય, કાર્યો અને પ્રદર્શન મેટ્રિક્સનું નિરીક્ષણ કરો',
    visitorDescFull: 'નજીકના ફાર્મ શોધો અને બાયોસિક્યોરિટી પદ્ધતિઓ વિશે શીખો',
    
    // Feature cards
    farmManagement: 'ફાર્મ મેનેજમેન્ટ',
    reportsAnalytics: 'અહેવાલો અને વિશ્લેષણ',
    approvals: 'મંજૂરીઓ',
    trainingModules: 'તાલીમ મોડ્યુલો',
    myFarm: 'મારો ફાર્મ',
    diseaseAlerts: 'રોગ ચેતવણીઓ',
    training: 'તાલીમ',
    farmPerformance: 'ફાર્મ પ્રદર્શન',
    nearbyFarms: 'નજીકના ફાર્મ',
    riskAssessment: 'જોખમ મૂલ્યાંકન',
    learningResources: 'શિક્ષણ સંસાધનો',
    farmDirectory: 'ફાર્મ ડિરેક્ટરી',
    
    // Feature descriptions
    manageAllFarms: 'બધા નોંધાયેલા ફાર્મનું સંચાલન કરો',
    viewReports: 'સિસ્ટમવ્યાપી અહેવાલો જુઓ',
    reviewRequests: 'વિનંતીઓની સમીક્ષા અને મંજૂરી કરો',
    manageContent: 'શિક્ષણ સામગ્રીનું સંચાલન કરો',
    manageFarm: 'તમારા ફાર્મની વિગતો સંચાલિત કરો',
    latestAlerts: 'નવીનતમ આરોગ્ય સૂચનાઓ',
    accessModules: 'શિક્ષણ મોડ્યુલો ઍક્સેસ કરો',
    viewMetrics: 'તમારા ફાર્મના મેટ્રિક્સ જુઓ',
    exploreFarms: 'સ્થાનિક ફાર્મ શોધો',
    viewScores: 'ફાર્મ જોખમ સ્કોર જુઓ',
    educationalContent: 'શૈક્ષણિક સામગ્રી ઍક્સેસ કરો',
    browseListings: 'ફાર્મ સૂચિઓ બ્રાઉઝ કરો',
    
    // Quick stats
    quickStats: 'ઝડપી આંકડા',
    activeFarms: 'સક્રિય ફાર્મ',
    pendingTasks: 'બાકી કાર્યો',
    nearbyFarmsCount: 'નજીકના ફાર્મ',
    pendingApprovals: 'બાકી મંજૂરીઓ',
    activeAlerts: 'સક્રિય ચેતવણીઓ',
    highRiskFarms: 'ઉચ્ચ જોખમ ફાર્મ',
    systemHealth: 'સિસ્ટમ આરોગ્ય',
    farmHealthScore: 'ફાર્મ આરોગ્ય સ્કોર',
    averageSafetyScore: 'સરેરાશ સલામતી સ્કોર',
    
    // Support & Helpline
    emergencySupport: 'કટોકટી સહાય',
    diseaseAlert: 'રોગ ચેતવણી',
    veterinaryEmergency: 'પશુ ડૉક્ટર કટોકટી',
    available247: 'ફાર્મ કટોકટી માટે 24/7 ઉપલબ્ધ',
    technicalSupport: 'તકનીકી સહાય',
    whatsapp: 'વ્હોટ્સએપ',
    monSat: 'સોમ-શનિ: સવારે 9 - સાંજે 6',
    farmerHelpline: 'ખેડૂત હેલ્પલાઇન',
    helpline: 'હેલ્પલાઇન',
    trainingSupport: 'તાલીમ સહાય',
    freeServices: 'મફત તાલીમ અને સલાહ સેવાઓ',
    needHelp: 'મદદ જોઈએ?',
    
    // Footer
    copyright: '© 2024 ડિજિટલ ફાર્મ અને બાયોસિક્યોરિટી મેનેજમેન્ટ પ્લેટફોર્મ',
    ministry: 'કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય',
    
    // Logout
    logout: 'લૉગઆઉટ',
    welcomeBack: 'સ્વાગત છે!'
  },
  ta: {
    // Landing Page
    title: 'டிஜிட்டல் பண்ணை மற்றும் உயிர்பாதுகாப்பு மேலாண்மை தளம்',
    subtitle: 'புத்திசாலித்தனமான கருவிகளுடன் விவசாயிகளை மேம்படுத்துதல்',
    selectRole: 'தொடர்வதற்கு உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்',
    welcome: 'மீண்டும் வருக!',
    
    // Roles
    admin: 'நிர்வாகி',
    farmer: 'விவசாயி',
    visitor: 'பார்வையாளர்',
    adminDesc: 'பண்ணைகள், ஒப்புதல்கள் மற்றும் அறிக்கைகளை நிர்வகிக்கவும்',
    farmerDesc: 'பணிகள், எச்சரிக்கைகள் மற்றும் பயிற்சி தொகுதிகள்',
    visitorDesc: 'பண்ணை மேலாண்மை பற்றி கற்கவும்',
    
    // Login
    login: 'உள்நுழைவு',
    username: 'பயனர்பெயர்/தொலைபேசி/மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    enterUsername: 'பயனர்பெயர், தொலைபேசி அல்லது மின்னஞ்சலை உள்ளீடு செய்யவும்',
    enterPassword: 'உங்கள் கடவுச்சொல்லை உள்ளீடு செய்யவும்',
    forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?',
    help: 'உதவி',
    verifyOtp: 'OTP ஐ சரிபார்க்கவும்',
    loginWithOtp: 'OTP உடன் உள்நுழைவு',
    enterOtp: 'உங்கள் தொலைபேசிக்கு அனுப்பப்பட்ட OTP ஐ உள்ளீடு செய்யவும்',
    backToPassword: 'கடவுச்சொல் உள்நுழைவுக்கு திரும்பு',
    
    // Role-specific login titles
    adminLogin: 'நிர்வாகி உள்நுழைவு',
    farmerLogin: 'விவசாயி உள்நுழைவு',
    visitorLogin: 'பார்வையாளர் உள்நுழைவு',
    
    // Dashboard
    dashboardOverview: 'டாஷ்போர்டு கண்ணோட்டம்',
    adminDashboard: 'நிர்வாகி டாஷ்போர்டு',
    farmerDashboard: 'விவசாயி டாஷ்போர்டு',
    visitorDashboard: 'பார்வையாளர் டாஷ்போர்டு',
    
    // Dashboard descriptions
    adminDescFull: 'உங்கள் விவசாய சுற்றுச்சூழலை நிர்வகித்து அமைப்பு செயல்திறனை கண்காணிக்கவும்',
    farmerDescFull: 'உங்கள் பண்ணை ஆரோக்கியம், பணிகள் மற்றும் செயல்திறன் அளவீடுகளை கண்காணிக்கவும்',
    visitorDescFull: 'அருகிலுள்ள பண்ணைகளை ஆராய்ந்து உயிர்பாதுகாப்பு நடைமுறைகளை கற்கவும்',
    
    // Feature cards
    farmManagement: 'பண்ணை மேலாண்மை',
    reportsAnalytics: 'அறிக்கைகள் மற்றும் பகுப்பாய்வு',
    approvals: 'ஒப்புதல்கள்',
    trainingModules: 'பயிற்சி தொகுதிகள்',
    myFarm: 'எனது பண்ணை',
    diseaseAlerts: 'நோய் எச்சரிக்கைகள்',
    training: 'பயிற்சி',
    farmPerformance: 'பண்ணை செயல்திறன்',
    nearbyFarms: 'அருகிலுள்ள பண்ணைகள்',
    riskAssessment: 'ஆபத்து மதிப்பீடு',
    learningResources: 'கற்றல் வளங்கள்',
    farmDirectory: 'பண்ணை அடைவு',
    
    // Feature descriptions
    manageAllFarms: 'அனைத்து பதிவுசெய்யப்பட்ட பண்ணைகளையும் நிர்வகிக்கவும்',
    viewReports: 'அமைப்பு அளவிலான அறிக்கைகளை பார்க்கவும்',
    reviewRequests: 'கோரிக்கைகளை மறுபரிசீலனை செய்து ஒப்புதல் அளிக்கவும்',
    manageContent: 'கற்றல் உள்ளடக்கத்தை நிர்வகிக்கவும்',
    manageFarm: 'உங்கள் பண்ணை விவரங்களை நிர்வகிக்கவும்',
    latestAlerts: 'சமீபத்திய ஆரோக்கிய அறிவிப்புகள்',
    accessModules: 'கற்றல் தொகுதிகளை அணுகவும்',
    viewMetrics: 'உங்கள் பண்ணை அளவீடுகளை பார்க்கவும்',
    exploreFarms: 'உள்ளூர்ப் பண்ணைகளை ஆராயவும்',
    viewScores: 'பண்ணை ஆபத்து மதிப்பெண்களை பார்க்கவும்',
    educationalContent: 'கல்வி உள்ளடக்கத்தை அணுகவும்',
    browseListings: 'பண்ணை பட்டியல்களை உலாவவும்',
    
    // Quick stats
    quickStats: 'விரைவு புள்ளியியல்',
    activeFarms: 'செயலில் உள்ள பண்ணைகள்',
    pendingTasks: 'நிலுவையில் உள்ள பணிகள்',
    nearbyFarmsCount: 'அருகிலுள்ள பண்ணைகள்',
    pendingApprovals: 'நிலுவையில் உள்ள ஒப்புதல்கள்',
    activeAlerts: 'செயலில் உள்ள எச்சரிக்கைகள்',
    highRiskFarms: 'உயர் ஆபத்து பண்ணைகள்',
    systemHealth: 'அமைப்பு ஆரோக்கியம்',
    farmHealthScore: 'பண்ணை ஆரோக்கிய மதிப்பெண்',
    averageSafetyScore: 'சராசரி பாதுகாப்பு மதிப்பெண்',
    
    // Support & Helpline
    emergencySupport: 'அவசர உதவி',
    diseaseAlert: 'நோய் எச்சரிக்கை',
    veterinaryEmergency: 'மருத்துவ அவசரநிலை',
    available247: 'பண்ணை அவசரநிலைகளுக்கு 24/7 கிடைக்கும்',
    technicalSupport: 'தொழில்நுட்ப உதவி',
    whatsapp: 'வாட்ஸ்அப்',
    monSat: 'திங்கள்-சனி: காலை 9 - மாலை 6',
    farmerHelpline: 'விவசாயி உதவி எண்',
    helpline: 'உதவி எண்',
    trainingSupport: 'பயிற்சி உதவி',
    freeServices: 'இலவச பயிற்சி மற்றும் ஆலோசனை சேவைகள்',
    needHelp: 'உதவி தேவையா?',
    
    // Footer
    copyright: '© 2024 டிஜிட்டல் பண்ணை மற்றும் உயிர்பாதுகாப்பு மேலாண்மை தளம்',
    ministry: 'விவசாயம் மற்றும் விவசாயிகள் நலன் துறை',
    
    // Logout
    logout: 'வெளியேறு',
    welcomeBack: 'வருக!'
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
