import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)
  const [ip, setIp] = useState('Obteniendo...')
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    emailjs.init('n93-eaMKORwZ-sZMx')
    fetch('https://api.ipify.org?format=json')
      .then(r => r.json())
      .then(d => setIp(d.ip))
      .catch(() => setIp('No disponible'))
  }, [])

  const validateEmail = e => {
    setEmailError(e.target.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (emailError) return
    emailjs.sendForm('service_e8hieej', 'template_adovi4u', formRef.current)
      .then(() => { alert('¡Correo enviado correctamente!'); formRef.current.reset(); setIp('Obteniendo...') })
      .catch(() => alert('Error al enviar el correo, intenta de nuevo.'))
  }

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p className="contact-text">¿Tienes algún proyecto en mente o quieres colaborar? ¡Escríbeme un mensaje!</p>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="sender_ip" value={ip} readOnly />
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required onChange={validateEmail} />
        {emailError && <span className="form-error" style={{ display: 'block' }}>Email no válido</span>}
        <input type="text" name="subject" placeholder="Asunto" required />
        <textarea name="message" placeholder="Mensaje" required />
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
  )
}
