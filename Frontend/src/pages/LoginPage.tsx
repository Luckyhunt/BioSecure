import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { ArrowLeft, Mail, Lock, Eye, EyeOff, HelpCircle } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector'

const LoginPage = () => {
  const navigate = useNavigate()
  const { role } = useParams<{ role: string }>()
  const { t } = useLanguage()

  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    otp: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = () => {
    // Mock login - in real app, this would authenticate with backend
    if (role) {
      navigate(`/dashboard/${role}`)
    }
  }

  const handleOtpRequest = () => {
    // Mock OTP request
    alert('OTP sent to your phone!')
    setLoginMethod('otp')
  }

  const roleConfig = {
    admin: {
      title: t('adminLogin'),
      bgColor: 'bg-blue-500',
      icon: '🛠️'
    },
    farmer: {
      title: t('farmerLogin'),
      bgColor: 'bg-green-500',
      icon: '👨‍🌾'
    },
    visitor: {
      title: t('visitorLogin'),
      bgColor: 'bg-purple-500',
      icon: '👥'
    }
  }

  const currentRole = roleConfig[role as keyof typeof roleConfig] || roleConfig.farmer

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
            {/* Language Selector - Modern Design */}
            <LanguageSelector 
        variant="default" 
        position="top-right"
        className="bg-white/95 backdrop-blur-sm border-gray-200 shadow-lg"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='w-full max-w-md'
      >
        {/* Header */}
        <div className={`${currentRole.bgColor} text-white p-6 rounded-t-2xl text-center relative`}>
          <button
            onClick={() => navigate('/')}
            className='absolute left-4 top-4 text-white/80 hover:text-white transition-colors'
          >
            <ArrowLeft className='h-6 w-6' />
          </button>

          <div className='text-4xl mb-2'>{currentRole.icon}</div>
          <h1 className='text-2xl font-bold mb-1'>{currentRole.title}</h1>
          <p className='text-white/80 text-sm'>{t('welcome')}</p>
        </div>

        {/* Login Form */}
        <div className='bg-white p-6 rounded-b-2xl shadow-xl'>
          <div className='space-y-6'>
            {/* Username/Phone/Email Input */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                {t('username')}
              </label>
              <div className='relative'>
                <input
                  type='text'
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12'
                  placeholder={t('enterUsername')}
                />
                <Mail className='absolute right-3 top-3.5 h-5 w-5 text-gray-400' />
              </div>
            </div>

            {/* Password Input */}
            {loginMethod === 'password' && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('password')}
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12'
                    placeholder={t('enterPassword')}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-3.5 text-gray-400 hover:text-gray-600'
                  >
                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                  </button>
                </div>
              </div>
            )}

            {/* OTP Input */}
            {loginMethod === 'otp' && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('enterOtp')}
                </label>
                <input
                  type='text'
                  value={formData.otp}
                  onChange={(e) => handleInputChange('otp', e.target.value)}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center text-2xl font-mono tracking-widest'
                  placeholder='000000'
                  maxLength={6}
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className='space-y-3'>
              <button
                onClick={handleLogin}
                disabled={!formData.username || (loginMethod === 'password' && !formData.password) || (loginMethod === 'otp' && !formData.otp)}
                className='w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200'
              >
                {loginMethod === 'otp' ? t('verifyOtp') : t('login')}
              </button>

              {loginMethod === 'password' && role === 'farmer' && (
                <button
                  onClick={handleOtpRequest}
                  className='w-full bg-green-100 hover:bg-green-200 text-green-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200 border border-green-200'
                >
                  {t('loginWithOtp')}
                </button>
              )}
            </div>

            {/* Footer Links */}
            {loginMethod === 'password' && (
              <div className='flex justify-between text-sm text-gray-600'>
                <button className='hover:text-primary-600 transition-colors'>
                  {t('forgotPassword')}
                </button>
                <button className='hover:text-primary-600 transition-colors flex items-center gap-1'>
                  <HelpCircle className='h-4 w-4' />
                  {t('help')}
                </button>
              </div>
            )}

            {/* Switch back to password login */}
            {loginMethod === 'otp' && (
              <button
                onClick={() => setLoginMethod('password')}
                className='w-full text-center text-sm text-gray-600 hover:text-primary-600 transition-colors'
              >
                {t('backToPassword')}
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Support & Helpline - Mobile First */}
      <div className='px-4 py-6 bg-gray-50 border-t'>
        <div className='max-w-md mx-auto'>
          <h3 className='text-sm font-semibold text-gray-700 mb-3 text-center'>{t('needHelp')}</h3>
          <div className='grid grid-cols-1 gap-2 text-xs text-gray-600'>
            <div className='flex items-center justify-center gap-2 p-2 bg-white rounded-lg'>
              <span>📞</span> <strong className='text-green-600'>1800-123-4567</strong> <span>- {t('diseaseAlert')}</span>
            </div>
            <div className='flex items-center justify-center gap-2 p-2 bg-white rounded-lg'>
              <span>🛠️</span> <strong className='text-blue-600'>support@digitalfarm.gov.in</strong>
            </div>
            <div className='flex items-center justify-center gap-2 p-2 bg-white rounded-lg'>
              <span>👨‍🌾</span> <strong className='text-yellow-600'>1551</strong> <span>- {t('helpline')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage