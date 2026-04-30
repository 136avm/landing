import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

export default function Contact() {
  const formRef = useRef(null)
  const { lang } = useLang()
  const tx = t[lang].contact
  const [ip, setIp] = useState(tx.ipLoading)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    emailjs.init('n93-eaMKORwZ-sZMx')
    fetch('https://api.ipify.org?format=json')
      .then(r => r.json())
      .then(d => setIp(d.ip))
      .catch(() => setIp(tx.ipError))
  }, [])

  const validateEmail = e => {
    setEmailError(e.target.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (emailError) return
    emailjs.sendForm('service_e8hieej', 'template_adovi4u', formRef.current)
      .then(() => { alert(tx.success); formRef.current.reset(); setIp(tx.ipLoading) })
      .catch(() => alert(tx.error))
  }

  return (
    <section id="contact">
      <div className="inner">
        <div className="section-title">
          <h2>{tx.title}</h2>
        </div>
        <p className="contact-text">{tx.text}</p>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <input type="hidden" name="sender_ip" value={ip} readOnly />
          <input type="text" name="name" placeholder={tx.name} required />
          <input type="email" name="email" placeholder={tx.email} required onChange={validateEmail} />
          {emailError && <span className="form-error" style={{ display: 'block' }}>{tx.emailError}</span>}
          <input type="text" name="subject" placeholder={tx.subject} required />
          <textarea name="message" placeholder={tx.message} required />
          <button type="submit" className="submit-btn">{tx.send}</button>
        </form>
      </div>
    </section>
  )
}
