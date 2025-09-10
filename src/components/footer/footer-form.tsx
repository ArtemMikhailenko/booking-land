"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Envelopes from "./envelopes"

function FooterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      console.log("Отправка данных:", { email })
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("Спасибо за подписку!")
      setEmail("")
    } catch (error) {
      console.error("Ошибка при отправке:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex max-w-[486px] flex-col gap-3">
      <h3 className="font-semibold flex items-center gap-4 text-lg leading-tight text-white">
        <Envelopes />
        Підпишіться, щоб отримувати найкращі пропозиції першим
      </h3>
      <form onSubmit={handleSubmit} className="flex items-start gap-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="rounded-full !bg-white flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-purple-500 hover:bg-purple-600 text-white w-[200px] rounded-full"
        >
          {isSubmitting ? "Підписка..." : "Підписатись"}
        </Button>
      </form>
    </div>
  )
}

export default FooterForm
