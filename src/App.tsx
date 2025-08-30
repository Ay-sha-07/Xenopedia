import React, { useState, useEffect } from 'react';
import { Search, Star, Telescope, Globe, Microscope, Zap, Clock, Filter, BookOpen, Users, Sparkles, Eye, Brain, Heart } from 'lucide-react';

interface AlienData {
  id: string;
  name: string;
  type: 'microorganism' | 'theoretical' | 'civilization' | 'cryptid' | 'fictional';
  status: 'discovered' | 'theoretical' | 'extinct' | 'active' | 'fictional';
  location: string;
  description: string;
  characteristics: string[];
  discovery_date?: string;
  image_url: string;
  story?: string;
  threat_level?: 'peaceful' | 'neutral' | 'hostile' | 'unknown';
  intelligence?: 'primitive' | 'advanced' | 'superintelligent' | 'unknown';
  first_contact?: string;
}

const alienDatabase: AlienData[] = [
  {
    id: '1',
    name: 'Tardigrades',
    type: 'microorganism',
    status: 'discovered',
    location: 'Earth & Space',
    description: 'Microscopic creatures capable of surviving in the vacuum of space, extreme temperatures, and radiation.',
    characteristics: ['Indestructible', 'Space-resistant', 'Cryptobiotic', 'Eight-legged'],
    discovery_date: '1773',
    image_url: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
    story: 'These tiny "water bears" have survived all five mass extinction events on Earth and can even survive in space for up to 10 days.',
    threat_level: 'peaceful',
    intelligence: 'primitive'
  },
  {
    id: '2',
    name: 'Europan Hydrothermal Life',
    type: 'theoretical',
    status: 'theoretical',
    location: 'Europa (Jupiter\'s Moon)',
    description: 'Hypothetical chemosynthetic organisms living around hydrothermal vents in Europa\'s subsurface ocean.',
    characteristics: ['Chemosynthetic', 'Extremophile', 'Aquatic', 'Bioluminescent'],
    image_url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    story: 'Scientists believe Europa\'s ocean contains twice as much water as all Earth\'s oceans combined, making it a prime candidate for alien life.',
    threat_level: 'peaceful',
    intelligence: 'unknown'
  },
  {
    id: '3',
    name: 'The Greys',
    type: 'cryptid',
    status: 'theoretical',
    location: 'Zeta Reticuli System',
    description: 'Classic humanoid beings described in numerous UFO encounters, characterized by grey skin and large black eyes.',
    characteristics: ['Telepathic', 'Advanced Technology', 'Humanoid', 'Large Cranium'],
    image_url: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg',
    story: 'First reported during the Betty and Barney Hill abduction case in 1961, these beings have become the archetypal alien in popular culture.',
    threat_level: 'neutral',
    intelligence: 'superintelligent',
    first_contact: '1961'
  },
  {
    id: '4',
    name: 'Vulcans',
    type: 'fictional',
    status: 'fictional',
    location: 'Vulcan (40 Eridani A)',
    description: 'Highly logical humanoid species known for their pointed ears, green blood, and suppression of emotions.',
    characteristics: ['Logical', 'Telepathic', 'Long-lived', 'Peaceful'],
    image_url: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg',
    story: 'Created by Gene Roddenberry for Star Trek, Vulcans represent the pinnacle of logical thinking and peaceful coexistence.',
    threat_level: 'peaceful',
    intelligence: 'superintelligent',
    first_contact: '2063 (fictional)'
  },
  {
    id: '5',
    name: 'Xenomorphs',
    type: 'fictional',
    status: 'fictional',
    location: 'LV-426 & Various Worlds',
    description: 'Highly aggressive parasitic species with acid blood, designed as the perfect organism for survival and reproduction.',
    characteristics: ['Parasitic', 'Acid Blood', 'Biomechanical', 'Highly Aggressive'],
    image_url: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg',
    story: 'H.R. Giger\'s nightmarish creation for the Alien franchise represents our deepest fears about hostile alien life.',
    threat_level: 'hostile',
    intelligence: 'advanced',
    first_contact: '2122 (fictional)'
  },
  {
    id: '6',
    name: 'Atmospheric Jellyfish',
    type: 'theoretical',
    status: 'theoretical',
    location: 'Gas Giant Atmospheres',
    description: 'Hypothetical aerial life forms that could float in the dense atmospheres of gas giants like Jupiter.',
    characteristics: ['Atmospheric', 'Gas-filled', 'Electrical', 'Translucent'],
    image_url: 'https://images.pexels.com/photos/1624500/pexels-photo-1624500.jpeg',
    story: 'Carl Sagan proposed these creatures could exist as living balloons in Jupiter\'s atmosphere, feeding on organic compounds.',
    threat_level: 'peaceful',
    intelligence: 'primitive'
  },
  {
    id: '7',
    name: 'The Predators (Yautja)',
    type: 'fictional',
    status: 'fictional',
    location: 'Yautja Prime',
    description: 'Advanced hunter species that travels the galaxy seeking worthy prey for sport and honor.',
    characteristics: ['Hunter Culture', 'Cloaking Technology', 'Thermal Vision', 'Honor-bound'],
    image_url: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
    story: 'These intergalactic hunters have been visiting Earth for millennia, inspiring ancient civilizations and hunting the most dangerous prey.',
    threat_level: 'hostile',
    intelligence: 'superintelligent',
    first_contact: 'Ancient Times (fictional)'
  },
  {
    id: '8',
    name: 'Klingons',
    type: 'fictional',
    status: 'fictional',
    location: 'Qo\'noS (Kronos)',
    description: 'Warrior species with a rigid honor code, known for their aggressive nature and advanced military technology.',
    characteristics: ['Warrior Culture', 'Honor-bound', 'Aggressive', 'Ridged Foreheads'],
    image_url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    story: 'Originally enemies of the Federation, Klingons represent the noble warrior archetype with their complex honor system.',
    threat_level: 'neutral',
    intelligence: 'advanced',
    first_contact: '2151 (fictional)'
  },
  {
    id: '9',
    name: 'Martian Microbes',
    type: 'theoretical',
    status: 'theoretical',
    location: 'Mars',
    description: 'Potential subsurface microorganisms that could exist in Mars\' underground water reserves.',
    characteristics: ['Subsurface', 'Extremophile', 'Anaerobic', 'Ancient'],
    image_url: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg',
    story: 'The discovery of methane plumes and seasonal changes on Mars suggests possible microbial life still exists beneath the surface.',
    threat_level: 'peaceful',
    intelligence: 'primitive'
  },
  {
    id: '10',
    name: 'The Borg',
    type: 'fictional',
    status: 'fictional',
    location: 'Delta Quadrant',
    description: 'Cybernetic collective consciousness that assimilates other species into their hive mind.',
    characteristics: ['Collective Consciousness', 'Cybernetic', 'Assimilation', 'Adaptive'],
    image_url: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg',
    story: 'The ultimate representation of technological singularity gone wrong, where individuality is sacrificed for collective perfection.',
    threat_level: 'hostile',
    intelligence: 'superintelligent',
    first_contact: '2365 (fictional)'
  },
  {
    id: '11',
    name: 'Chupacabra',
    type: 'cryptid',
    status: 'theoretical',
    location: 'Puerto Rico & Latin America',
    description: 'Mysterious creature reported to drain the blood of livestock, described as reptilian with spines.',
    characteristics: ['Blood-draining', 'Reptilian', 'Spined', 'Nocturnal'],
    image_url: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg',
    story: 'First reported in Puerto Rico in 1995, this cryptid has sparked numerous investigations and cultural phenomena across Latin America.',
    threat_level: 'hostile',
    intelligence: 'unknown',
    first_contact: '1995'
  },
  {
    id: '12',
    name: 'E.T. the Extra-Terrestrial',
    type: 'fictional',
    status: 'fictional',
    location: 'Unknown Home Planet',
    description: 'Gentle, wise alien botanist with healing powers and a strong desire to return home.',
    characteristics: ['Healing Powers', 'Telepathic', 'Botanist', 'Gentle Nature'],
    image_url: 'https://images.pexels.com/photos/1624500/pexels-photo-1624500.jpeg',
    story: 'Steven Spielberg\'s beloved character showed us that aliens could be friends, not foes, changing how we imagine first contact.',
    threat_level: 'peaceful',
    intelligence: 'advanced',
    first_contact: '1982 (fictional)'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedThreat, setSelectedThreat] = useState<string>('all');
  const [filteredAliens, setFilteredAliens] = useState(alienDatabase);
  const [selectedAlien, setSelectedAlien] = useState<AlienData | null>(null);

  useEffect(() => {
    let filtered = alienDatabase.filter(alien => {
      const matchesSearch = alien.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           alien.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           alien.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           alien.characteristics.some(char => char.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = selectedType === 'all' || alien.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || alien.status === selectedStatus;
      const matchesThreat = selectedThreat === 'all' || alien.threat_level === selectedThreat;
      
      return matchesSearch && matchesType && matchesStatus && matchesThreat;
    });
    
    setFilteredAliens(filtered);
  }, [searchTerm, selectedType, selectedStatus, selectedThreat]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'microorganism': return <Microscope className="w-5 h-5" />;
      case 'theoretical': return <Star className="w-5 h-5" />;
      case 'civilization': return <Globe className="w-5 h-5" />;
      case 'cryptid': return <Eye className="w-5 h-5" />;
      case 'fictional': return <BookOpen className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'discovered': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30';
      case 'theoretical': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'extinct': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'active': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'fictional': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case 'peaceful': return 'text-green-400';
      case 'neutral': return 'text-yellow-400';
      case 'hostile': return 'text-red-400';
      case 'unknown': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getIntelligenceIcon = (intelligence: string) => {
    switch (intelligence) {
      case 'primitive': return <Microscope className="w-4 h-4" />;
      case 'advanced': return <Brain className="w-4 h-4" />;
      case 'superintelligent': return <Sparkles className="w-4 h-4" />;
      case 'unknown': return <Eye className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-purple-950"></div>
        <div className="stars absolute inset-0"></div>
        <div className="nebula absolute inset-0 bg-gradient-radial from-blue-900/30 via-transparent to-transparent"></div>
        <div className="shooting-stars absolute inset-0"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-md bg-black/20 border-b border-blue-500/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Telescope className="w-8 h-8 text-blue-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Galactic Xenodatabase
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-blue-300">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{alienDatabase.length} Species Cataloged</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Exploring the Unknown</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Life Beyond Earth
            </h2>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Journey through the cosmos and discover the fascinating world of extraterrestrial life - 
              from microscopic extremophiles to advanced civilizations and legendary fictional species.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 group-hover:text-blue-300 transition-colors" />
                <input
                  type="text"
                  placeholder="Search alien species, locations, characteristics, or stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-blue-950/30 backdrop-blur-md border border-blue-500/30 rounded-2xl text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-blue-950/40"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-blue-400" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-blue-950/30 backdrop-blur-md border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-950/40 transition-all"
                  >
                    <option value="all">All Types</option>
                    <option value="microorganism">Microorganisms</option>
                    <option value="theoretical">Theoretical</option>
                    <option value="civilization">Civilizations</option>
                    <option value="cryptid">Cryptids</option>
                    <option value="fictional">Fictional</option>
                  </select>
                </div>
                
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-blue-950/30 backdrop-blur-md border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-950/40 transition-all"
                >
                  <option value="all">All Status</option>
                  <option value="discovered">Discovered</option>
                  <option value="theoretical">Theoretical</option>
                  <option value="extinct">Extinct</option>
                  <option value="active">Active</option>
                  <option value="fictional">Fictional</option>
                </select>

                <select
                  value={selectedThreat}
                  onChange={(e) => setSelectedThreat(e.target.value)}
                  className="bg-blue-950/30 backdrop-blur-md border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-950/40 transition-all"
                >
                  <option value="all">All Threat Levels</option>
                  <option value="peaceful">Peaceful</option>
                  <option value="neutral">Neutral</option>
                  <option value="hostile">Hostile</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Alien Cards Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAliens.map((alien) => (
                <div
                  key={alien.id}
                  onClick={() => setSelectedAlien(alien)}
                  className="group bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={alien.image_url}
                      alt={alien.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(alien.status)}`}>
                        {alien.status}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`p-2 rounded-full bg-black/50 backdrop-blur-sm ${getThreatColor(alien.threat_level || 'unknown')}`}>
                        <Heart className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(alien.type)}
                        <h3 className="text-xl font-bold text-blue-100">{alien.name}</h3>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-300/80">
                        {getIntelligenceIcon(alien.intelligence || 'unknown')}
                        <span className="text-xs capitalize">{alien.intelligence}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3 text-blue-300/80">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">{alien.location}</span>
                    </div>
                    
                    {(alien.discovery_date || alien.first_contact) && (
                      <div className="flex items-center space-x-2 mb-3 text-purple-300/80">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">
                          {alien.discovery_date ? `Discovered: ${alien.discovery_date}` : `First Contact: ${alien.first_contact}`}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-blue-100/90 text-sm leading-relaxed mb-4 line-clamp-3">
                      {alien.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-300">Key Traits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {alien.characteristics.slice(0, 3).map((char, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-xs text-blue-200"
                          >
                            {char}
                          </span>
                        ))}
                        {alien.characteristics.length > 3 && (
                          <span className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-200">
                            +{alien.characteristics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-blue-500/20">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Story</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredAliens.length === 0 && (
              <div className="text-center py-16">
                <div className="relative inline-block mb-6">
                  <Star className="w-16 h-16 text-blue-400/50 mx-auto animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">No Life Forms Found</h3>
                <p className="text-blue-100/60 mb-4">The cosmos is vast, but your search criteria might be too specific.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedStatus('all');
                    setSelectedThreat('all');
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-6 border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              Cosmic Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-300 mb-2 counter" data-target="1">1</div>
                <div className="text-blue-100/80 text-sm">Confirmed Species</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-300 mb-2">3</div>
                <div className="text-blue-100/80 text-sm">Theoretical Forms</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-300 mb-2">5</div>
                <div className="text-blue-100/80 text-sm">Fictional Species</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-300 mb-2">5,000+</div>
                <div className="text-blue-100/80 text-sm">Exoplanets</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              Fascinating Encounters
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-xl font-bold text-blue-100">The Drake Equation</h4>
                </div>
                <p className="text-blue-100/80 leading-relaxed">
                  Formulated by astronomer Frank Drake in 1961, this equation attempts to estimate the number of 
                  communicating extraterrestrial civilizations in our galaxy. With conservative estimates, 
                  there could be thousands of alien civilizations in the Milky Way alone.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-400" />
                  <h4 className="text-xl font-bold text-purple-100">The Fermi Paradox</h4>
                </div>
                <p className="text-purple-100/80 leading-relaxed">
                  If the universe is so vast and old, where is everybody? This paradox highlights the contradiction 
                  between the high probability of alien life and our lack of contact with it. Perhaps they're 
                  already here, or perhaps we're truly alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <Telescope className="w-6 h-6 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-lg font-semibold text-blue-300">Galactic Xenodatabase</span>
            </div>
            <p className="text-blue-100/60 text-sm mb-6">
              Expanding our understanding of life in the universe, one discovery at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-blue-300/50 max-w-4xl mx-auto">
              <div>
                "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying." 
                <br />- Arthur C. Clarke
              </div>
              <div>
                "The universe is not only stranger than we imagine, it is stranger than we can imagine." 
                <br />- J.B.S. Haldane
              </div>
              <div>
                "Somewhere, something incredible is waiting to be known." 
                <br />- Carl Sagan
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal for Alien Details */}
      {selectedAlien && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedAlien(null)}>
          <div className="bg-gradient-to-br from-blue-950/90 to-purple-950/90 backdrop-blur-md border border-blue-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedAlien.image_url}
                alt={selectedAlien.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <button
                onClick={() => setSelectedAlien(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center space-x-3 mb-2">
                  {getTypeIcon(selectedAlien.type)}
                  <h2 className="text-2xl font-bold text-white">{selectedAlien.name}</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedAlien.status)}`}>
                    {selectedAlien.status}
                  </span>
                  <span className={`text-sm ${getThreatColor(selectedAlien.threat_level || 'unknown')}`}>
                    {selectedAlien.threat_level} threat
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-2 text-blue-300/80">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{selectedAlien.location}</span>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Description</h3>
                <p className="text-blue-100/90 leading-relaxed">{selectedAlien.description}</p>
              </div>
              
              {selectedAlien.story && (
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Story & Background</h3>
                  <p className="text-blue-100/90 leading-relaxed">{selectedAlien.story}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Characteristics</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedAlien.characteristics.map((char, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-sm text-blue-200 text-center"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/20">
                <div>
                  <h4 className="text-sm font-semibold text-blue-300 mb-1">Intelligence Level</h4>
                  <div className="flex items-center space-x-2">
                    {getIntelligenceIcon(selectedAlien.intelligence || 'unknown')}
                    <span className="text-blue-100 capitalize">{selectedAlien.intelligence || 'Unknown'}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-300 mb-1">Threat Assessment</h4>
                  <div className="flex items-center space-x-2">
                    <Heart className={`w-4 h-4 ${getThreatColor(selectedAlien.threat_level || 'unknown')}`} />
                    <span className={`capitalize ${getThreatColor(selectedAlien.threat_level || 'unknown')}`}>
                      {selectedAlien.threat_level || 'Unknown'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;