'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#1A1830] border-blue-400 text-white transition-all hover:border-blue-300 focus:border-blue-200"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#1A1830] border-blue-400 text-white transition-all hover:border-blue-300 focus:border-blue-200"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-[#1A1830] border-blue-400 text-white transition-all hover:border-blue-300 focus:border-blue-200"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors">
        Send Message
      </Button>
    </form>
  )
}

