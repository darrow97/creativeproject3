let scenarios = [
  {
    id: 1,
    minPower: 20,
    minChemistry: 5,
    name: "Sentinel Scout Party",
    description: "Your team crosses paths with a Sentinel Scout party. Defeat them or be targeted by the nearby Sentinel Army."
  },
  {
    id: 2,
    minPower: 30,
    minChemistry: 12,
    name: "Ambush of Apocalyptic Proportions",
    description: "Apocalypse and his Horsemen have ambushed your team. Defeat them or be defeated."
  }
]

let mock = [
  {
    id: 1,
    name: "James 'Logan' Howlett",
    affinity: "Protagonist",
    alias: "Wolverine",
    level: 4,
    image: "wolverine-james.jpg",
    pab: [
      {power: "Regenerative Healing Factor"},
      {power: "Superhuman Acute Senses, Stamina, Agility, and Reflexes"},
      {power: "Adamantium bonded skeleton and claws"},
      {power: "Psionic Resistance"},
      {power: "Insulated Weather Adaptation"}
    ]
  },
  {
    id:"2",
    name: "Anna Marie",
    affinity: "Protagonist",
    alias: "Rogue",
    level: 4,
    image: "rogue.jpg",
    pab: [
      {power: "Power Absorption"}
    ]
  },
  {
    id:"3",
    name: "Remy LeBeau",
    affinity: "Protagonist",
    alias: "Gambit",
    level: 8,
    image: "gambit.jpg",
    pab: [
      {power: "Molecular Acceleration"},
      {power: "Static Interference"},
      {power: "Precognition"},
      {power: "Total Kinetic Control"},
      {power: "Enhanced Agility"}
    ]
  },
  {
    id:"4",
    name: "Nathan Essex",
    affinity: "Antagonist",
    alias: "Mister Sinister",
    level: 6,
    image: "sinister.jpg",
    pab: [
      {power: "Cellular Shape Shifting"},
      {power: "Superhuman Stamina, Speed, Durability, Strength, and Reflexes"},
      {power: "Telepathy"},
      {power: "Telekinesis"},
      {power: "Teleportation"},
      {power: "Immortality"}
    ]
  },
  {
    id:"5",
    name: "Jean Grey",
    affinity: "Protagonist",
    alias: "Jean Grey, Phoenix, Dark Phoenix",
    level: 8,
    image: "jean-grey.jpg",
    pab: [
      {power: "Telepathy"},
      {power: "Telekinesis"},
      {power: "Phoenix Force Avatar"}
    ]
  },
  {
    id:"6",
    name: "Robert 'Bobby' Drake",
    affinity: "Protagonist",
    alias: "Iceman",
    level: 7,
    image: "iceman.jpg",
    pab: [
      {power: "Thermokinesis"},
      {power: "ThermalVision"},
      {power: "Cryokinesis"},
      {power: "Hydrokinesis"}
    ]
  },
  {
    id:"7",
    name: "Katherine 'Kitty' Pryde",
    affinity: "Protagonist",
    alias: "Shadowcat",
    level: 5,
    image: "kitty.jpg",
    pab: [
      {power: "Phasing and Phasing Extension"},
      {power: "Air Walking"},
      {power: "Electrical Disruption"},
      {power: "Telepathic Resistance"}
    ]
  },
  {
    id:"8",
    name: "Illyana Nikolievna Rasputina",
    affinity: "Protagonist",
    alias: "Magik",
    level: 8,
    image: "magik.jpg",
    pab: [
      {power: "Stepping discs"},
      {power: "Sorcery"},
      {power: "Limbo control"},
      {power: "Mystical Armor"},
      {power: "Psionic Shields"}
    ]
  },
  {
    id:"9",
    name: "Charles Xavier",
    affinity: "Protagonist",
    alias: "Professor X",
    level: 9,
    image: "xavier.jpg",
    pab: [
      {power: "Telepathy"},
      {power: "Telepathic Illusions, Cloak, and Camouflage"},
      {power: "Mind Link, Blast, Control, Possession, Transferal, and Alteration"},
      {power: "Psionic Shield, Blast"}
    ]
  },
  {
    id:"10",
    name: "Max Eisenhardt",
    affinity: "Antagonist",
    alias: "Magneto, Erik Lehnsherr",
    level: 9,
    image: "magneto.jpg",
    pab: [
      {power: "Magnetokinesis"},
      {power: "Electomagnetic Spectrum Manipulation"},
      {power: "Astral Projection"},
      {power: "Telepathic Resistance"}
    ]
  },
  {
    id:"11",
    name: "Piotr Rasputin",
    affinity: "Protagonist",
    alias: "Colossus",
    level: 5,
    image: "colossus.jpg",
    pab: [
      {power: "Organic Steel Transformation"},
      {power: "Superhuman Strength, Stamina, and Durability"}
    ]
  },
  {
    id:"12",
    name: "Scoot Summers",
    affinity: "Protagonist",
    alias: "Cyclops",
    level: 4,
    image: "cyclops.jpg",
    pab: [
      {power: "Optic Blast"},
      {power: "Spatial Awareness"},
      {power: "Energy Resistance"}
    ]
  },
  {
    id:"13",
    name: "Warren Kenneth Worthington III",
    affinity: "Protagonist",
    alias: "Angel",
    level: 6,
    image: "angel.jpg",
    pab: [
      {power: "Wings and Aerial Adaption"},
      {power: "Superhuman Stamina and Durability"},
      {power: "Regenerative Healing Factor"},
      {power: "Energy Blasts"},
      {power: "Essence Vision"}
    ]
  },
  {
    id:"14",
    name: "Laura Kinney",
    affinity: "Protagonist",
    alias: "X-23, Talon, Laura Howlett",
    level: 5,
    image: "laura.jpg",
    pab: [
      {power: "Regenerative Healing Factor"},
      {power: "Superhuman Acute Senses, Stamina, Agility, and Durability"},
      {power: "Regenerative Healing Factor"},
      {power: "Adamantium bonded skeleton and claws"}
    ]
  },
  {
    id:"15",
    name: "Nathan Christopher Charles Summers",
    affinity: "Protagonist",
    alias: "Cable",
    level: 6,
    image: "cable.jpg",
    pab: [
      {power: "Cyberpathy and Telepathy"},
      {power: "Techno-organics"},
      {power: "Psychokinesis"},
      {power: "Teleporation and Chronoskimming"},
      {power: "Intuitive Aptitude"}
    ]
  }
]

export default mock;
