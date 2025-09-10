"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ChevronDown,
  Globe,
  Lightbulb,
  HeartHandshake,
  Leaf,
  Award,
  Heart,
  Handshake,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Send,
  UserPlus,
  Building,
  Plane,
  Droplets,
  Users,
  Building2,
} from "lucide-react"
import { useState } from "react"

export default function PantoHeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 120

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const [donationForm, setDonationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    type: "",
    receipt: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [volunteerForm, setVolunteerForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    workshops: false,
    trips: false,
    admin: false,
    communication: false,
    fundraising: false,
    weekdays: false,
    weekends: false,
    evenings: false,
    motivation: "",
    terms: false,
  })
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false)
  const [showConfirmationVolunteer, setShowConfirmationVolunteer] = useState(false)

  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    sector: "",
    contactFirstName: "",
    contactLastName: "",
    position: "",
    email: "",
    phone: "",
    financial: false,
    skills: false,
    material: false,
    visibility: false,
    partnershipGoals: "",
    budget: "",
    terms: false,
  })
  const [isSubmittingPartner, setIsSubmittingPartner] = useState(false)
  const [showConfirmationPartner, setShowConfirmationPartner] = useState(false)

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [showConfirmationContact, setShowConfirmationContact] = useState(false)

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meokrblq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: donationForm.firstName,
          lastName: donationForm.lastName,
          email: donationForm.email,
          amount: donationForm.amount,
          type: donationForm.type,
          receipt: donationForm.receipt,
          subject: "Nouveau don - Cap Horizons",
          categorie: "Donation",
        }),
      })

      if (response.ok) {
        setShowConfirmation(true)
        setDonationForm({
          firstName: "",
          lastName: "",
          email: "",
          amount: "",
          type: "",
          receipt: false,
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingVolunteer(true)

    try {
      const response = await fetch("https://formspree.io/f/meokrblq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: volunteerForm.firstName,
          lastName: volunteerForm.lastName,
          email: volunteerForm.email,
          phone: volunteerForm.phone,
          workshops: volunteerForm.workshops,
          trips: volunteerForm.trips,
          admin: volunteerForm.admin,
          communication: volunteerForm.communication,
          fundraising: volunteerForm.fundraising,
          weekdays: volunteerForm.weekdays,
          weekends: volunteerForm.weekends,
          evenings: volunteerForm.evenings,
          motivation: volunteerForm.motivation,
          terms: volunteerForm.terms,
          subject: "Nouvelle candidature bénévole - Cap Horizons",
          categorie: "Bénévole",
        }),
      })

      if (response.ok) {
        setShowConfirmationVolunteer(true)
        setVolunteerForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          workshops: false,
          trips: false,
          admin: false,
          communication: false,
          fundraising: false,
          weekdays: false,
          weekends: false,
          evenings: false,
          motivation: "",
          terms: false,
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmittingVolunteer(false)
    }
  }

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingPartner(true)

    try {
      const response = await fetch("https://formspree.io/f/meokrblq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: partnerForm.companyName,
          sector: partnerForm.sector,
          contactFirstName: partnerForm.contactFirstName,
          contactLastName: partnerForm.contactLastName,
          position: partnerForm.position,
          email: partnerForm.email,
          phone: partnerForm.phone,
          financial: partnerForm.financial,
          skills: partnerForm.skills,
          material: partnerForm.material,
          visibility: partnerForm.visibility,
          partnershipGoals: partnerForm.partnershipGoals,
          budget: partnerForm.budget,
          terms: partnerForm.terms,
          subject: "Nouvelle demande de partenariat - Cap Horizons",
          categorie: "Partenaire",
        }),
      })

      if (response.ok) {
        setShowConfirmationPartner(true)
        setPartnerForm({
          companyName: "",
          sector: "",
          contactFirstName: "",
          contactLastName: "",
          position: "",
          email: "",
          phone: "",
          financial: false,
          skills: false,
          material: false,
          visibility: false,
          partnershipGoals: "",
          budget: "",
          terms: false,
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmittingPartner(false)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingContact(true)

    try {
      const response = await fetch("https://formspree.io/f/meokrblq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          categorie: "Contact",
          _replyto: contactForm.email,
          _subject: `Contact Cap Horizons - ${contactForm.subject}`,
        }),
      })

      if (response.ok) {
        setShowConfirmationContact(true)
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmittingContact(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Group of diverse people standing together in unity"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10">
          {/* Menu Button - Left */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-[#3a855a] hover:text-[#2F855A] hover:bg-white/10 p-2 sm:p-3 border border-[#3a855a]/30 rounded-xl backdrop-blur-md min-h-[44px] min-w-[44px]"
              >
                <span className="font-medium text-sm sm:text-base">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-transparent backdrop-blur-md border border-[#3a855a]/30 shadow-xl rounded-xl text-[#3a855a]">
              {/* Menu items avec meilleur espacement mobile */}
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }, 100)
                }}
              >
                Accueil
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("about")
                  }, 100)
                }}
              >
                À propos
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("values")
                  }, 100)
                }}
              >
                Nos valeurs
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("actions")
                  }, 100)
                }}
              >
                Nos actions
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("team")
                  }, 150)
                }}
              >
                L'équipe
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("support")
                  }, 150)
                }}
              >
                Soutenir
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-[#3a855a]/10 focus:bg-[#3a855a]/10 text-[#3a855a] py-3 px-4"
                onClick={() => {
                  setTimeout(() => {
                    scrollToSection("contact")
                  }, 150)
                }}
              >
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/cap-horizons-logo.png"
              alt="Cap Horizons Logo"
              width={480}
              height={128}
              className="h-20 sm:h-24 lg:h-32 w-auto"
            />
          </div>

          {/* Empty space for balance - Right */}
          <div className="w-[60px] sm:w-[80px] lg:w-[100px]"></div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-start pt-4 sm:pt-0 lg:pt-2 text-center px-4 sm:px-6 lg:px-4">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] max-w-5xl mb-6 sm:mb-8 lg:mb-8 text-white font-sans drop-shadow-lg">
            <span className="block">Ensemble pour un</span>
            <span className="block">avenir</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2F855A] to-[#2F855A] drop-shadow-none">
              solidaire & durable
            </span>
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none sm:flex-row sm:justify-center">
            <Button
              onClick={() => scrollToSection("team")}
              className="bg-gradient-to-r from-[#2F855A] to-[#2F855A]/90 hover:from-[#2F855A]/90 hover:to-[#2F855A]/80 text-white px-8 sm:px-10 py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform min-h-[48px]"
            >
              Nous rejoindre
            </Button>
            <Button
              onClick={() => scrollToSection("actions")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2A4365] px-8 sm:px-10 py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform backdrop-blur-sm bg-white/10 min-h-[48px]"
            >
              Découvrir nos actions
            </Button>
          </div>
        </div>

        {/* Animated Scroll Down Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center cursor-pointer group" onClick={() => scrollToSection("about")}>
            <ChevronDown className="w-8 h-8 text-white/80 animate-bounce group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 bg-[#FAF5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/qui-sommes-nous.jpg"
                  alt="Équipe diversifiée collaborant lors d'une réunion de travail"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4365]/20 to-transparent"></div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight">
                  Qui sommes-nous ?
                </h2>

                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl text-[#2A4365]/80 leading-relaxed font-light">
                  <p>
                    L'association Cap Horizons propose des voyages{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold text-[#2F855A]">éducatifs</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-[#2F855A]/20 rounded animate-pulse"></span>
                    </span>
                    ,{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold text-[#2F855A]">solidaires</span>
                      <span
                        className="absolute bottom-0 left-0 w-full h-2 bg-[#2F855A]/20 rounded animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></span>
                    </span>{" "}
                    et{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold text-[#2F855A]">culturels</span>
                      <span
                        className="absolute bottom-0 left-0 w-full h-2 bg-[#2F855A]/20 rounded animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></span>
                    </span>{" "}
                    à destination de jeunes en rupture sociale ou en difficulté d'insertion.
                  </p>

                  <p>
                    Nous agissons également dans les pays du Sud pour soutenir des projets humains, durables et
                    participatifs : construction de puits, reforestation, aide aux communautés locales, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight mb-6">Nos valeurs</h2>
            <p className="text-lg lg:text-xl text-[#2A4365]/70 max-w-3xl mx-auto leading-relaxed">
              Les principes qui guident notre action et notre engagement auprès des communautés
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Ouverture au monde */}
            <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer overflow-hidden bg-white border border-[#2F855A]/20 hover:border-[#2F855A]">
              <div className="absolute inset-0 bg-[#2F855A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#2F855A]/80 to-[#2F855A]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#2F855A]/80 to-[#2F855A]/40 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F855A]/40 to-[#2F855A]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2F855A]/40 to-[#2F855A]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FAF5EF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2F855A]/10 transition-colors duration-300 border border-[#2F855A]/30">
                  <Globe
                    className="w-8 h-8 text-[#2F855A] group-hover:text-[#2F855A] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2F855A] transition-colors duration-300">
                  Ouverture au monde
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Promouvoir la découverte, l'échange et la tolérance pour construire des ponts entre les cultures.
                </p>
              </div>
            </div>

            {/* Autonomie */}
            <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer overflow-hidden bg-white border border-[#2A4365]/20 hover:border-[#2A4365]">
              <div className="absolute inset-0 bg-[#2A4365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#2A4365]/80 to-[#2A4365]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#2A4365]/80 to-[#2A4365]/40 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2A4365]/40 to-[#2A4365]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2A4365]/40 to-[#2A4365]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FAF5EF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2A4365]/10 transition-colors duration-300 border border-[#2A4365]/30">
                  <Lightbulb
                    className="w-8 h-8 text-[#2A4365] group-hover:text-[#2A4365] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2A4365] transition-colors duration-300">
                  Autonomie
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Favoriser la prise d'initiative et la responsabilité personnelle pour développer la confiance en soi.
                </p>
              </div>
            </div>

            {/* Solidarité */}
            <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer overflow-hidden bg-white border border-[#2F855A]/20 hover:border-[#2F855A]">
              <div className="absolute inset-0 bg-[#2F855A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#2F855A]/80 to-[#2F855A]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#2F855A]/80 to-[#2F855A]/40 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F855A]/40 to-[#2F855A]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2F855A]/40 to-[#2F855A]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FAF5EF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2F855A]/10 transition-colors duration-300 border border-[#2F855A]/30">
                  <HeartHandshake
                    className="w-8 h-8 text-[#2F855A] group-hover:text-[#2F855A] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2F855A] transition-colors duration-300">
                  Solidarité
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Agir ici et ailleurs pour construire des ponts entre les personnes et créer du lien social.
                </p>
              </div>
            </div>

            {/* Respect de l'humain et de la nature */}
            <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer overflow-hidden bg-white border border-[#2A4365]/20 hover:border-[#2A4365] md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-[#2A4365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#2A4365]/80 to-[#2A4365]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#2A4365]/80 to-[#2A4365]/40 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2A4365]/40 to-[#2A4365]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2A4365]/40 to-[#2A4365]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FAF5EF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2A4365]/10 transition-colors duration-300 border border-[#2A4365]/30">
                  <Leaf
                    className="w-8 h-8 text-[#2A4365] group-hover:text-[#2A4365] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2A4365] transition-colors duration-300">
                  Respect de l'humain et de la nature
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Intégrer l'écologie et la dignité dans chaque projet pour un développement durable et humain.
                </p>
              </div>
            </div>

            {/* Engagement */}
            <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-102 cursor-pointer overflow-hidden bg-white border border-[#2F855A]/20 hover:border-[#2F855A] md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-[#2F855A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#2F855A]/80 to-[#2F855A]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#2F855A]/80 to-[#2F855A]/40 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F855A]/40 to-[#2F855A]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2F855A]/40 to-[#2F855A]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#FAF5EF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2F855A]/10 transition-colors duration-300 border border-[#2F855A]/30">
                  <Award
                    className="w-8 h-8 text-[#2F855A] group-hover:text-[#2F855A] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2F855A] transition-colors duration-300">
                  Engagement
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  S'investir pleinement, avec éthique et cohérence, pour un impact positif et durable sur les
                  communautés.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-lg text-[#2A4365]/70 max-w-2xl">
                Vous partagez nos valeurs et souhaitez contribuer à notre mission ?
              </p>

              <Button
                onClick={() => scrollToSection("support")}
                className="bg-gradient-to-r from-[#3a855a] to-[#3a855a]/90 hover:from-[#3a855a]/90 hover:to-[#3a855a]/80 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Rejoindre l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Actions Section */}
      <section id="actions" className="py-16 lg:py-24 bg-[#FAF5EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight mb-6">Nos actions</h2>
            <p className="text-lg lg:text-xl text-[#2A4365]/70 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos initiatives concrètes pour accompagner les jeunes et soutenir les communautés
            </p>
          </div>

          {/* Actions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Voyages éducatifs */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#2F855A]/30">
              <div className="absolute inset-[-2px] border-2 border-[#2F855A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/voyage-educatifs.jpg"
                  alt="Jeune garçon souriant dans un transport en commun lors d'un voyage éducatif"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4365]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-[#2F855A]" strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2F855A] transition-colors duration-300">
                  Voyages éducatifs
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Organiser des voyages en Suisse et à l'étranger pour offrir aux jeunes des expériences enrichissantes
                  et formatrices, favorisant leur ouverture au monde.
                </p>
              </div>
            </div>

            {/* Projets solidaires */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#2A4365]/30">
              <div className="absolute inset-[-2px] border-2 border-[#2A4365] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/projets-solidaires.jpg"
                  alt="Groupe de personnes diverses formant un cercle et joignant leurs mains au centre"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4365]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Droplets className="w-6 h-6 text-[#2A4365]" strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2A4365] transition-colors duration-300">
                  Projets solidaires internationaux
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Soutenir des projets concrets dans les pays du Sud : accès à l'eau potable, programmes de reboisement,
                  aide aux communautés locales etc.
                </p>
              </div>
            </div>

            {/* Ateliers de préparation */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#2F855A]/30">
              <div className="absolute inset-[-2px] border-2 border-[#2F855A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/ateliers-preparation.jpg"
                  alt="Mains en train de créer et décorer lors d'un atelier de préparation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4365]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-6 h-6 text-[#2F855A]" strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2F855A] transition-colors duration-300">
                  Ateliers de préparation et suivi
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Accompagner les jeunes avant, pendant et après leurs expériences à travers des ateliers personnalisés
                  et un suivi individualisé.
                </p>
              </div>
            </div>

            {/* Partenariats */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#2A4365]/30">
              <div className="absolute inset-[-2px] border-2 border-[#2A4365] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/partenariats-institutionnels.jpg"
                  alt="Deux femmes professionnelles se donnant un high five dans un bureau moderne"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4365]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Building2 className="w-6 h-6 text-[#2A4365]" strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-4 group-hover:text-[#2A4365] transition-colors duration-300">
                  Partenariats institutionnels
                </h3>
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300">
                  Collaborer avec des foyers, institutions sociales et éducatives, ainsi qu'avec les autorités
                  compétentes en matière de protection et de décision, pour étendre notre impact et toucher plus de
                  jeunes en difficulté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight mb-6">Notre équipe</h2>
            <p className="text-lg lg:text-xl text-[#2A4365]/70 max-w-3xl mx-auto leading-relaxed">
              Rencontrez les personnes passionnées qui portent notre mission au quotidien
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Eli Saul Paez Mendez */}
            <div className="group relative bg-[#FAF5EF] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden border-2 border-transparent hover:border-[#2F855A]/30 hover:bg-[#2F855A]/5 min-h-[280px] flex flex-col">
              <div className="absolute inset-2 border-2 border-[#2F855A] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-90 group-hover:scale-100"></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-[#2F855A] to-[#2F855A]/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Co-président
                </span>
              </div>

              <div className="relative z-10 text-center flex-1 flex flex-col justify-center pt-6">
                {/* Name */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] mb-3 group-hover:text-[#2F855A] transition-colors duration-300 leading-tight">
                  Eli Saul Paez Mendez
                </h3>

                {/* Role */}
                <p className="text-[#2F855A] font-semibold text-base lg:text-lg mb-4">Co-président</p>

                {/* Description */}
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300 text-sm lg:text-base">
                  Travailleur social et porteur du projet. Il coordonne les partenariats et la vision globale.
                </p>
              </div>
            </div>

            {/* Ibrahima Sakho */}
            <div className="group relative bg-[#FAF5EF] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden border-2 border-transparent hover:border-[#2A4365]/30 hover:bg-[#2A4365]/5 min-h-[280px] flex flex-col">
              <div className="absolute inset-2 border-2 border-[#2A4365] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-90 group-hover:scale-100"></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-[#2A4365] to-[#2A4365]/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Co-président
                </span>
              </div>

              <div className="relative z-10 text-center flex-1 flex flex-col justify-center pt-6">
                {/* Name */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] mb-3 group-hover:text-[#2A4365] transition-colors duration-300 leading-tight">
                  Ibrahim Sakho
                </h3>

                {/* Role */}
                <p className="text-[#2A4365] font-semibold text-base lg:text-lg mb-4">Co-président</p>

                {/* Description */}
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300 text-sm lg:text-base">
                  Spécialiste de l'intervention communautaire. Il supervise les projets solidaires à l'international.
                </p>
              </div>
            </div>

            {/* Lardo Ola Ndoye */}
            <div className="group relative bg-[#FAF5EF] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden border-2 border-transparent hover:border-[#E53E3E]/30 hover:bg-[#E53E3E]/5 md:col-span-2 lg:col-span-1 min-h-[280px] flex flex-col">
              <div className="absolute inset-2 border-2 border-[#E53E3E] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-90 group-hover:scale-100"></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Trésorier
                </span>
              </div>

              <div className="relative z-10 text-center flex-1 flex flex-col justify-center pt-6">
                {/* Name */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] mb-3 group-hover:text-[#E53E3E] transition-colors duration-300 leading-tight">
                  Ola Ndoye
                </h3>

                {/* Role */}
                <p className="text-[#E53E3E] font-semibold text-base lg:text-lg mb-4">Trésorier</p>

                {/* Description */}
                <p className="text-[#2A4365]/70 leading-relaxed group-hover:text-[#2A4365] transition-colors duration-300 text-sm lg:text-base">
                  Responsable de la gestion financière et logistique des activités.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-lg text-[#2A4365]/70 max-w-2xl">
                Vous partagez nos valeurs et souhaitez contribuer à notre mission ?
              </p>

              <Button
                onClick={() => scrollToSection("support")}
                className="bg-gradient-to-r from-[#3a855a] to-[#3a855a]/90 hover:from-[#3a855a]/90 hover:to-[#3a855a]/80 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Rejoindre l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <section id="support" className="py-16 lg:py-24 bg-[#FAF5EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight mb-6">
              Nous soutenir
            </h2>
            <p className="text-lg lg:text-xl text-[#2A4365]/70 max-w-3xl mx-auto leading-relaxed">
              Participez à notre action et contribuez à créer un impact positif durable
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Donations */}
            <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden border-2 border-transparent hover:border-[#E53E3E]/30 h-full flex flex-col">
              <div className="absolute inset-0 border-2 border-[#E53E3E] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform scale-95 group-hover:scale-100"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF5EF] rounded-full flex items-center justify-center group-hover:bg-[#E53E3E]/10 transition-colors duration-300 border border-[#E53E3E]/30">
                    <Heart className="w-8 h-8 text-[#E53E3E]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4 text-center group-hover:text-[#E53E3E] transition-colors duration-300">
                    Dons
                  </h3>

                  <p className="text-[#2A4365]/70 leading-relaxed mb-6 text-center group-hover:text-[#2A4365] transition-colors duration-300">
                    Votre soutien financier nous permet de réaliser des projets concrets et d'avoir un impact durable
                    sur les communautés.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                      <span>Financement de projets solidaires</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                      <span>Bourses pour les jeunes participants</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#E53E3E] rounded-full mr-2"></div>
                      <span>Soutien aux communautés locales</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  {/* Donation Modal */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 hover:from-[#E53E3E]/90 hover:to-[#E53E3E]/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 transform w-full flex items-center justify-center gap-2">
                        <span className="text-sm font-bold">CHF</span>
                        Faire un don
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto mx-auto bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#2A4365] flex items-center gap-2">
                          <Heart className="w-6 h-6 text-[#E53E3E]" />
                          Faire un don
                        </DialogTitle>
                        <DialogDescription className="text-[#2A4365]/70">
                          Votre générosité nous aide à concrétiser nos projets solidaires et à accompagner plus de
                          jeunes.
                        </DialogDescription>
                      </DialogHeader>

                      {showConfirmation ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2A4365] mb-2">Merci pour votre don !</h3>
                          <p className="text-[#2A4365]/70 mb-6">
                            Nous vous contacterons bientôt pour finaliser votre don.
                          </p>
                          <Button
                            onClick={() => setShowConfirmation(false)}
                            className="bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 hover:from-[#E53E3E]/90 hover:to-[#E53E3E]/80 text-white font-semibold py-2 px-6 rounded-xl"
                          >
                            Fermer
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleDonationSubmit} className="space-y-6 mt-6">
                          <div className="space-y-4">
                            <Label className="text-[#2A4365] font-semibold">Montant du don</Label>
                            <div className="grid grid-cols-3 gap-3">
                              <Button
                                type="button"
                                variant="outline"
                                className="border-[#E53E3E]/30 text-[#E53E3E] hover:bg-[#E53E3E]/10"
                                onClick={() => setDonationForm({ ...donationForm, amount: "25" })}
                              >
                                25 CHF
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="border-[#E53E3E]/30 text-[#E53E3E] hover:bg-[#E53E3E]/10"
                                onClick={() => setDonationForm({ ...donationForm, amount: "50" })}
                              >
                                50 CHF
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="border-[#E53E3E]/30 text-[#E53E3E] hover:bg-[#E53E3E]/10"
                                onClick={() => setDonationForm({ ...donationForm, amount: "100" })}
                              >
                                100 CHF
                              </Button>
                            </div>
                            <Input
                              placeholder="Autre montant"
                              value={donationForm.amount}
                              onChange={(e) => setDonationForm({ ...donationForm, amount: e.target.value })}
                              className="border-[#2A4365]/20 focus:border-[#E53E3E] focus:ring-[#E53E3E]"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#2A4365] font-semibold">Type de don</Label>
                            <Select
                              value={donationForm.type}
                              onValueChange={(value) => setDonationForm({ ...donationForm, type: value })}
                            >
                              <SelectTrigger className="border-[#2A4365]/20 focus:border-[#E53E3E] focus:ring-[#E53E3E]">
                                <SelectValue placeholder="Sélectionnez le type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="unique">Don ponctuel</SelectItem>
                                <SelectItem value="monthly">Don mensuel</SelectItem>
                                <SelectItem value="project">Don pour un projet spécifique</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Section IBAN reste identique */}
                          <div className="space-y-4 p-4 bg-[#FAF5EF] rounded-xl border border-[#E53E3E]/20">
                            <div className="text-center">
                              <h4 className="text-lg font-semibold text-[#2A4365] mb-2">Coordonnées bancaires</h4>
                              <p className="text-sm text-[#2A4365]/70 mb-3">
                                Vous pouvez effectuer votre don directement sur notre compte bancaire
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4 border border-[#E53E3E]/30">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-[#2A4365] mb-1">IBAN</p>
                                  <p className="font-mono text-[#E53E3E] font-semibold tracking-wider">
                                    CH43 0021 5215 2139 8740 E
                                  </p>
                                </div>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="border-[#E53E3E]/30 text-[#E53E3E] hover:bg-[#E53E3E]/10"
                                  onClick={() => {
                                    navigator.clipboard.writeText("CH43 0021 5215 2139 8740 E")
                                  }}
                                >
                                  Copier
                                </Button>
                              </div>
                            </div>

                            <p className="text-xs text-[#2A4365]/60 text-center">
                              N'oubliez pas de mentionner votre nom dans la communication pour recevoir votre reçu
                              fiscal
                            </p>
                            {/* Ajouter cette nouvelle note */}
                            <div className="mt-4 p-3 bg-[#E53E3E]/10 border border-[#E53E3E]/20 rounded-lg">
                              <p className="text-sm text-[#E53E3E] font-medium text-center">
                                <Heart className="w-4 h-4 inline mr-2" /> Il vous suffit de faire le virement sur l'IBAN
                                indiqué avant de confirmer votre don. Merci pour votre générosité !
                              </p>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#2A4365]/20"></div>
                              </div>
                              <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-[#2A4365]/60">
                                  ou remplissez le formulaire ci-dessous
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="donorFirstName" className="text-[#2A4365] font-semibold">
                                Prénom *
                              </Label>
                              <Input
                                id="donorFirstName"
                                placeholder="Votre prénom"
                                value={donationForm.firstName}
                                onChange={(e) => setDonationForm({ ...donationForm, firstName: e.target.value })}
                                className="border-[#2A4365]/20 focus:border-[#E53E3E] focus:ring-[#E53E3E]"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="donorLastName" className="text-[#2A4365] font-semibold">
                                Nom *
                              </Label>
                              <Input
                                id="donorLastName"
                                placeholder="Votre nom"
                                value={donationForm.lastName}
                                onChange={(e) => setDonationForm({ ...donationForm, lastName: e.target.value })}
                                className="border-[#2A4365]/20 focus:border-[#E53E3E] focus:ring-[#E53E3E]"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="donorEmail" className="text-[#2A4365] font-semibold">
                              Email *
                            </Label>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="donorEmail" className="text-[#2A4365] font-semibold">
                              Email *
                            </Label>
                            <Input
                              id="donorEmail"
                              type="email"
                              placeholder="votre.email@exemple.com"
                              value={donationForm.email}
                              onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                              className="border-[#2A4365]/20 focus:border-[#E53E3E] focus:ring-[#E53E3E]"
                              required
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="receipt"
                              checked={donationForm.receipt}
                              onCheckedChange={(checked) => setDonationForm({ ...donationForm, receipt: !!checked })}
                              className="border-[#2A4365]/30"
                            />
                            <Label htmlFor="receipt" className="text-sm text-[#2A4365]/80">
                              Je souhaite recevoir un reçu fiscal
                            </Label>
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 hover:from-[#E53E3E]/90 hover:to-[#E53E3E]/80 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                          >
                            {isSubmitting ? "Envoi en cours..." : "Confirmer le don"}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden border-2 border-transparent hover:border-[#2F855A]/30 h-full flex flex-col">
              <div className="absolute inset-0 border-2 border-[#2F855A] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform scale-95 group-hover:scale-100"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF5EF] rounded-full flex items-center justify-center group-hover:bg-[#2F855A]/10 transition-colors duration-300 border border-[#2F855A]/30">
                    <Handshake className="w-8 h-8 text-[#2F855A]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4 text-center group-hover:text-[#2F855A] transition-colors duration-300">
                    Bénévolat
                  </h3>

                  <p className="text-[#2A4365]/70 leading-relaxed mb-6 text-center group-hover:text-[#2A4365] transition-colors duration-300">
                    Mettez vos compétences et votre temps au service de notre mission pour un impact direct sur le
                    terrain.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2F855A] rounded-full mr-2"></div>
                      <span>Animation d'ateliers</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2F855A] rounded-full mr-2"></div>
                      <span>Accompagnement de voyages</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2F855A] rounded-full mr-2"></div>
                      <span>Soutien logistique et administratif</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  {/* Volunteer Modal */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-[#2F855A] to-[#2F855A]/90 hover:from-[#2F855A]/90 hover:to-[#2F855A]/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 transform w-full flex items-center justify-center gap-2">
                        <Handshake className="w-5 h-5" />
                        Devenir bénévole
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto mx-auto bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#2A4365] flex items-center gap-2">
                          <Handshake className="w-6 h-6 text-[#2F855A]" />
                          Devenir bénévole
                        </DialogTitle>
                        <DialogDescription className="text-[#2A4365]/70">
                          Rejoignez notre équipe de bénévoles et participez concrètement à nos actions solidaires.
                        </DialogDescription>
                      </DialogHeader>

                      {showConfirmationVolunteer ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2A4365] mb-2">Merci pour votre candidature !</h3>
                          <p className="text-[#2A4365]/70 mb-6">
                            Nous vous contacterons bientôt pour discuter de votre engagement.
                          </p>
                          <Button
                            onClick={() => setShowConfirmationVolunteer(false)}
                            className="bg-gradient-to-r from-[#2F855A] to-[#2F855A]/90 hover:from-[#2F855A]/90 hover:to-[#2F855A]/80 text-white font-semibold py-2 px-6 rounded-xl"
                          >
                            Fermer
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleVolunteerSubmit} className="space-y-6 mt-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="volunteerFirstName" className="text-[#2A4365] font-semibold">
                                Prénom *
                              </Label>
                              <Input
                                id="volunteerFirstName"
                                placeholder="Votre prénom"
                                className="border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A]"
                                value={volunteerForm.firstName}
                                onChange={(e) => setVolunteerForm({ ...volunteerForm, firstName: e.target.value })}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="volunteerLastName" className="text-[#2A4365] font-semibold">
                                Nom *
                              </Label>
                              <Input
                                id="volunteerLastName"
                                placeholder="Votre nom"
                                className="border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A]"
                                value={volunteerForm.lastName}
                                onChange={(e) => setVolunteerForm({ ...volunteerForm, lastName: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="volunteerEmail" className="text-[#2A4365] font-semibold">
                              Email *
                            </Label>
                            <Input
                              id="volunteerEmail"
                              type="email"
                              placeholder="votre.email@exemple.com"
                              className="border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A]"
                              value={volunteerForm.email}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="volunteerPhone" className="text-[#2A4365] font-semibold">
                              Téléphone
                            </Label>
                            <Input
                              id="volunteerPhone"
                              placeholder="+41 79 123 45 67"
                              className="border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A]"
                              value={volunteerForm.phone}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#2A4365] font-semibold">Domaines d'intérêt *</Label>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="workshops"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.workshops}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, workshops: checked })
                                  }
                                />
                                <Label htmlFor="workshops" className="text-[#2A4365]/80">
                                  Animation d'ateliers
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="trips"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.trips}
                                  onCheckedChange={(checked) => setVolunteerForm({ ...volunteerForm, trips: checked })}
                                />
                                <Label htmlFor="trips" className="text-[#2A4365]/80">
                                  Accompagnement de voyages
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="admin"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.admin}
                                  onCheckedChange={(checked) => setVolunteerForm({ ...volunteerForm, admin: checked })}
                                />
                                <Label htmlFor="admin" className="text-[#2A4365]/80">
                                  Soutien administratif
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="communication"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.communication}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, communication: checked })
                                  }
                                />
                                <Label htmlFor="communication" className="text-[#2A4365]/80">
                                  Communication
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="fundraising"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.fundraising}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, fundraising: checked })
                                  }
                                />
                                <Label htmlFor="fundraising" className="text-[#2A4365]/80">
                                  Collecte de fonds
                                </Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#2A4365] font-semibold">Disponibilité</Label>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="volWeekdays"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.weekdays}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, weekdays: checked })
                                  }
                                />
                                <Label htmlFor="volWeekdays" className="text-[#2A4365]/80">
                                  En semaine
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="volWeekends"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.weekends}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, weekends: checked })
                                  }
                                />
                                <Label htmlFor="volWeekends" className="text-[#2A4365]/80">
                                  Week-ends
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="volEvenings"
                                  className="border-[#2A4365]/30"
                                  checked={volunteerForm.evenings}
                                  onCheckedChange={(checked) =>
                                    setVolunteerForm({ ...volunteerForm, evenings: checked })
                                  }
                                />
                                <Label htmlFor="volEvenings" className="text-[#2A4365]/80">
                                  Soirées
                                </Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="volunteerMotivation" className="text-[#2A4365] font-semibold">
                              Motivation *
                            </Label>
                            <Textarea
                              id="volunteerMotivation"
                              placeholder="Qu'est-ce qui vous motive à devenir bénévole chez Cap Horizons ?"
                              rows={4}
                              className="border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A] resize-none"
                              value={volunteerForm.motivation}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="volunteerTerms"
                              className="border-[#2A4365]/30"
                              checked={volunteerForm.terms}
                              onCheckedChange={(checked) => setVolunteerForm({ ...volunteerForm, terms: checked })}
                            />
                            <Label htmlFor="volunteerTerms" className="text-sm text-[#2A4365]/80">
                              J'accepte que mes données soient utilisées pour traiter ma candidature *
                            </Label>
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmittingVolunteer}
                            className="w-full bg-gradient-to-r from-[#2F855A] to-[#2F855A]/90 hover:from-[#2F855A]/90 hover:to-[#2F855A]/80 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            {isSubmittingVolunteer ? "Envoi en cours..." : "Envoyer ma candidature"}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Sponsorship */}
            <div className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden border-2 border-transparent hover:border-[#2A4365]/30 h-full flex flex-col">
              <div className="absolute inset-0 border-2 border-[#2A4365] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform scale-95 group-hover:scale-100"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FAF5EF] rounded-full flex items-center justify-center group-hover:bg-[#2A4365]/10 transition-colors duration-300 border border-[#2A4365]/30">
                    <Briefcase className="w-8 h-8 text-[#2A4365]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4 text-center group-hover:text-[#2A4365] transition-colors duration-300">
                    Parrainage
                  </h3>

                  <p className="text-[#2A4365]/70 leading-relaxed mb-6 text-center group-hover:text-[#2A4365] transition-colors duration-300">
                    Engagez votre entreprise ou votre organisation dans un partenariat durable et responsable.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2A4365] rounded-full mr-2"></div>
                      <span>Parrainage de projets spécifiques</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2A4365] rounded-full mr-2"></div>
                      <span>Mécénat de compétences</span>
                    </li>
                    <li className="flex items-center text-[#2A4365]/80">
                      <div className="w-2 h-2 bg-[#2A4365] rounded-full mr-2"></div>
                      <span>Partenariats institutionnels</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  {/* Partnership Modal */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-[#2A4365] to-[#2A4365]/90 hover:from-[#2A4365]/90 hover:to-[#2A4365]/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 transform w-full flex items-center justify-center gap-2">
                        <Building className="w-5 h-5" />
                        Devenir partenaire
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto mx-auto bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#2A4365] flex items-center gap-2">
                          <Building className="w-6 h-6 text-[#2A4365]" />
                          Devenir partenaire
                        </DialogTitle>
                        <DialogDescription className="text-[#2A4365]/70">
                          Établissons ensemble un partenariat qui créera un impact positif et durable.
                        </DialogDescription>
                      </DialogHeader>

                      {showConfirmationPartner ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-[#2A4365] mb-2">Merci pour votre demande !</h3>
                          <p className="text-[#2A4365]/70 mb-6">
                            Nous vous contacterons bientôt pour discuter des modalités de partenariat.
                          </p>
                          <Button
                            onClick={() => setShowConfirmationPartner(false)}
                            className="bg-gradient-to-r from-[#2A4365] to-[#2A4365]/90 hover:from-[#2A4365]/90 hover:to-[#2A4365]/80 text-white font-semibold py-2 px-6 rounded-xl"
                          >
                            Fermer
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handlePartnerSubmit} className="space-y-6 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="companyName" className="text-[#2A4365] font-semibold">
                              Nom de l'organisation *
                            </Label>
                            <Input
                              id="companyName"
                              placeholder="Nom de votre entreprise/organisation"
                              className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                              value={partnerForm.companyName}
                              onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="sector" className="text-[#2A4365] font-semibold">
                              Secteur d'activité
                            </Label>
                            <Select>
                              <SelectTrigger className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]">
                                <SelectValue placeholder="Sélectionnez votre secteur" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="tech">Technologie</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="education">Éducation</SelectItem>
                                <SelectItem value="health">Santé</SelectItem>
                                <SelectItem value="retail">Commerce</SelectItem>
                                <SelectItem value="manufacturing">Industrie</SelectItem>
                                <SelectItem value="services">Services</SelectItem>
                                <SelectItem value="ngo">ONG/Association</SelectItem>
                                <SelectItem value="public">Secteur public</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="contactFirstName" className="text-[#2A4365] font-semibold">
                                Prénom du contact *
                              </Label>
                              <Input
                                id="contactFirstName"
                                placeholder="Prénom"
                                className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                                value={partnerForm.contactFirstName}
                                onChange={(e) => setPartnerForm({ ...partnerForm, contactFirstName: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="contactLastName" className="text-[#2A4365] font-semibold">
                                Nom du contact *
                              </Label>
                              <Input
                                id="contactLastName"
                                placeholder="Nom"
                                className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                                value={partnerForm.contactLastName}
                                onChange={(e) => setPartnerForm({ ...partnerForm, contactLastName: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="position" className="text-[#2A4365] font-semibold">
                              Fonction
                            </Label>
                            <Input
                              id="position"
                              placeholder="Votre fonction dans l'organisation"
                              className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                              value={partnerForm.position}
                              onChange={(e) => setPartnerForm({ ...partnerForm, position: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="partnerEmail" className="text-[#2A4365] font-semibold">
                              Email *
                            </Label>
                            <Input
                              id="partnerEmail"
                              type="email"
                              placeholder="contact@entreprise.com"
                              className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                              value={partnerForm.email}
                              onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="partnerPhone" className="text-[#2A4365] font-semibold">
                              Téléphone
                            </Label>
                            <Input
                              id="partnerPhone"
                              placeholder="+41 79 123 45 67"
                              className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]"
                              value={partnerForm.phone}
                              onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#2A4365] font-semibold">Type de partenariat souhaité *</Label>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="financial"
                                  className="border-[#2A4365]/30"
                                  checked={partnerForm.financial}
                                  onCheckedChange={(checked) => setPartnerForm({ ...partnerForm, financial: checked })}
                                />
                                <Label htmlFor="financial" className="text-[#2A4365]/80">
                                  Soutien financier
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="skills"
                                  className="border-[#2A4365]/30"
                                  checked={partnerForm.skills}
                                  onCheckedChange={(checked) => setPartnerForm({ ...partnerForm, skills: checked })}
                                />
                                <Label htmlFor="skills" className="text-[#2A4365]/80">
                                  Mécénat de compétences
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="material"
                                  className="border-[#2A4365]/30"
                                  checked={partnerForm.material}
                                  onCheckedChange={(checked) => setPartnerForm({ ...partnerForm, material: checked })}
                                />
                                <Label htmlFor="material" className="text-[#2A4365]/80">
                                  Don en nature
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="visibility"
                                  className="border-[#2A4365]/30"
                                  checked={partnerForm.visibility}
                                  onCheckedChange={(checked) => setPartnerForm({ ...partnerForm, visibility: checked })}
                                />
                                <Label htmlFor="visibility" className="text-[#2A4365]/80">
                                  Partenariat de visibilité
                                </Label>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="partnershipGoals" className="text-[#2A4365] font-semibold">
                              Objectifs du partenariat *
                            </Label>
                            <Textarea
                              id="partnershipGoals"
                              placeholder="Décrivez vos objectifs et ce que vous souhaitez apporter à Cap Horizons..."
                              rows={4}
                              className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365] resize-none"
                              value={partnerForm.partnershipGoals}
                              onChange={(e) => setPartnerForm({ ...partnerForm, partnershipGoals: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="budget" className="text-[#2A4365] font-semibold">
                              Budget envisagé
                            </Label>
                            <Select>
                              <SelectTrigger className="border-[#2A4365]/20 focus:border-[#2A4365] focus:ring-[#2A4365]">
                                <SelectValue placeholder="Sélectionnez une fourchette" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1000">Moins de 1 000 CHF</SelectItem>
                                <SelectItem value="5000">1 000 - 5 000 CHF</SelectItem>
                                <SelectItem value="10000">5 000 - 10 000 CHF</SelectItem>
                                <SelectItem value="25000">10 000 - 25 000 CHF</SelectItem>
                                <SelectItem value="50000">25 000 - 50 000 CHF</SelectItem>
                                <SelectItem value="more">Plus de 50 000 CHF</SelectItem>
                                <SelectItem value="discuss">À discuter</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="partnerTerms"
                              className="border-[#2A4365]/30"
                              checked={partnerForm.terms}
                              onCheckedChange={(checked) => setPartnerForm({ ...partnerForm, terms: checked })}
                            />
                            <Label htmlFor="partnerTerms" className="text-sm text-[#2A4365]/80">
                              J'accepte que mes données soient utilisées pour traiter cette demande de partenariat *
                            </Label>
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmittingPartner}
                            className="w-full bg-gradient-to-r from-[#2A4365] to-[#2A4365]/90 hover:from-[#2A4365]/90 hover:to-[#2A4365]/80 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            {isSubmittingPartner ? "Envoi en cours..." : "Envoyer la demande"}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2A4365] font-sans leading-tight mb-6">Contact</h2>
            <p className="text-lg lg:text-xl text-[#2A4365]/70 max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour répondre à vos questions et vous accompagner dans votre engagement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-[#FAF5EF] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2A4365] mb-6">Envoyez-nous un message</h3>

              {showConfirmationContact ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2A4365] mb-2">Message envoyé !</h4>
                  <p className="text-[#2A4365]/70 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                  <Button
                    onClick={() => setShowConfirmationContact(false)}
                    className="bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 hover:from-[#E53E3E]/90 hover:to-[#E53E3E]/80 text-white font-semibold py-2 px-6 rounded-xl"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Votre nom"
                        className="bg-white border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A] rounded-xl"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Votre email"
                        className="bg-white border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A] rounded-xl"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Sujet"
                      className="bg-white border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A] rounded-xl"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Votre message"
                      rows={5}
                      className="bg-white border-[#2A4365]/20 focus:border-[#2F855A] focus:ring-[#2F855A] rounded-xl resize-none"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/90 hover:from-[#E53E3E]/90 hover:to-[#E53E3E]/80 text-white px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2 w-full md:w-auto disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmittingContact ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-[#FAF5EF] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-6">Nos coordonnées</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2F855A]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#2F855A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A4365]">Email</p>
                      <p className="text-[#2A4365]/70">info@cap-horizon.ch</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2A4365]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#2A4365]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A4365]">Téléphone</p>
                      <p className="text-[#2A4365]/70">+41 79 314 59 82</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E53E3E]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#E53E3E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A4365]">Adresse</p>
                      <p className="text-[#2A4365]/70">
                        26 Bernex en combes
                        <br />
                        1233 Bernex, Suisse
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-[#FAF5EF] rounded-2xl p-4 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A4365] mb-6">Notre localisation</h3>
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.243017506026!2d6.080472273637932!3d46.178975598986504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7c99d0c1ff39%3A0x783de6bde34627e2!2sAcro-Bat!5e0!3m2!1sfr!2sbe!4v1749652061235!5m2!1sfr!2sbe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#2A4365] mb-4">Questions fréquentes</h3>
              <p className="text-[#2A4365]/70 max-w-2xl mx-auto">
                Trouvez rapidement les réponses aux questions les plus courantes
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#FAF5EF] rounded-xl border border-[#2A4365]/20 px-6">
                  <AccordionTrigger className="text-[#2A4365] font-semibold hover:text-[#2F855A] transition-colors duration-300">
                    Quel est le délai de réponse à mes messages ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2A4365]/70 leading-relaxed">
                    Nous nous engageons à répondre à tous les messages dans un délai de 48 heures ouvrées. Pour les
                    demandes urgentes, n'hésitez pas à nous appeler directement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#FAF5EF] rounded-xl border border-[#2A4365]/20 px-6">
                  <AccordionTrigger className="text-[#2A4365] font-semibold hover:text-[#2F855A] transition-colors duration-300">
                    Comment puis-je aider l'association ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2A4365]/70 leading-relaxed">
                    Il existe plusieurs façons de nous soutenir : faire un don, devenir bénévole, parrainer un projet ou
                    simplement partager notre mission autour de vous. Consultez notre section "Nous soutenir" pour plus
                    de détails.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#FAF5EF] rounded-xl border border-[#2A4365]/20 px-6">
                  <AccordionTrigger className="text-[#2A4365] font-semibold hover:text-[#2F855A] transition-colors duration-300">
                    Puis-je visiter vos locaux ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2A4365]/70 leading-relaxed">
                    Bien sûr ! Nous organisons régulièrement des portes ouvertes et des rencontres. Contactez-nous pour
                    planifier une visite ou participer à nos événements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#FAF5EF] rounded-xl border border-[#2A4365]/20 px-6">
                  <AccordionTrigger className="text-[#2A4365] font-semibold hover:text-[#2F855A] transition-colors duration-300">
                    Comment suivre l'avancement des projets ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2A4365]/70 leading-relaxed">
                    Nous publions régulièrement des mises à jour sur nos réseaux sociaux et envoyons une newsletter
                    trimestrielle à nos soutiens. Vous pouvez également nous contacter pour des informations spécifiques
                    sur un projet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#FAF5EF] rounded-xl border border-[#2A4365]/20 px-6">
                  <AccordionTrigger className="text-[#2A4365] font-semibold hover:text-[#2F855A] transition-colors duration-300">
                    Les dons sont-ils déductibles des impôts ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2A4365]/70 leading-relaxed">
                    Oui, Cap Horizons est une association reconnue d'intérêt général. Vos dons sont déductibles à
                    hauteur de 66% de leur montant dans la limite de 20% de votre revenu imposable. Un reçu fiscal vous
                    sera automatiquement envoyé.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A4365] text-white">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Logo & Mission */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Cap Horizons</h3>
                  <p className="text-white/80 leading-relaxed">
                    Ensemble pour un avenir solidaire et durable. Nous créons des liens humains authentiques et
                    construisons un monde plus juste.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      Accueil
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      À propos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("values")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      Nos valeurs
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("actions")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      Nos actions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("team")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      L'équipe
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("support")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      Soutenir
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-white/80 hover:text-[#2F855A] transition-colors duration-300 hover:underline text-left"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2F855A] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-white/80">info@cap-horizon.ch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2F855A] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-white/80">+41 79 314 59 82</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E53E3E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-white/80">
                        26 Bernex en combes
                        <br />
                        1233 Bernex, Suisse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/70 text-sm">© 2024 Cap Horizons. Tous droits réservés.</div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-[#2F855A] transition-colors duration-300">
                  Mentions légales
                </a>
                <a href="#" className="text-white/70 hover:text-[#2F855A] transition-colors duration-300">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/70 hover:text-[#2F855A] transition-colors duration-300">
                  CGU
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
