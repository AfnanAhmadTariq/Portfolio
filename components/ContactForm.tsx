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
    e.preventDefault();

    try {
      // Send form data to the Next.js API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Form submitted:', result);
      
      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('Something went wrong!');
      }

      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message');
    }
  };

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

