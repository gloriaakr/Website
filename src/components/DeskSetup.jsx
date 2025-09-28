// Create new DeskSetup.jsx
export default function DeskSetup() {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">My Battle Station</h2>
          <p className="text-zinc-300 mb-8">Tools that power my creations</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Raspberry Pi Cluster', img: '/setup/pi-cluster.jpg' },
              { name: 'Mechanical Keyboard', img: '/setup/keyboard.jpg' },
              { name: 'Soldering Station', img: '/setup/solder.jpg' }
            ].map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl overflow-hidden"
              >
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <p className="p-4 text-sm">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }