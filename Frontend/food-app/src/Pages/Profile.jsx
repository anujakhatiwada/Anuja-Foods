import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextValue'
import api from '../api/axios'

const Profile = () => {
  const navigate = useNavigate()
  const { currentUser, updateUser } = useContext(AuthContext)
  const avatarSrc = currentUser?.avatar || '/noavatar.jpg'

  const handleLogout = async () => {
    try {
      await api.post(
        '/api/auth/logout',
        {},
        { withCredentials: true },
      )
    } catch (error) {
      console.log(error.message)
    } finally {
      updateUser(null)
      navigate('/login', { replace: true })
    }
  }

  return (
    <main className="min-h-[calc(100vh-70px)] bg-[#fff7ed] px-4 py-10 sm:px-6 lg:px-10">
      <section className="mx-auto grid max-w-5xl overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_24px_70px_rgba(154,79,20,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[320px] bg-gradient-to-br from-orange-400 via-red-400 to-[#3b2512] p-8 text-white sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,247,237,0.22),transparent_36%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-100">
                Your profile
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Welcome back, {currentUser?.username || 'food lover'}.
              </h1>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-6 text-white/80">
              Keep your Anuja Foods profile fresh and ready for your next craving.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10 lg:items-start lg:text-left">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-300 blur-2xl opacity-35" />
            <img
              src={avatarSrc}
              alt={`${currentUser?.username || 'User'} avatar`}
              onError={(e) => {
                e.currentTarget.src = '/noavatar.jpg'
              }}
              className="relative h-36 w-36 rounded-full border-4 border-white object-cover shadow-[0_18px_40px_rgba(154,79,20,0.22)] sm:h-44 sm:w-44"
            />
          </div>

          <div className="mt-8 w-full">
            <p className="text-sm font-semibold text-orange-500">Username</p>
            <h2 className="mt-2 break-words font-serif text-4xl font-bold text-[#1a1008]">
              {currentUser?.username || 'User'}
            </h2>
          </div>

          <div className="mt-6 w-full rounded-2xl border border-orange-100 bg-orange-50/70 px-5 py-4">
            <p className="text-sm font-semibold text-[#7a6148]">Email</p>
            <p className="mt-1 break-words text-base font-bold text-[#3b2512]">
              {currentUser?.email || 'No email added'}
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              className="h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(249,115,22,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(249,115,22,0.42)]"
            >
              Update Profile
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="h-12 rounded-2xl border border-red-100 bg-red-50 px-6 text-sm font-bold text-red-500 shadow-[0_10px_24px_rgba(239,68,68,0.12)] transition hover:-translate-y-0.5 hover:bg-red-500 hover:text-white hover:shadow-[0_16px_32px_rgba(239,68,68,0.22)]"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
