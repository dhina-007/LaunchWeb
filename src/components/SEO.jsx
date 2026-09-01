import { useEffect } from 'react'

export function SEO({
  title = 'Launch Web | Web Design, Custom Software & Digital Solutions',
  description = 'Launch Web is a modern technology studio building high-speed websites, custom software applications, AI ads, and digital solutions to grow your business.',
  keywords = 'Launch Web, LaunchWeb, Launch Web studio, Web Design Company, Web Development Company, Website Development, Custom Software Development, Video Editing, AI Ads, Business Website Development',
  canonicalUrl = 'https://launchweb-kqa9.onrender.com/',
  ogImage = 'https://launchweb-kqa9.onrender.com/logo.png',
  schemaJson = null,
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    }

    // 5. Update Open Graph Meta
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    let ogImg = document.querySelector('meta[property="og:image"]')
    if (ogImg) ogImg.setAttribute('content', ogImage)

    // 6. Inject Dynamic Page Schema
    let existingScript = document.getElementById('dynamic-page-schema')
    if (existingScript) {
      existingScript.remove()
    }

    if (schemaJson) {
      const script = document.createElement('script')
      script.id = 'dynamic-page-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schemaJson)
      document.head.appendChild(script)
    }

    // Scroll to top on route change for best UX
    window.scrollTo(0, 0)
  }, [title, description, keywords, canonicalUrl, ogImage, schemaJson])

  return null
}
