import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Eye, Triangle, Compass, Pill as Pillar, Star, Crown } from "lucide-react"

export default function SacredCodex() {
  return (
    <div className="min-h-screen parchment-bg">
      {/* Title Page */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Triangle className="w-96 h-96 text-secondary masonic-symbol" />
            </div>
            <div className="relative z-10">
              <h1 className="gothic-font text-6xl md:text-8xl text-secondary mb-4 tracking-wider">THE SACRED</h1>
              <h1 className="gothic-font text-6xl md:text-8xl text-primary mb-8 tracking-wider">CODEX</h1>
              <div className="flex justify-center items-center gap-4 mb-8">
                <Eye className="w-8 h-8 text-secondary masonic-symbol" />
                <Compass className="w-8 h-8 text-primary masonic-symbol" />
                <Eye className="w-8 h-8 text-secondary masonic-symbol" />
              </div>
              <p className="text-muted-foreground text-lg italic">An Illuminated Manuscript of Ancient Wisdom</p>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12 border-2 border-secondary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="gothic-font text-2xl text-secondary flex items-center justify-center gap-2">
                <Crown className="w-6 h-6 masonic-symbol" />
                Contents of the Sacred Codex
                <Crown className="w-6 h-6 masonic-symbol" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Prologue – The Forgotten Anointing</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  I
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Part I – The Oil of Heaven and Earth</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  II
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Part II – The Hidden Science of Chrism</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  III
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Part III – Rituals and Preservation</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  IV
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Part IV – The Path to Inner Illumination</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  V
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded border border-border/50 hover:bg-muted/20 transition-colors">
                <span className="font-medium">Epilogue – Returning to the World</span>
                <Badge variant="outline" className="text-secondary border-secondary/50">
                  VI
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Prologue */}
          <Card className="mb-12 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4">
                <Eye className="w-12 h-12 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-primary mb-4">Prologue</CardTitle>
              <p className="gothic-font text-xl text-secondary italic">The Forgotten Anointing</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In a world that hums with ceaseless digital pulse, the old rites of anointing seem like relics,
                  whispers of a past that once held power in its touch. Kings, when crowned, were not merely adorned
                  with metals and gems—they were anointed, their essence fused with oil that spoke of authority,
                  clarity, and connection to the unseen. Priests, too, rose into their sacred role only after the same
                  ritual; the temples themselves waited in silence for the sacred oil to touch stone and wood, sealing
                  the space with invisible threads of devotion. This was no casual application; this was Holy Chrism,
                  the concentrated essence of heaven and earth, reserved, guarded, and revered, as secretive as a
                  blueprint for a machine that could alter reality.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Time marches forward, and the world hums differently now. Machines groan under the weight of
                  computation, calculating, sorting, predicting. Artificial intelligence claims the repetitive, the
                  monotonous, the predictable. With this mechanical burden lifted, humans find themselves floating in
                  the new space-time of mental freedom—a bandwidth unchained. The question emerges, urgent and unasked:
                  What will we do with this unleashed cognition?
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It is here, in this liminal gap between effort and insight, that the old wisdom of Holy Chrism
                  reappears—not as ritual, not as superstition, but as metaphor and mechanism for inner evolution. The
                  ancients understood a duality that modernity often ignores: outer ceremony mirrors inner architecture.
                  Olive oil, balsam, and sacred spices were more than fragrant mixtures; they were symbolic keys to the
                  psyche's own operating system, triggers for cognitive calibration. The Moon, ever constant in its
                  orbit, does more than pull at tides—it subtly synchronizes with neural rhythms, encoding time in the
                  brain's hidden corridors.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Inside the human skull, at the core of neural labyrinths, lies a secretive current—a pulsation, a
                  secretion, aligned with the lunar cycle, the body's own Holy Chrism. Preserved, understood, and
                  honored, this inner oil becomes clarity distilled into thought, resilience transformed into vision, a
                  natural catalyst for breakthrough.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Now, poised at the threshold of a massive societal upgrade, humans stand between digital automation
                  and internal awakening. AI devours the mundane. Earth provides herbs and spices with bio-harmonic
                  properties. Lunar cycles map psychic tides like a cosmic GPS. And the inner spark—the secretion, the
                  sacred current—anoints every brain ready to evolve, every body ready to transform.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This is not nostalgia, nor a call to ancient superstition. This is a system reboot. Minds are
                  factories of genius waiting to operate. Bodies are temples waiting to resonate. Lunar cycles are
                  launchpads for evolution. The Forgotten Anointing is no longer a relic; it is an invitation, a signal,
                  a beacon. Not to return to the past, but to accelerate forward into the inner frontier encoded within
                  our DNA.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary masonic-symbol" />
                  <Star className="w-4 h-4 text-primary masonic-symbol" />
                  <Star className="w-4 h-4 text-secondary masonic-symbol" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Part I */}
          <Card className="mb-12 border-2 border-secondary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <Star className="w-8 h-8 text-secondary/30 masonic-symbol" />
                <Pillar className="w-8 h-8 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-secondary mb-4">Part I</CardTitle>
              <p className="gothic-font text-xl text-primary italic">The Oil of Heaven and Earth</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">
                    1. The Outer Oil: Matter That Remembers the Divine
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      When you hear oil, maybe your mind jumps to the kitchen shelf — olive oil pressed green-gold,
                      drizzled on bread or salads. But in the old world, oil was more than food or fat. It was light,
                      healing, and power condensed in liquid form.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Olive oil burned in temple lamps, keeping night alive with a golden flame. It carried medicine
                      into wounds, softened skin cracked by desert sun, sealed wood against decay. Yet its most
                      mysterious role was anointing: when kings, priests, and altars were smeared with oil, something
                      invisible shifted. They were no longer just human, no longer just stone or wood — they were set
                      apart, encoded with sacred status.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The ancients insisted the recipe was precise. Not any oil would do. The biblical text whispers of
                      Exodus 30, where God instructs Moses to blend:
                    </p>
                    <div className="ml-6 space-y-2 text-secondary">
                      <p>
                        <strong>Pure olive oil</strong> – base and carrier, sun trapped in fruit.
                      </p>
                      <p>
                        <strong>Myrrh</strong> – resin of desert trees, bitter-sweet, preservative of bodies in death
                        and awakener of spirit in life.
                      </p>
                      <p>
                        <strong>Cinnamon</strong> – fiery bark, warming blood, stirring desire and focus.
                      </p>
                      <p>
                        <strong>Cassia</strong> – spice of expansion, fragrance of authority and abundance.
                      </p>
                      <p>
                        <strong>Calamus (sweet reed)</strong> – aromatic stalk rising straight, symbol of uprightness
                        and channel.
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Together, this blend wasn't perfume. It was off-limits technology: "Whoever makes it for ordinary
                      use shall be cut off." A formula for sacred identity, reserved for the temple system.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      To pour this chrism was to overlay the mundane with the signature of heaven. The priest's
                      forehead, the altar's stone, the king's crown — all became interfaces between matter and divinity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      We could say: the oil was Earth's way of signing a contract with Spirit.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">
                    2. The Inner Oil: The Hidden Alchemy of the Body
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Fast-forward to now. We read Exodus like history. But in the human body, another layer hums
                      quietly. Deep in the skull's cavern, protected by bone, the brain distills its own subtle oils and
                      fluids.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Endocrinology tells us of pineal secretions, melatonin regulating night, DMT flickering in dreams
                      and near-death. The pituitary pulses hormones that orchestrate growth, reproduction, mood. Deeper
                      in, the hypothalamus syncs cycles with light and dark.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The esoteric tradition says: hidden among these fluids is a sacred chrism, a subtle secretion,
                      secreted monthly, aligned with the Moon's cycle. A drop of shimmering potential, like liquid
                      consciousness.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This "oil" isn't olive or myrrh. It's neurochemical, electromagnetic, psycho-spiritual. When
                      wasted — through stress, distraction, indulgence — it evaporates into nothing. But when preserved
                      and elevated, it climbs the spinal channel, feeding neurons, opening perception, refining mind.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ancient yogis called it bindu. Hermeticists hinted at the dew of heaven. Early Christians
                      whispered of a "Chrism not made by hands," the unction of truth. Joseph Carey wrote in God-Man:
                      The Word Made Flesh that the human head is a micro-temple, secreting its own anointing oil.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      If outer oil made kings and priests, this inner oil makes visionaries and awakened humans.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">3. The Mirror of Outer and Inner</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Why spices? Why oils? Why such care for recipes? Because the outer ritual was always a mirror of
                      the inner alchemy.
                    </p>
                    <div className="ml-6 space-y-2 text-secondary">
                      <p>
                        Olive oil = solar light condensed in matter → inner chrism = brain's light condensed in fluid.
                      </p>
                      <p>Myrrh = preservative resin → inner discipline that preserves vitality.</p>
                      <p>Cinnamon = fire of bark → inner heat of devotion and focus.</p>
                      <p>Cassia = fragrance of authority → inner dignity and sovereignty.</p>
                      <p>Calamus = reed rising straight → inner spine, channel of ascent.</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The priest being anointed was a parable: every human is a potential temple, every brain a hidden
                      altar.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The ancients encrypted neuro-spiritual truths in recipes. The temple was built as a cosmic map.
                      The oil was blended as an external mnemonic for internal processes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      Just as olive oil in lamps kept a temple glowing, inner chrism, when preserved, keeps the human
                      mind radiant.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">4. Science Meets Mystery</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Here's where modern seekers face a bridge. Neuroscience wants evidence. Spirituality speaks in
                      symbols. But the two aren't enemies. They're parallel languages describing one field of
                      experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">Consider:</p>
                    <div className="ml-6 space-y-2 text-muted-foreground">
                      <p>The pineal gland secretes melatonin in cycles influenced by lunar light.</p>
                      <p>
                        The brain's ventricles hold cerebrospinal fluid, shimmering under electron microscopy, rich with
                        neuropeptides.
                      </p>
                      <p>
                        Subtle bioelectric currents rise up the spinal cord when breathing is disciplined, altering
                        gamma brainwaves.
                      </p>
                      <p>
                        Plant oils and resins contain terpenes, sesquiterpenes, phenols — compounds that directly alter
                        mood, inflammation, and cognition.
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Isn't it uncanny? The very herbs and oils chosen for external chrism are the same that modern
                      phytochemistry shows to be psycho-neuroactive.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Myrrh is anti-inflammatory, stabilizing. Cinnamon increases insulin sensitivity, sharpening
                      metabolism. Cassia affects circulation. Calamus modulates focus. Olive oil stabilizes cellular
                      membranes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      It's as if Earth whispered: "Here are your allies, encoded in matter. Mirror them within."
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">5. The Anointed Path Today</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      What does it mean now, in 2025, when kings are elected through media campaigns and priests through
                      academic seminaries? Does anointing still matter?
                    </p>
                    <p className="text-muted-foreground leading-relaxed">Yes — but its axis has shifted inward.</p>
                    <p className="text-muted-foreground leading-relaxed">
                      The age of external hierarchy is dissolving. AI handles bureaucracy, algorithms curate authority.
                      What remains sacred is not crown or altar, but consciousness itself.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      To be anointed today is to reclaim the inner chrism:
                    </p>
                    <div className="ml-6 space-y-2 text-secondary">
                      <p>To treat the body as temple, not machine.</p>
                      <p>To honor the secretion of vitality, not squander it in endless distraction.</p>
                      <p>
                        To blend outer Earth gifts — herbs, oils, foods — with inner practices — breath, focus,
                        devotion.
                      </p>
                      <p>To live as if every lunar month were a cycle of descent, preservation, and ascent.</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      The outer oil teaches us: Earth provides the raw matter.
                      <br />
                      The inner oil reminds us: Spirit refines it into meaning.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      When they unite, the human becomes the priest, the altar, and the king — all at once.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">6. Hidden Continuity: A Line Unbroken</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Some imagine history as rupture: ancient magic versus modern science, ritual versus rationality.
                      But in truth, a continuity hums beneath.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The same olive trees still grow in Mediterranean sun. The same resins bleed from myrrh and
                      frankincense trees. The same Moon still governs tides and menstrual cycles.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      And within, the same brain still secretes its subtle chrism, waiting for attention.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The only difference? Awareness.
                      <br />
                      We forgot the mirror. We forgot that the recipe outside points to the recipe inside.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      But memory is returning. Seekers, mystics, even neuroscientists are re-opening this thread.
                      Meditation apps guide breath. Herbalists rediscover oils. Psychonauts explore DMT and serotonin as
                      sacraments. The language shifts, but the core is unchanged:
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      The oil of heaven and earth still flows.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div>
                  <h3 className="gothic-font text-xl text-primary mb-4">7. A Living Ritual for the Present</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      So what do we do? Not to copy Moses, not to steal the old recipe, but to live its spirit.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">A simple practice:</p>
                    <div className="ml-6 space-y-3">
                      <p className="text-secondary">
                        <strong>Outer preparation</strong> – Light a lamp or candle with olive oil. Smell cinnamon,
                        myrrh, or frankincense. Touch a drop to your forehead.
                      </p>
                      <p className="text-secondary">
                        <strong>Inner awareness</strong> – Sit in silence. Feel the brain as a temple. Sense a subtle
                        drop of luminous oil, secreted within.
                      </p>
                      <p className="text-secondary">
                        <strong>Alignment</strong> – Breathe slowly, spine upright (the calamus reed). Warm the belly
                        (cinnamon fire). Preserve stillness (myrrh). Crown yourself inwardly with dignity (cassia).
                      </p>
                      <p className="text-secondary">
                        <strong>Integration</strong> – Imagine the drop rising through your spine, anointing mind with
                        clarity.
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic text-primary">
                      This is not superstition. It is neuro-theology in action — aligning matter, body, and spirit.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/30" />

                <div className="text-center py-6">
                  <h3 className="gothic-font text-xl text-secondary mb-4">Closing of Part I</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The oil of heaven and earth are not two oils, but one mystery refracted. Earth exudes her fragrant
                    gifts. The brain distills its subtle chrism. Together, they form a bridge: body-temple, mind-altar,
                    cosmos-cathedral.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you touch olive oil to skin, when you preserve your inner secretion with care, you are
                    rejoining a continuity older than religion, fresher than neuroscience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic text-primary">
                    The forgotten oil is waiting — outside in groves and resins, inside in glands and fluids — for a
                    generation ready to anoint not kings or temples, but the entire human race with clarity, strength,
                    and luminous dignity.
                  </p>
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-secondary masonic-symbol" />
                      <Star className="w-4 h-4 text-primary masonic-symbol" />
                      <Star className="w-4 h-4 text-secondary masonic-symbol" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Part II */}
          <Card className="mb-12 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4">
                <Compass className="w-12 h-12 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-primary mb-4">Part II</CardTitle>
              <p className="gothic-font text-xl text-secondary italic">The Hidden Science of Chrism</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="drop-cap gothic-font text-secondary">W</span>
                <div className="flex-1 pt-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <em className="text-secondary">[Insert Part II Content Here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">
                    Esoteric tone with alchemical and Masonic symbols...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Part III */}
          <Card className="mb-12 border-2 border-secondary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <Pillar className="w-8 h-8 text-secondary/30 masonic-symbol" />
                <Pillar className="w-8 h-8 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-secondary mb-4">Part III</CardTitle>
              <p className="gothic-font text-xl text-primary italic">Rituals and Preservation</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="drop-cap gothic-font text-primary">B</span>
                <div className="flex-1 pt-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <em className="text-secondary">[Insert Part III Content Here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">Solemn tone with ritualistic Masonic art...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Part IV */}
          <Card className="mb-12 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4">
                <Triangle className="w-12 h-12 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-primary mb-4">Part IV</CardTitle>
              <p className="gothic-font text-xl text-secondary italic">The Path to Inner Illumination</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="drop-cap gothic-font text-secondary">A</span>
                <div className="flex-1 pt-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <em className="text-secondary">[Insert Part IV Content Here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">
                    Enlightened tone with radiant Masonic imagery...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Epilogue */}
          <Card className="mb-12 border-2 border-secondary/30 bg-card/80 backdrop-blur-sm">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <Crown className="w-8 h-8 text-secondary/30 masonic-symbol" />
                <Eye className="w-8 h-8 text-primary/30 masonic-symbol" />
              </div>
              <CardTitle className="gothic-font text-3xl text-secondary mb-4">Epilogue</CardTitle>
              <p className="gothic-font text-xl text-primary italic">Returning to the World</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="drop-cap gothic-font text-primary">T</span>
                <div className="flex-1 pt-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <em className="text-secondary">[Insert Epilogue Content Here]</em>
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">
                    Reflective tone with journey-themed Masonic art...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <Separator className="mb-6 bg-border/50" />
            <div className="flex justify-center items-center gap-4 mb-4">
              <Compass className="w-6 h-6 text-secondary masonic-symbol" />
              <Eye className="w-6 h-6 text-primary masonic-symbol" />
              <Triangle className="w-6 h-6 text-secondary masonic-symbol" />
              <Pillar className="w-6 h-6 text-primary masonic-symbol" />
              <Crown className="w-6 h-6 text-secondary masonic-symbol" />
            </div>
            <p className="text-muted-foreground/70 text-sm italic">
              "In darkness, we seek the light of ancient wisdom"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
