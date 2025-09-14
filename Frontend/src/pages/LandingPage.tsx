import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { Shield, UserCheck, Eye } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector'

const LandingPage = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const roles = [
    {
      id: 'admin',
      icon: Shield,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      titleKey: 'admin',
      descKey: 'adminDesc'
    },
    {
      id: 'farmer',
      icon: UserCheck,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      titleKey: 'farmer',
      descKey: 'farmerDesc'
    },
    {
      id: 'visitor',
      icon: Eye,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      titleKey: 'visitor',
      descKey: 'visitorDesc'
    }
  ]

  const handleRoleSelect = (roleId: string) => {
    navigate(`/login/${roleId}`)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50'>
            {/* Language Selector - Modern Design */}
            <LanguageSelector 
        variant="default" 
        position="top-right"
        className="bg-white/95 backdrop-blur-sm border-gray-200 shadow-lg"
      />

      <div className='relative overflow-hidden'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              {t('title')}
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto'>
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-center mb-8'
          >
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              {t('selectRole')}
            </h2>
            <p className='text-gray-600'>
              {t('welcome')}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {roles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleRoleSelect(role.id)}
                    className={`${role.color} ${role.hoverColor} w-full p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className='flex flex-col items-center space-y-4'>
                      <IconComponent className='h-16 w-16' />
                      <div className='text-center'>
                        <h3 className='text-xl font-semibold mb-2'>
                          {t(role.titleKey)}
                        </h3>
                        <p className='text-sm opacity-90'>
                          {t(role.descKey)}
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Support & Helpline Section */}
      <footer className='bg-gray-900 text-white py-8 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left'>
            {/* Emergency Support */}
            <div className='space-y-3'>
              <h3 className='text-lg font-semibold text-green-400'>🚨 {t('emergencySupport')}</h3>
              <div className='space-y-2 text-sm'>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-green-400'>📞</span>
                  <span>{t('diseaseAlert')}: <strong className='text-green-400'>1800-123-4567</strong></span>
                </p>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-red-400'>🚑</span>
                  <span>{t('veterinaryEmergency')}: <strong className='text-red-400'>108</strong></span>
                </p>
                <p className='text-sm opacity-80'>{t('available247')}</p>
              </div>
            </div>

            {/* Technical Support */}
            <div className='space-y-3'>
              <h3 className='text-lg font-semibold text-blue-400'>🛠️ {t('technicalSupport')}</h3>
              <div className='space-y-2 text-sm'>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-blue-400'>📧</span>
                  <span>support@digitalfarm.gov.in</span>
                </p>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-blue-400'>💬</span>
                  <span>{t('whatsapp')}: <strong className='text-blue-400'>+91-9876543210</strong></span>
                </p>
                <p className='text-sm opacity-80'>{t('monSat')}</p>
              </div>
            </div>

            {/* Farmer Helpline */}
            <div className='space-y-3'>
              <h3 className='text-lg font-semibold text-yellow-400'>👨‍🌾 {t('farmerHelpline')}</h3>
              <div className='space-y-2 text-sm'>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-yellow-400'>📞</span>
                  <span>{t('helpline')}: <strong className='text-yellow-400'>1551</strong></span>
                </p>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <span className='text-yellow-400'>🌐</span>
                  <span>{t('trainingSupport')}: <strong className='text-yellow-400'>1800-HELP-FARM</strong></span>
                </p>
                <p className='text-sm opacity-80'>{t('freeServices')}</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='border-t border-gray-700 mt-6 pt-4 text-center text-sm opacity-70'>
            <p>{t('copyright')}</p>
            <p className='mt-1'>{t('ministry')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
