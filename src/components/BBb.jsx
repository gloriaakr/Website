// Replace current contact section
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
  <form className="space-y-4">
    <input 
      type="text" 
      placeholder="Your name" 
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3"
    />
    <textarea
      placeholder="Your message"
      rows="4"
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3"
    />
    <button 
      type="submit"
      className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors"
    >
      Send Message
    </button>
  </form>
</div>